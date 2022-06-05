import { nanoid } from 'nanoid';
import { ConnectPort } from './ConnectPort';

export default new (class WebPort extends ConnectPort {
  constructor() {
    super(true);
  }

  async init() {
    this.emit('REQUEST_PORT_INITED', {});
    return new Promise((resolve) =>
      this.on('PORT_INITED', () => {
        resolve(true);
      })
    );
  }

  getFeature<T extends Record<string, any>>(
    event: ConnectPortEvent,
    data: T
  ) {
    return new Promise<{ event: ConnectPortEvent; data: any; }>((resolve) => {
      const uid = nanoid();
      const handler = (args: any) => {
        resolve(args);
        this.off(event, handler);
      };
      this.on(event, handler);
      this.emit(event, data, uid);
    });
  }
})();
