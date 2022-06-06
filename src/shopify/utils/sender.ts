import { nanoid } from 'nanoid';

export class Sender {

  queue: Array<{ handle: (...args: any) => void; uid: string; }> = [];

  constructor() {
    this.run();
  }

  run() {
    this.checkCallback();
    requestAnimationFrame(() => {
      this.run();
    });
  }

  getFeature<T extends Record<string, any>>(data: T) {
    const uid = nanoid();
    return new Promise<any>((resolve) => {


      this.queue.push({
        handle: resolve,
        uid: uid,
      });
      const sendDom = document.createElement('div');
      sendDom.className = 'splitlime-sender';
      sendDom.style.display = "none";
      sendDom.setAttribute('message-id', uid);
      sendDom.textContent = JSON.stringify(data);
      document.body.appendChild(sendDom);

    });
  }

  checkCallback() {
    const receiveEles = Array.from(document.querySelectorAll('.splitlime-receiver'));
    receiveEles.forEach(item => {
      const messageId = item.getAttribute('message-id');
      const match = this.queue.find(q => q.uid === messageId);
      if (match) {
        match.handle(JSON.parse(item.textContent!));
        item.parentElement?.removeChild(item);
      }
    });
  }

  async getCookie(url: string) {
    const [cookies] = await this.getFeature({
      name: 'cookies.getAll',
      data: {
        url: url,
      }
    });
    const cookie = cookies
      .map((item: any) => item.name + '=' + item.value)
      .join('; ');

    return cookie;
  }
}
