import { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';

import useDidUpdate from '@/hooks/life-cycle/useDidUpdate';

interface Props {
  /**
   * # 이 컴포넌트는 단독으로 사용하지 못해요
   * `Carousel`의 자식으로써 사용하는 것을 권장해요
   *
   * @example
   * ```tsx
   * const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);
   *
   * <Carousel.Wrapper ref={setWrapper}>
   * </Carousel.Wrapper>
   * <Carousel.Indicator carouselWrapper={wrapper} />
   * ```
   */
  carouselWrapper: HTMLDivElement | null;
  /**
   * 스크롤을 통해 인덱스가 바뀔 때 실행되는 Callback 이에요.
   */
  onIndexChange?: (index: number) => void;
}

const Indicator = ({ carouselWrapper, onIndexChange }: Props) => {
  const childrenLength = carouselWrapper ? carouselWrapper.childNodes.length : 0;
  const childrenIds = useMemo(() => Array.from(Array(childrenLength).keys()), [childrenLength]);

  const { currentIndex } = useIndicator({ carouselWrapper, onIndexChange });

  return (
    <Wrapper>
      {childrenIds.map((eachIndex) => (
        <Dot key={eachIndex} isSelected={currentIndex === eachIndex} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div({
  height: '6px',
  margin: '8px 0',
  display: 'flex',
  gap: '4px',
  justifyContent: 'center',
  alignItems: 'center',
});

const Dot = styled.span<{ isSelected: boolean }>(
  {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    transition: 'background-color .3s',
  },
  ({ theme, isSelected }) => ({ backgroundColor: isSelected ? theme.colors.gray6 : theme.colors.gray3 }),
);

export default Indicator;

const useIndicator = ({ carouselWrapper, onIndexChange }: Pick<Props, 'carouselWrapper' | 'onIndexChange'>) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const throttledOnScroll = useMemo(
    () =>
      throttle(() => {
        if (!carouselWrapper) return;
        const { offsetWidth, scrollLeft } = carouselWrapper;
        const tempIndex = Math.round(scrollLeft / offsetWidth);
        setCurrentIndex(tempIndex);
      }, 300),
    [carouselWrapper],
  );

  useDidUpdate(() => {
    if (currentIndex === null) return;
    onIndexChange?.(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (!carouselWrapper) return;
    throttledOnScroll();
    carouselWrapper.addEventListener('scroll', throttledOnScroll);

    return () => {
      carouselWrapper.removeEventListener('scroll', throttledOnScroll);
    };
  }, [throttledOnScroll]);

  return { currentIndex };
};
