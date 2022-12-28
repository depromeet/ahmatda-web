import { atom } from 'recoil';

import { ListCardType } from '@/constants/route-onboard/type';

const selectedOnboardTemplate = atom<ListCardType | null>({
  key: 'selectedOnboardTemplate',
  default: null,
});

export default selectedOnboardTemplate;
