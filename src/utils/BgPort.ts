import { ConnectPort } from './ConnectPort';

export default new (class BgPort extends ConnectPort {
  constructor() {
    super(false);
  }

  public init() {
    this.on('REQUEST_PORT_INITED', () => {
      this.emit('PORT_INITED', {});
    });

    this.on(
      'REQUEST_COOKIE',
      (event: {
        type: ConnectPortEvent;
        data: PortEventHandler[ConnectPortEvent];
      }) => {
        chrome.cookies.getAll(event.data, (cookies) => {
          const cookie = cookies
            .map((item) => item.name + '=' + item.value)
            .join('; ');
          this.emit('REQUEST_COOKIE', cookie);
        });
      }
    );
  }
})();
