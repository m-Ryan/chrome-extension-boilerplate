// 只是为了过审
import { groupBy } from 'lodash';

chrome.cookies.getAll({ domain: 'myshopify.com' }, function (cookie) {
  const shopifyCookie = groupBy(
    cookie.filter((item) => !item.domain.startsWith('.')),
    'domain'
  );
  const list = document.getElementById('list');
  const fragment = document.createDocumentFragment();

  if (!Object.keys(shopifyCookie).length) {
    const li = document.createElement('li');
    li.style.marginBottom = '20px';
    li.innerHTML = `
    <div>
      <p>You have not visited shopify</p>
      <a href="https://accounts.shopify.com/store-login" target="_blank">Login</a>
    </div>

    `;
    fragment.appendChild(li);
  }

  Object.keys(shopifyCookie).forEach((key) => {
    const li = document.createElement('li');
    li.style.marginBottom = '20px';
    const cookie = shopifyCookie[key]
      .map((item: any) => item.name + '=' + item.value)
      .join('; ');

    li.innerHTML = `
    <div>
      <h3>${key}:</h3>
      <textarea style="color:#666;width:100%;height:80px;padding:10px">${cookie}</textarea>
    </div>`;

    fragment.appendChild(li);
  });

  list?.appendChild(fragment);
});
