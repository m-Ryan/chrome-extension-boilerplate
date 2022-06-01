import { nanoid } from 'nanoid';

type Handler = (event: {
  type: ConnectPortEvent;
  data: PortEventHandler[ConnectPortEvent];
}) => void;

export abstract class ConnectPort {
  private handlers: Partial<{
    [T in ConnectPortEvent]: Array<[Handler]>;
  }> = {};
  public port: chrome.runtime.Port;

  constructor(isWeb: boolean) {
    if (isWeb) {
      this.port = chrome.runtime.connect();
      this.port.onMessage.addListener((data) => {
        this.callHandler(data);
      });
    } else {
      chrome.runtime.onConnect.addListener((port) => {
        port.onMessage.addListener((data) => {
          this.port = port;
          this.callHandler(data);
        });
      });
    }
  }

  private callHandler = (event: Parameters<Handler>[0]) => {
    this.handlers[event.type]?.forEach(([fn]) => {
      fn(event);
    });
  };

  public on(event: ConnectPortEvent, fn: Handler) {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }
    this.handlers[event]!.push([fn]);
  }

  public emit(
    event: ConnectPortEvent,
    data: PortEventHandler[ConnectPortEvent]
  ) {
    if (!this.port) {
      requestAnimationFrame(() => {
        this.emit(event, data);
      });
    } else {
      this.port.postMessage({
        type: event,
        data: data,
      });
    }
  }

  public off(event: string, fn: Handler) {
    if (!this.handlers[event]) return;

    this.handlers[event] = this.handlers[event].filter(
      (item: Handler) => item !== fn
    );
  }

  public request<T extends Record<string, any>>(
    event: ConnectPortEvent,
    data: T
  ) {
    return new Promise<{ event: ConnectPortEvent; data: any }>((resolve) => {
      const handler = (args: any) => {
        resolve(args);
        this.off(event, handler);
      };
      this.on(event, handler);
      this.emit(event, { ...data });
    });
  }
}
