import { getCsrfToken } from './utils/getCsrfToken';
import { Sender } from './utils/sender';



const sender = new Sender();

window.getShopifyConfig = async (url: string) => {
  const cookie = await sender.getCookie(url);
  console.log('cookie', cookie);

  const csrfToken = await getCsrfToken({ url, cookie });
  return {
    cookie,
    csrfToken,
  };
};

(window as any).SplitlimeExt = sender;
