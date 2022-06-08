export { services } from './../utils/service';
import { ShopifyStore } from './utils/ShopifyStore';
export * from './constants';

(window as any).SplitlimeExt = {
  ShopifyStore: ShopifyStore,
};

export { ShopifyStore };
