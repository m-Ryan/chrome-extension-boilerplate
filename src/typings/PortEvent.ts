type ConnectPortEvent =
  | 'REQUEST_PORT_INITED'
  | 'PORT_INITED'
  | 'PORT_DISCONNECT'
  | 'REQUEST_FEATURE';

type PortEventHandler = {
  [K in ConnectPortEvent]: {};
};
