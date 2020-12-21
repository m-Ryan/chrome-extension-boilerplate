type ConnectPortEvent = 'PORT_INITED' | 'PORT_DISCONNECT';

type PortEventHandler = {
  [K in ConnectPortEvent]: {
    time: string;
  }
};