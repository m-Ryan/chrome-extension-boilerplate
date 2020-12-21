import WebPort from '@/utils/WebPort';
import './index.scss';


WebPort.on('PORT_INITED', () => console.log('receive from bgport'));

document.body.onclick = () => {
  WebPort.emit('PORT_INITED', {
    time: 'click'
  });

};