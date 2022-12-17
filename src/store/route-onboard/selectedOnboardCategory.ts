import { atom } from 'recoil';

const selectedOnboardCategory = atom<string>({
  key: 'selectedOnboardCategory',
  default: 'DAILY',
});

export default selectedOnboardCategory;
