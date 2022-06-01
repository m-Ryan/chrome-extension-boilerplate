import BgPort from '@/utils/BgPort';
import { services } from '@/utils/service';

chrome.runtime.onInstalled.addListener(onInstalled);

async function onInstalled() {
  BgPort.init();
  try {
    const result = await services({
      url: 'https://www.baidu.com/',
      method: 'GET',
    });

    console.log('result', result);
  } catch (error) {
    console.log('error', error);
  }
}
