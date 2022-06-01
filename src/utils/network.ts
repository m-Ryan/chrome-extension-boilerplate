import qs from 'qs';

export function CreateNetwork(baseUrl = '', defaultOptions?: RequestInit) {
  return {
    get: async <T extends any = any>(
      url: string,
      params: { [key: string]: any } = {}
    ): Promise<Response<T>> => {
      return fetch(
        baseUrl + url + qs.stringify(params.params, { addQueryPrefix: true }),
        {
          method: 'get',
          headers: {
            'content-type': 'application/json',
          },
          ...defaultOptions,
        }
      ).then((res) => res.json());
    },
    post: async <T extends any = any>(
      url: string,
      data: any,
      config: { headers: { [key: string]: string } } = { headers: {} }
    ): Promise<Response<T>> => {
      return fetch(baseUrl + url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
          ...config.headers,
        },
      }).then((res) => {
        console.log('res', res);
        try {
          return res.json();
        } catch (error) {
          console.log('error', error);
        }
      });
    },
  };
}

interface Meta {
  code: string;
  type: string;
  message: string;
}

interface Response<T> {
  data: T;
  meta: Meta;
}
