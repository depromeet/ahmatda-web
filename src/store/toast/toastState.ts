import { atom } from 'recoil';

interface Toast {
  id: string;
  content: string;
}

const toastState = atom<Toast | null>({
  key: 'toastState',
  default: null,
});

export default toastState;
