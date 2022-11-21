import { forwardRef, PropsWithChildren, Ref } from 'react';
import styled from '@emotion/styled';

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

const Carousel = { Wrapper: CarouselWrapper, Item: CarouselItem };

export default Carousel;
