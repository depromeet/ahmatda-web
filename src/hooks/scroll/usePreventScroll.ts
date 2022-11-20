import { useEffect } from 'react';

/**
 * `condition`에 따라 body의 스크롤을 막습니다
 *
 * @param condition
 * 스크롤을 방지할 상태 입니다
 *
 */
export default function usePreventScroll(condition = true) {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (condition) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [condition]);
}
