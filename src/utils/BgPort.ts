import { v4 as uuid } from 'uuid';
import { ConnectPort } from './ConnectPort';


export default new class BgPort extends ConnectPort {

  constructor() {
    super(false);
  }

};