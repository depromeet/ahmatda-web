export type LISTENLING_WEBVIEW_MESSAGE_KEY = 'FCM_TOKEN' | 'APP_VERSION';

export type POST_WEBVIEW_MESSAGE_KEY = 'APP_VERSION';

export interface ListeningAppMessageData<T = string> {
  type: LISTENLING_WEBVIEW_MESSAGE_KEY;
  data: T;
  [key: string]: unknown;
}

export interface PostAppMessageData<T = unknown> {
  type: POST_WEBVIEW_MESSAGE_KEY;
  data: T;
  [key: string]: unknown;
}
