export declare function updateNotificationEmail(payload: {
    url: string;
    cookie: string;
    csrfToken: string;
    data: {
        emailTemplateId: string;
        title: string;
        bodyHtml: string;
    };
}): Promise<any>;
