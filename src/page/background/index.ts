import BgPort from '@/utils/BgPort';
chrome.runtime.onInstalled.addListener(onInstalled);

function onInstalled() {
  console.log('onInstalled');
}

BgPort.on('PORT_INITED', (data: any) => {
  console.log(data);
  BgPort.port.postMessage(data);
});