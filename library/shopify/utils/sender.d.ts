export declare class Sender {
    queue: Array<{
        handle: (...args: any) => void;
        uid: string;
    }>;
    constructor();
    run(): void;
    getFeature<T extends Record<string, any>>(data: T): Promise<any>;
    checkCallback(): void;
    getCookie(url: string): Promise<any>;
}
