import { ConnectPort } from './ConnectPort';
import { get } from 'lodash';

export default new (class BgPort extends ConnectPort {
  constructor() {
    super(false);
  }

  public init() {
    this.on('REQUEST_PORT_INITED', () => {
      this.emit('PORT_INITED', {});
    });

    this.on(
      'REQUEST_FEATURE',
      (event: {
        uid: string;
        type: ConnectPortEvent;
        data: {
          name: string;
          data: any;
        };
      }) => {

        console.log('event', event);

        const handler = get(chrome, event.data.name);

        handler(event.data.data, (...args: any) => {
          console.log(args);

          this.emit('REQUEST_FEATURE', [...args], event.uid);
        });
      }
    );
  }
})();
