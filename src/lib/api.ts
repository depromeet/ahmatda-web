import axios, { AxiosError, AxiosResponse } from 'axios';

import { isProd } from '@/utils/utils';

const instance = axios.create({
  baseURL: isProd(process.env.NODE_ENV) ? process.env.NEXT_PUBLIC_API_HOST : '',
});

export const replaceUserTokenToInstance = (userToken: string) => {
  instance.defaults.headers.common['ahmatda-user-token'] = userToken;
};

const interceptorResponseFulfilled = (response: AxiosResponse) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }

  return Promise.reject(response.data);
};

const interceptorResponseRejected = (error: AxiosError<{ error: string }>) => {
  return Promise.reject(new Error(error.response?.data?.error ?? error.name));
};

instance.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
