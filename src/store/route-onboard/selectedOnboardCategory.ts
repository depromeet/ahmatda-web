import { atom } from 'recoil';

import { ONBOARD_CATEGORY } from '@/constants/route-onboard/onboardConstants';
import { Category } from '@/hooks/api/category/type';

const selectedOnboardCategory = atom<Category>({
  key: 'selectedOnboardCategory',
  default: ONBOARD_CATEGORY[0],
});

export default selectedOnboardCategory;
