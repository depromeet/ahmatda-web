import { forwardRef, PropsWithChildren, Ref } from 'react';
import styled from '@emotion/styled';

import Indicator from './Indicator';

const CarouselWrapper = forwardRef(function CarouselWrapper(
  { children }: PropsWithChildren,
  forwardedRef: Ref<HTMLDivElement>,
) {
  return <Wrapper ref={forwardedRef}>{children}</Wrapper>;
});

const Wrapper = styled.section({
  width: '100%',
  scrollSnapType: 'x mandatory',
  display: 'flex',
  // NOTE: 이후 사용할 때 수정 필요
  gap: '55px',
  overflowX: 'scroll',
});

const CarouselItem = ({ children }: PropsWithChildren) => {
  return <Item>{children}</Item>;
};

const Item = styled.article({
  scrollSnapAlign: 'center',
  flexShrink: 0,
  width: '100%',
});

/**
 * Carousel에 필요한 컴포넌트들을 사용할 수 있어요
 *
 * @example
 * ```tsx
 * <Carousel.Wrapper ref={setCarouselWrapper}>
    <Carousel.Item>
      first
    </Carousel.Item>
    // ...
  </Carousel.Wrapper>
  <Carousel.Indicator carouselWrapper={carouselWrapper} />
 * ```
 *
 */
const Carousel = { Wrapper: CarouselWrapper, Item: CarouselItem, Indicator };

export default Carousel;
