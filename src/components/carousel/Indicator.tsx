import { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';

interface Props {
  carouselWrapper: HTMLDivElement | null;
}

const Indicator = ({ carouselWrapper }: Props) => {
  const childrenLength = carouselWrapper ? carouselWrapper.childNodes.length : 0;
  const childrenIds = useMemo(() => Array.from(Array(childrenLength).keys()), [childrenLength]);

  const { currentIndex } = useIndicator({ carouselWrapper });

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

const useIndicator = ({ carouselWrapper }: Pick<Props, 'carouselWrapper'>) => {
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
