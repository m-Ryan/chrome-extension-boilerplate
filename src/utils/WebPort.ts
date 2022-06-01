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
})();
