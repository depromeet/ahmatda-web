import { atom } from 'recoil';

import localStorageEffect from './effect';

const userTokenState = atom<string | null>({
  key: 'userToken',
  default: null,
  effects: [localStorageEffect<string | null>('user_token')],
});

export default userTokenState;
