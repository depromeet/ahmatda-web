import { atom } from 'recoil';

import { UserTemplate } from '@/hooks/api/template/type';

const currentUserTemplateState = atom<UserTemplate | null>({ key: 'currentUserTemplateState', default: null });

export default currentUserTemplateState;
