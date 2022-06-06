export declare function CreateNetwork(baseUrl?: string, defaultOptions?: RequestInit): {
    get: <T extends unknown = any>(url: string, params?: {
        [key: string]: any;
    }) => Promise<T>;
    post: <T_1 extends unknown = any>(url: string, data: any, config?: {
        headers: {
            [key: string]: string;
        };
    }) => Promise<T_1>;
};
