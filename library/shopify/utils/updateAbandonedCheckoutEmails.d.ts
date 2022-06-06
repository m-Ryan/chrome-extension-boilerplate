export declare function updateAbandonedCheckoutEmails(payload: {
    url: string;
    cookie: string;
    csrfToken: string;
    data: {
        enabled: boolean;
    };
}): Promise<any>;
