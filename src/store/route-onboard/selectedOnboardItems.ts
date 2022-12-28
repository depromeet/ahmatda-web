import { atom } from 'recoil';

import { ONBOARD_ITEMS } from '@/constants/route-onboard/onboardConstants';
import { ItemType } from '@/constants/route-onboard/type';

const selectedOnboardItems = atom<ItemType[]>({
  key: 'selectedOnboardItems',
  default: ONBOARD_ITEMS.DAILY,
});

export default selectedOnboardItems;
