import { AxiosRequestConfig } from 'axios';
import { CreateNetwork } from './network';

const network = CreateNetwork('');

export const services = (config: AxiosRequestConfig<any>) => {
  return network.post(`https://cloud-mao.vercel.app/api/proxy`, {
    url: config.url!,
    data: config.data,
    method: config.method,
    headers: {
      ...config.headers,
    },
  });
};
