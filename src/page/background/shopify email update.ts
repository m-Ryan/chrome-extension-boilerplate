import BgPort from '@/utils/BgPort';
import { services } from '@/utils/service';

chrome.runtime.onInstalled.addListener(onInstalled);

async function onInstalled() {
  BgPort.init();
  try {
    const result = await services({
      url: 'https://easy-email.myshopify.com/admin/internal/web/graphql/core?operation=EmailTemplateUpdate&type=mutation',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        'x-csrf-token': 'k5AomJav-n1BihQy-gZvlO1sLTfZhBP6sRaA',
        'x-shopify-web-force-proxy': '1',
        cookie: `_master_udr=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWs1T1Rsa016VTJNeTB6WWpFeUxUUmlNRFl0T1Rnek1DMHpaR0kyTUROak9Ea3pOek1HT2daRlJnPT0iLCJleHAiOiIyMDI0LTA1LTMwVDEwOjQ4OjI0LjcyMFoiLCJwdXIiOiJjb29raWUuX21hc3Rlcl91ZHIifX0%3D--2e4fe2adc2eb1e9e005390e0a76a159482b9d2d7; new_admin=1; _secure_admin_session_id=d900ac029d0ada629bf53308b48d80e9; _secure_admin_session_id_csrf=d900ac029d0ada629bf53308b48d80e9; koa.sid=it5qkuyHo9eGJwDRod6lzJ7RCb4j3Td1; koa.sid.sig=5M39i0Iz30KXAA28bfWhCXxaztE; __ssid=ee648739-5bdd-4b74-813a-0b8fc2ce211a; preview_theme=1; storefront_digest=03aaaffe9cb47ee5c736c6d2f96325a71fb23cb412056390ce0460d7c0516bb7; secure_customer_sig=; localization=HK; _orig_referrer=; _landing_page=%2F%3F_ab%3D0%26_fd%3D0%26_sc%3D1; _y=ce048bbc-4aac-4861-be78-180938eb09c0; _shopify_y=ce048bbc-4aac-4861-be78-180938eb09c0; cart=17a2907b318ebdafc49baf417efeb828; cart_ts=1654065113; cart_sig=f388e051471ec7ddde800b8fc86ae15e; cart_ver=gcp-us-central1%3A1; _secure_session_id=deeb777718b1bfc345b9ce3f0b445d38`,
      },
      data: {
        operationName: 'EmailTemplateUpdate',
        variables: {
          input: {
            emailTemplateId: 'gid://shopify/EmailTemplate/order_confirmation',
            title: 'Hello shopify plugin',
            bodyHtml: `<!doctype html>
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

            <head>
              <title>
              </title>
              <!--[if !mso]><!-->
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <!--<![endif]-->
              <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <style type="text/css">
                #outlook a {
                  padding: 0;
                }

                body {
                  margin: 0;
                  padding: 0;
                  -webkit-text-size-adjust: 100%;
                  -ms-text-size-adjust: 100%;
                }

                table,
                td {
                  border-collapse: collapse;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                }

                img {
                  border: 0;
                  height: auto;
                  line-height: 100%;
                  outline: none;
                  text-decoration: none;
                  -ms-interpolation-mode: bicubic;
                }

                p {
                  display: block;
                  margin: 13px 0;
                }
              </style>
              <!--[if mso]>
                    <noscript>
                    <xml>
                    <o:OfficeDocumentSettings>
                      <o:AllowPNG/>
                      <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                    </xml>
                    </noscript>
                    <![endif]-->
              <!--[if lte mso 11]>
                    <style type="text/css">
                      .mj-outlook-group-fix { width:100% !important; }
                    </style>
                    <![endif]-->
              <style type="text/css">
                @media only screen and (min-width:480px) {
                  .mj-column-per-50 {
                    width: 50% !important;
                    max-width: 50%;
                  }

                  .mj-column-px-200 {
                    width: 200px !important;
                    max-width: 200px;
                  }

                  .mj-column-px-400 {
                    width: 400px !important;
                    max-width: 400px;
                  }

                  .mj-column-per-25 {
                    width: 25% !important;
                    max-width: 25%;
                  }

                  .mj-column-per-75 {
                    width: 75% !important;
                    max-width: 75%;
                  }

                  .mj-column-per-100 {
                    width: 100% !important;
                    max-width: 100%;
                  }

                  .mj-column-per-33-333333333333336 {
                    width: 33.333333333333336% !important;
                    max-width: 33.333333333333336%;
                  }
                }
              </style>
              <style media="screen and (min-width:480px)">
                .moz-text-html .mj-column-per-50 {
                  width: 50% !important;
                  max-width: 50%;
                }

                .moz-text-html .mj-column-px-200 {
                  width: 200px !important;
                  max-width: 200px;
                }

                .moz-text-html .mj-column-px-400 {
                  width: 400px !important;
                  max-width: 400px;
                }

                .moz-text-html .mj-column-per-25 {
                  width: 25% !important;
                  max-width: 25%;
                }

                .moz-text-html .mj-column-per-75 {
                  width: 75% !important;
                  max-width: 75%;
                }

                .moz-text-html .mj-column-per-100 {
                  width: 100% !important;
                  max-width: 100%;
                }

                .moz-text-html .mj-column-per-33-333333333333336 {
                  width: 33.333333333333336% !important;
                  max-width: 33.333333333333336%;
                }
              </style>
              <style type="text/css">
                @media only screen and (max-width:480px) {
                  table.mj-full-width-mobile {
                    width: 100% !important;
                  }

                  td.mj-full-width-mobile {
                    width: auto !important;
                  }
                }
              </style>
            </head>

            <body style="word-spacing:normal;background-color:#d6dde5;">
              <div style="background-color:#d6dde5;">
                <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:10px 10px 10px 10px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:280px;">
                                                    <a href="https://mjml.io" target="_blank">
                                                      <img alt="Racoon logo" height="auto" src="http://191n.mj.am/img/191n/3s/x4u.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="280" />
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#fa8739" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="background:#fa8739;background-color:#fa8739;margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fa8739;background-color:#fa8739;width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:200px;" ><![endif]-->
                          <div class="mj-column-px-200 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px 10px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:40px;line-height:1.7;text-align:center;color:#ffffff;">
                                              <p style="font-size: 17px;">SPRING PROMO</p>
                                              <p>50%</p>
                                              <p>OFFER</p>
                                              <p style="font-size: 13px">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br /></p>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" vertical-align="middle" style="font-size:0px;padding:15px 25px 40px 25px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="#ffffff" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px 10px 25px;text-align:center;background:#ffffff;" valign="middle">
                                                    <a href="https://mjml.io" style="display:inline-block;background:#ffffff;color:#fa8739;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:16px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px 10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> SHOP NOW </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:400px;" ><![endif]-->
                          <div class="mj-column-px-400 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:400px;">
                                                    <img alt="Clothes set" height="auto" src="https://assets.maocanhua.cn/57b75a82-e8df-4281-9590-fb9487466d6e-image.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="400" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#2f323b" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="background:#2f323b;background-color:#2f323b;margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#2f323b;background-color:#2f323b;width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:middle;width:150px;" ><![endif]-->
                          <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:middle;padding:10px 0px 10px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:10px 0px 10px 0px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:42px;">
                                                    <img alt="Box free shipping" height="auto" src="http://191n.mj.am/img/191n/3s/x4t.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="42" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:middle;width:450px;" ><![endif]-->
                          <div class="mj-column-per-75 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:middle;padding:10px 0px 10px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="font-size:0px;padding:0px 25px 10px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:18px;line-height:1.7;text-align:left;color:#ffffff;">
                                              <p>FREE SHIPPING ON ORDER <span style="font-weight: bold;color: rgb(250, 135, 57);">OVER 55&#x20AC;</span></p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:bottom;width:300px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:bottom;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:30px 0px 20px 0px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:209px;">
                                                    <img alt="Chesterk tank" height="auto" src="http://191n.mj.am/img/191n/3s/x4v.jpg" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="209" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:15px;font-weight:bold;line-height:1.7;text-align:center;color:#000000;">
                                              <p>CHESTERK TANK</p>
                                              <p style="color: rgb(250, 135, 57);">15&#x20AC;</p>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" vertical-align="middle" style="font-size:0px;padding:0px 30px 10px 30px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="#fa8739" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;text-align:center;background:#fa8739;" valign="middle">
                                                    <a href="https://mjml.io" style="display:inline-block;background:#fa8739;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> BUY NOW </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:bottom;width:300px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:bottom;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:10px 0px 20px 0px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:178px;">
                                                    <img alt="Beyond backpack" height="auto" src="http://191n.mj.am/img/191n/3s/x4g.jpg" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="178" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:15px;font-weight:bold;line-height:1.7;text-align:center;color:#000000;">
                                              <p>BEYOND BACKPACK</p>
                                              <p style="color: rgb(250, 135, 57);">20&#x20AC;</p>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" vertical-align="middle" style="font-size:0px;padding:0px 30px 10px 30px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="#612d0a" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px 10px 25px;text-align:center;background:#612d0a;" valign="middle">
                                                    <a href="https://mjml.io" style="display:inline-block;background:#612d0a;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px 10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> BUY NOW </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:bottom;width:150px;" ><![endif]-->
                          <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:bottom;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:30px 0px 20px 0px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:150px;">
                                                    <img alt="Jensen shorts" height="auto" src="http://191n.mj.am/img/191n/3s/x46.jpg" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:15px;font-weight:bold;line-height:1.7;text-align:center;color:#000000;">
                                              <p>JENSEN SHORTS</p>
                                              <p style="color: rgb(250, 135, 57);">28&#x20AC;</p>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" vertical-align="middle" style="font-size:0px;padding:0px 30px 10px 30px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="#fa8739" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;text-align:center;background:#fa8739;" valign="middle">
                                                    <a href="https://mjml.io" style="display:inline-block;background:#fa8739;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> BUY NOW </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:bottom;width:150px;" ><![endif]-->
                          <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:bottom;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:20px 0px 20px 0px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:129px;">
                                                    <img alt="Verdant cap" height="auto" src="http://191n.mj.am/img/191n/3s/x4h.jpg" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="129" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:15px;font-weight:bold;line-height:1.7;text-align:center;color:#000000;">
                                              <p>VERDANT CAP</p>
                                              <p style="color: rgb(250, 135, 57);">20&#x20AC;</p>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" vertical-align="middle" style="font-size:0px;padding:0px 25px 10px 25px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="#fa8739" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;text-align:center;background:#fa8739;" valign="middle">
                                                    <a href="https://mjml.io" style="display:inline-block;background:#fa8739;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> BUY NOW </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:bottom;width:150px;" ><![endif]-->
                          <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:bottom;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:20px 0px 20px 0px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:150px;">
                                                    <img alt="Blake polo shirt" height="auto" src="http://191n.mj.am/img/191n/3s/x4i.jpg" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:15px;font-weight:bold;line-height:1.7;text-align:center;color:#000000;">
                                              <p>BLAKE POLO SHIRT</p>
                                              <p style="color: rgb(250, 135, 57);">25&#x20AC;</p>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" vertical-align="middle" style="font-size:0px;padding:0px 30px 10px 30px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="#fa8739" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;text-align:center;background:#fa8739;" valign="middle">
                                                    <a href="https://mjml.io" style="display:inline-block;background:#fa8739;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> BUY NOW </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:bottom;width:150px;" ><![endif]-->
                          <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:bottom;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:20px 0px 20px 0px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:72px;">
                                                    <img alt="Sketch floral" height="auto" src="http://191n.mj.am/img/191n/3s/x4j.jpg" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="72" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:15px;font-weight:bold;line-height:1.7;text-align:center;color:#000000;">
                                              <p>SKETCH FLORAL</p>
                                              <p style="color: rgb(250, 135, 57);">23&#x20AC;</p>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" vertical-align="middle" style="font-size:0px;padding:0px 30px 10px 30px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="#fa8739" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;text-align:center;background:#fa8739;" valign="middle">
                                                    <a href="https://mjml.io" style="display:inline-block;background:#fa8739;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> BUY NOW </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#fa8739" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="background:#fa8739;background-color:#fa8739;margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fa8739;background-color:#fa8739;width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:300px;">
                                                    <img alt="Man 1" height="auto" src="http://191n.mj.am/img/191n/3s/x4k.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="300" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;line-height:1.7;text-align:left;color:#ffffff;">
                                              <p style="font-size: 19px;">ANDERSON SWEATER</p>
                                              <p style="font-size: 36px;">75&#x20AC;</p>
                                              <p>The Anderson Sweater features a floral all-over print with contrast colour.</p>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" vertical-align="middle" style="font-size:0px;padding:0px 30px 20px 30px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="#ffffff" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px 10px 25px;text-align:center;background:#ffffff;" valign="middle">
                                                    <a href="https://mjml.io" style="display:inline-block;background:#ffffff;color:#fa8739;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px 10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> BUY NOW </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#2f323b" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="background:#2f323b;background-color:#2f323b;margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#2f323b;background-color:#2f323b;width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:0px 0px 20px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;line-height:1.7;text-align:left;color:#ffffff;">
                                              <p style="font-size: 19px;">ALDER TWO JONES JACKET</p>
                                              <p style="font-size: 36px;">100&#x20AC;</p>
                                              <p>Colour-block design, zip entry, oxford hood lining, side pockets &amp; TC lining.</p>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" vertical-align="middle" style="font-size:0px;padding:0px 30px 10px 30px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="#fa8739" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px 10px 25px;text-align:center;background:#fa8739;" valign="middle">
                                                    <a href="https://mjml.io" style="display:inline-block;background:#fa8739;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px 10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> BUY NOW </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:300px;">
                                                    <img alt="Man 2" height="auto" src="http://191n.mj.am/img/191n/3s/xj6.jpg" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="300" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#fa8739" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="background:#fa8739;background-color:#fa8739;margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fa8739;background-color:#fa8739;width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px 10px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;line-height:1.7;text-align:center;color:#ffffff;">
                                              <p style="font-size: 14px;">DISCOVER OUR</p>
                                              <p style="font-size: 27px;">SUMMER COLLECTION</p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:250px;">
                                                    <img alt="Topaz C3 shoes" height="auto" src="http://191n.mj.am/img/191n/3s/x4q.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="250" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:15px;font-weight:bold;line-height:1.7;text-align:center;color:#000000;">
                                              <p>TOPAZ C3 SHOES</p>
                                              <p style="color: rgb(250, 135, 57);">70&#x20AC;</p>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" vertical-align="middle" style="font-size:0px;padding:0px 30px 10px 30px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="#fa8739" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px 10px 25px;text-align:center;background:#fa8739;" valign="middle">
                                                    <a href="https://mjml.io" style="display:inline-block;background:#fa8739;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px 10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> BUY NOW </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:199px;">
                                                    <img alt="Camden backpack" height="auto" src="http://191n.mj.am/img/191n/3s/x4r.jpg" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="199" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:15px;font-weight:bold;line-height:1.7;text-align:center;color:#000000;">
                                              <p>CAMDEN BACKPACK</p>
                                              <p style="color: rgb(250, 135, 57);">50&#x20AC;</p>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" vertical-align="middle" style="font-size:0px;padding:0px 30px 10px 30px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="#fa8739" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px 10px 25px;text-align:center;background:#fa8739;" valign="middle">
                                                    <a href="https://mjml.io" style="display:inline-block;background:#fa8739;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px 10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> BUY NOW </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#2f323b" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="background:#2f323b;background-color:#2f323b;margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#2f323b;background-color:#2f323b;width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:200px;" ><![endif]-->
                          <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px 10px 25px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:72px;">
                                                    <img alt="Cards" height="auto" src="http://191n.mj.am/img/191n/3s/x47.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="72" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;line-height:1.7;text-align:center;color:#ffffff;">
                                              <p style="font-size: 15px;font-weight: bold;">PAYMENT METHODS</p>
                                              <p>We accept all majors payments options</p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:200px;" ><![endif]-->
                          <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px 0px 25px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:70px;">
                                                    <img alt="Currencies" height="auto" src="http://191n.mj.am/img/191n/3s/x48.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="70" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;line-height:1.7;text-align:center;color:#ffffff;">
                                              <p style="font-size: 15px;font-weight: bold;">CURRENCIES CHOICE</p>
                                              <p>You have the choice to pay with your own currencies</p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:200px;" ><![endif]-->
                          <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px 8px 25px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:82px;">
                                                    <img alt="Express" height="auto" src="http://191n.mj.am/img/191n/3s/x4y.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="82" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:13px;line-height:1.7;text-align:center;color:#ffffff;">
                                              <p style="font-size: 15px;font-weight: bold;">EXPRESS SHIPPING</p>
                                              <p>Delivered tomorrow before noon</p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#fa8739" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="background:#fa8739;background-color:#fa8739;margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fa8739;background-color:#fa8739;width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:0px 0px 20px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:middle;width:300px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:middle;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:10px 0px 0px 0px;word-break:break-word;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                              <tbody>
                                                <tr>
                                                  <td style="width:180px;">
                                                    <img alt="Racoon logo" height="auto" src="http://191n.mj.am/img/191n/3s/x49.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="180" />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td><td class="" style="vertical-align:middle;width:300px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:middle;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style="font-size:0px;padding:20px 25px 10px 25px;word-break:break-word;">
                                            <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                              <tbody>
                                                <tr>
                                                  <td style="padding:4px 4px 4px 4px;vertical-align:middle;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#3b5998;border-radius:3px;width:20px;">
                                                      <tbody>
                                                        <tr>
                                                          <td style="padding:0px;font-size:0;height:20px;vertical-align:middle;width:20px;">
                                                            <a href="https://www.facebook.com/sharer/sharer.php?u=[[SHORT_PERMALINK]]" target="_blank">
                                                              <img height="20" src="https://easy-email-m-ryan.vercel.app/images/acbae5eb-efa4-4eb6-866c-f421e740b713-ad3c92b1-9cdb-4a7b-aad3-75ad809db8a3.png" style="border-radius:3px;display:block;" width="20" />
                                                            </a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                  <td style="vertical-align:middle;padding:4px 4px 4px 0px;">
                                                    <a href="https://www.facebook.com/sharer/sharer.php?u=[[SHORT_PERMALINK]]" style="color:#333333;font-size:13px;font-weight:normal;font-family:lucida Grande,Verdana,Microsoft YaHei;line-height:22px;text-decoration:none;" target="_blank"> Facebook </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <!--[if mso | IE]></td><td><![endif]-->
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                              <tbody>
                                                <tr>
                                                  <td style="padding:4px 4px 4px 4px;vertical-align:middle;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#55acee;border-radius:3px;width:20px;">
                                                      <tbody>
                                                        <tr>
                                                          <td style="padding:0px;font-size:0;height:20px;vertical-align:middle;width:20px;">
                                                            <a href="https://twitter.com/intent/tweet?url=[[SHORT_PERMALINK]]" target="_blank">
                                                              <img height="20" src="https://easy-email-m-ryan.vercel.app/images/98520d6c-5cef-449e-bcbf-6316ccec2088-e8780361-0deb-4896-895e-e690c886cdf0.png" style="border-radius:3px;display:block;" width="20" />
                                                            </a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                  <td style="vertical-align:middle;padding:4px 4px 4px 0px;">
                                                    <a href="https://twitter.com/intent/tweet?url=[[SHORT_PERMALINK]]" style="color:#333333;font-size:13px;font-weight:normal;font-family:lucida Grande,Verdana,Microsoft YaHei;line-height:22px;text-decoration:none;" target="_blank"> Google </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <!--[if mso | IE]></td><td><![endif]-->
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                              <tbody>
                                                <tr>
                                                  <td style="padding:4px 4px 4px 4px;vertical-align:middle;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#dc4e41;border-radius:3px;width:20px;">
                                                      <tbody>
                                                        <tr>
                                                          <td style="padding:0px;font-size:0;height:20px;vertical-align:middle;width:20px;">
                                                            <a href="https://plus.google.com/share?url=[[SHORT_PERMALINK]]" target="_blank">
                                                              <img height="20" src="https://easy-email-m-ryan.vercel.app/images/b064f705-34ba-4400-975e-9dd0cec21c30-cc9aa158-56bd-4bf1-b532-72390d25c864.png" style="border-radius:3px;display:block;" width="20" />
                                                            </a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                  <td style="vertical-align:middle;padding:4px 4px 4px 0px;">
                                                    <a href="https://plus.google.com/share?url=[[SHORT_PERMALINK]]" style="color:#333333;font-size:13px;font-weight:normal;font-family:lucida Grande,Verdana,Microsoft YaHei;line-height:22px;text-decoration:none;" target="_blank"> Twitter </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <!--[if mso | IE]></td></tr></table><![endif]-->
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </div>
            </body>

            </html>`,
          },
        },
        query:
          'mutation EmailTemplateUpdate($input: EmailTemplateUpdateInput!) {\n  emailTemplateUpdate(input: $input) {\n    emailTemplate {\n      id\n      name\n      title\n      bodyHtml\n      includeHtml\n      hasDefaultBody\n      hasDefaultTitle\n      hasCorrespondingSmsTemplate\n      translatableResourceId\n      __typename\n    }\n    userErrors {\n      field\n      message\n      __typename\n    }\n    __typename\n  }\n}\n',
      },
    });

    console.log('result', result);
  } catch (error) {
    console.log('error', error);
  }
}
