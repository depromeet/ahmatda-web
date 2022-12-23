import { atom } from 'recoil';

const fcmTokenState = atom<string | null>({
  key: 'fcmToken',
  default: null,
});

export default fcmTokenState;
