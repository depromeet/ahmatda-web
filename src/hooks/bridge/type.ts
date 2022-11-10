export type LISTENLING_WEBVIEW_MESSAGE_KEY = 'foo' | 'bar';

export type POST_WEBVIEW_MESSAGE_KEY = 'baz';

export interface ListeningAppMessageData {
  type: LISTENLING_WEBVIEW_MESSAGE_KEY;
  data: unknown;
  [key: string]: unknown;
}

export interface PostAppMessageData {
  type: POST_WEBVIEW_MESSAGE_KEY;
  data: unknown;
  [key: string]: unknown;
}
