import { Sender } from './sender';
export declare class ShopifyStore {
    sender: Sender;
    shop: string;
    config: {
        cookie: string;
        csrfToken: string;
    };
    initializedPromise: Promise<any>;
    constructor(shop: string);
    isLogin(): Promise<boolean>;
    getConfig: () => Promise<{
        cookie: string;
        csrfToken: string;
    } | undefined>;
    updateAbandonedCheckoutEmails(payload: {
        enabled: boolean;
    }): Promise<any>;
    updateNotificationEmail(payload: {
        emailTemplateId: string;
        title: string;
        bodyHtml: string;
    }): Promise<any>;
    getPreviewNotificationEmail(payload: {
        emailTemplateId: string;
        title: string;
        bodyHtml: string;
    }): Promise<any>;
    sendTestEmail(payload: {
        emailTemplateId: string;
        title: string;
        bodyHtml: string;
    }): Promise<any>;
    getCheckoutSetting(): Promise<any>;
}
