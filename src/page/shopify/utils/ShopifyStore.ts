import { getCsrfToken } from './getCsrfToken';
import { getPreviewNotificationEmail } from './getPreviewNotificationEmail';
import { Sender } from './sender';
import { updateAbandonedCheckoutEmails } from './updateAbandonedCheckoutEmails';
import { updateNotificationEmail } from './updateNotificationEmail';

export class ShopifyStore {
  sender: Sender;
  shop: string;
  config: { cookie: string; csrfToken: string };
  initializedPromise: Promise<any>;

  constructor(shop: string) {
    const sender = new Sender();
    this.sender = sender;
    this.shop = shop;
    this.initializedPromise = this.getConfig();
  }

  async isLogin() {
    await this.initializedPromise;
    return Boolean(this.config);
  }

  getConfig = async () => {
    await this.initializedPromise;
    try {
      const url = `https://${this.shop}/admin`;
      const cookie = await this.sender.getCookie(url);

      const csrfToken = await getCsrfToken({ url, cookie });
      this.config = {
        cookie,
        csrfToken,
      };
      return this.config;
    } catch (error) {}
  };

  async updateAbandonedCheckoutEmails(payload: { enabled: boolean }) {
    if (!payload.enabled) {
      throw new Error('Missing enabled');
    }
    await this.initializedPromise;
    if (!this.config) {
      throw new Error('Store not logged in.');
    }
    return updateAbandonedCheckoutEmails({
      data: payload,
      url: `https://${this.shop}/admin`,
      ...this.config,
    });
  }

  async updateNotificationEmail(payload: {
    emailTemplateId: string;
    title: string;
    bodyHtml: string;
  }) {
    if (!payload.bodyHtml) {
      throw new Error('Missing bodyHtml');
    }
    if (!payload.title) {
      throw new Error('Missing title');
    }
    if (!payload.emailTemplateId) {
      throw new Error('Missing emailTemplateId');
    }
    await this.initializedPromise;
    if (!this.config) {
      throw new Error('Store not logged in.');
    }
    return updateNotificationEmail({
      data: payload,
      url: `https://${this.shop}/admin`,
      ...this.config,
    });
  }

  async getPreviewNotificationEmail(payload: {
    emailTemplateId: string;
    title: string;
    bodyHtml: string;
  }) {
    if (!payload.bodyHtml) {
      throw new Error('Missing bodyHtml');
    }
    if (!payload.title) {
      throw new Error('Missing title');
    }
    if (!payload.emailTemplateId) {
      throw new Error('Missing emailTemplateId');
    }
    await this.initializedPromise;
    if (!this.config) {
      throw new Error('Store not logged in.');
    }
    return getPreviewNotificationEmail({
      data: payload,
      url: `https://${this.shop}/admin`,
      ...this.config,
    });
  }
  async sendTestEmail(payload: {
    emailTemplateId: string;
    title: string;
    bodyHtml: string;
  }) {
    if (!payload.bodyHtml) {
      throw new Error('Missing bodyHtml');
    }
    if (!payload.title) {
      throw new Error('Missing title');
    }
    if (!payload.emailTemplateId) {
      throw new Error('Missing emailTemplateId');
    }
    await this.initializedPromise;
    if (!this.config) {
      throw new Error('Store not logged in.');
    }
    return getPreviewNotificationEmail({
      data: payload,
      url: `https://${this.shop}/admin`,
      ...this.config,
    });
  }
}
