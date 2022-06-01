import { services } from '@/utils/service';
import WebPort from '@/utils/WebPort';
import './index.scss';

async function main() {
  await WebPort.init();

  WebPort.request('REQUEST_COOKIE', {
    domain: 'easy-email.myshopify.com',
  }).then(async ({ data: cookie }) => {
    console.log('cookie', cookie);
  });
}

main();
