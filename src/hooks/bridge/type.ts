import { LISTENING_WEBVIEW_MESSAGE_TYPE, POST_WEBVIEW_MESSAGE_TYPE } from './constants';

export type LISTENLING_WEBVIEW_MESSAGE_KEY = keyof typeof LISTENING_WEBVIEW_MESSAGE_TYPE;

export type POST_WEBVIEW_MESSAGE_KEY = keyof typeof POST_WEBVIEW_MESSAGE_TYPE;

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
