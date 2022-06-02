import BgPort from '@/utils/BgPort';
import { services } from '@/utils/service';

chrome.runtime.onInstalled.addListener(onInstalled);

async function onInstalled() {
  BgPort.init();
  try {
    const result = await services({
      url: 'https://easy-email.myshopify.com/admin',
      method: 'GET',
      headers: {
        'content-type': 'text/html; charset=UTF-8',
        cookie: `_master_udr=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWs1T1Rsa016VTJNeTB6WWpFeUxUUmlNRFl0T1Rnek1DMHpaR0kyTUROak9Ea3pOek1HT2daRlJnPT0iLCJleHAiOiIyMDI0LTA1LTMwVDEwOjQ4OjI0LjcyMFoiLCJwdXIiOiJjb29raWUuX21hc3Rlcl91ZHIifX0%3D--2e4fe2adc2eb1e9e005390e0a76a159482b9d2d7; new_admin=1; _secure_admin_session_id=d900ac029d0ada629bf53308b48d80e9; _secure_admin_session_id_csrf=d900ac029d0ada629bf53308b48d80e9; koa.sid=it5qkuyHo9eGJwDRod6lzJ7RCb4j3Td1; koa.sid.sig=5M39i0Iz30KXAA28bfWhCXxaztE; __ssid=ee648739-5bdd-4b74-813a-0b8fc2ce211a; preview_theme=1; storefront_digest=03aaaffe9cb47ee5c736c6d2f96325a71fb23cb412056390ce0460d7c0516bb7; secure_customer_sig=; localization=HK; _orig_referrer=; _landing_page=%2F%3F_ab%3D0%26_fd%3D0%26_sc%3D1; _y=ce048bbc-4aac-4861-be78-180938eb09c0; _shopify_y=ce048bbc-4aac-4861-be78-180938eb09c0; cart=17a2907b318ebdafc49baf417efeb828; cart_ts=1654065113; cart_sig=f388e051471ec7ddde800b8fc86ae15e; cart_ver=gcp-us-central1%3A1; _secure_session_id=deeb777718b1bfc345b9ce3f0b445d38`,
      },
    });
    const scrfToken = result.data.match(
      /\<script.* data-serialized-id="csrf-token"\>"(.*?)"<\/script>/,
      '$1'
    )[1];
    console.log('scrfToken', scrfToken);
  } catch (error) {
    console.log('error', error);
  }
}
