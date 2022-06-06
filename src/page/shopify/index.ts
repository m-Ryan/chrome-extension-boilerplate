import { ShopifyStore } from './utils/ShopifyStore';
export * from './constants';

(window as any).SplitlimeExt = {
  ShopifyStore: ShopifyStore,
};
