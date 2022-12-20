import { atom } from 'recoil';

import { ItemType } from '@/constants/route-onboard/type';

const selectedOnboardItems = atom<ItemType[]>({
  key: 'selectedOnboardItems',
  default: [],
});

export default selectedOnboardItems;
