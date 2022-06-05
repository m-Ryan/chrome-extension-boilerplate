import WebPort from '@/utils/WebPort';

async function main() {

  await WebPort.init();

  const rc = new Receiver();
  rc.init();
}

class Receiver {

  init() {
    this.run();
  }

  run() {
    this.checkCallback();
    requestAnimationFrame(() => {
      this.run();
    });
  }

  checkCallback() {
    const receiveEles = Array.from(document.querySelectorAll('.splitlime-sender'));
    receiveEles.forEach(item => {
      const messageId = item.getAttribute('message-id')!;
      const payload = JSON.parse(item.textContent!);
      item.parentElement?.removeChild(item);
      WebPort.getFeature('REQUEST_FEATURE', payload).then(async ({ data }) => {
        this.replay(messageId, data);
      });

    });
  }

  replay(uid: string, payload: any) {
    const receiveDom = document.createElement('div');
    receiveDom.className = 'splitlime-receiver';
    receiveDom.style.display = "none";
    receiveDom.setAttribute('message-id', uid);
    receiveDom.textContent = JSON.stringify(payload);
    document.body.appendChild(receiveDom);
  }
}

main();

