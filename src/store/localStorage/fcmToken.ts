import { atom } from 'recoil';

import localStorageEffect from './effect';

const fcmTokenState = atom<string | null>({
  key: 'fcmToken',
  default: null,
  effects: [localStorageEffect<string | null>('fcm_token')],
});

export default fcmTokenState;
