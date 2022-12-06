import { atom } from 'recoil';

import localStorageEffect from './effect';

const userIdState = atom<string | null>({
  key: 'userId',
  default: null,
  effects: [localStorageEffect<string | null>('user_id')],
});

export default userIdState;
