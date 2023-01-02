import axios, { AxiosError, AxiosResponse } from 'axios';

import { errorMessage } from '@/constants/message';
import ApiException from '@/exceptions/ApiException';
import CustomException from '@/exceptions/CustomException';
import { ApiErrorScheme } from '@/models/api';
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

const interceptorResponseRejected = (error: AxiosError<{ error: ApiErrorScheme }>) => {
  if (error.response?.data?.error?.message && error.response?.data?.error?.code) {
    return Promise.reject(new ApiException(error.response.data.error));
  }

  return Promise.reject(new CustomException(errorMessage.UNKNOWN_400, 'NETWORK_ERROR'));
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
