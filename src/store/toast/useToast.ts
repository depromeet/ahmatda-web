import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import toastState from './toastState';

interface FireToast {
  content: string;
  duration?: number;
}

const DEFAULT_DURATION = 1500;

const useToast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  const removeToast = useCallback((id: string) => {
    setToast((prev) => {
      if (!prev) return null;
      if (prev.id === id) return null;
      return prev;
    });
  }, []);

  const fireToast = useCallback(({ content, duration = DEFAULT_DURATION }: FireToast) => {
    const id = new Date().getTime().toString();
    setToast({ id, content });
    setTimeout(() => removeToast(id), duration);
  }, []);

  return { toast, fireToast };
};

export default useToast;
