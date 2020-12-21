type Handler = (event: { type: ConnectPortEvent, data: PortEventHandler[ConnectPortEvent]; }) => void;

export class ConnectPort {
  private handlers: Partial<{ [T in ConnectPortEvent]: Array<Handler> }> = {};
  public port: chrome.runtime.Port;

  constructor(isWeb: boolean) {
    if (isWeb) {
      this.port = chrome.runtime.connect();
      this.port.onMessage.addListener((data) => {
        this.callHandler(data);
      });
    } else {
      chrome.runtime.onConnect.addListener(port => {
        port.onMessage.addListener((data) => {
          this.port = port;
          this.callHandler(data);
        });
      });
    }
  }

  private callHandler = (event: { type: ConnectPortEvent, data: PortEventHandler[ConnectPortEvent]; }) => {
    this.handlers[event.type]?.forEach((fn) => fn(event));
  };

  public on(event: ConnectPortEvent, fn: Handler) {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }
    this.handlers[event]!.push(fn);
  }

  public emit(event: ConnectPortEvent, data: PortEventHandler[ConnectPortEvent]) {
    if (!this.port) {
      requestAnimationFrame(() => {
        this.emit(event, data);
      });
    } else {
      this.port.postMessage({
        type: event,
        data
      });
    }

  }

  public off(event: string) {
    delete this.handlers[event];
  }

}