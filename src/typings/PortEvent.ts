type ConnectPortEvent =
  | 'REQUEST_PORT_INITED'
  | 'PORT_INITED'
  | 'PORT_DISCONNECT'
  | 'REQUEST_COOKIE'
  | 'RECEIVE_COOKIE';

type PortEventHandler = {
  [K in ConnectPortEvent]: {};
};
