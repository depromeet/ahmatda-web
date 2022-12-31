import React, { FC, UIEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import ScrollItem from './ScrollItem';

interface Props {
  items: string[] | number[];
  value: string | number;
  onChange: (value: string | number) => void;
  align?: 'left' | 'center' | 'right';
  width?: number;
}

const ScrollBox: FC<Props> = ({ value, items, onChange, align = 'center', width = 80 }) => {
  const scrollBox = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  useEffect(() => {
    const pickedIdx = items.findIndex((item) => item === value);
    scrollBox.current?.scrollTo(0, pickedIdx * BUTTON_HEIGHT);
  }, [value]);

  const getIndexByOffsetY = (offsetY: number) => {
    const index = Math.round(offsetY / BUTTON_HEIGHT);

    return index;
  };

  const handleScroll: UIEventHandler = useCallback((e) => {
    const index = getIndexByOffsetY((e.target as HTMLDivElement).scrollTop);
    setSelectedItem(items[index]);
    onChange(items[index]);
  }, []);

  return (
    <Wrapper onScroll={handleScroll} width={width} ref={scrollBox}>
      <InnerScrollBox>
        {['start-empty', ...items, 'end-empty'].map((item) => (
          <ScrollItem key={item} item={item} align={align} selectedItem={selectedItem} height={BUTTON_HEIGHT} />
        ))}
      </InnerScrollBox>
    </Wrapper>
  );
};

export default ScrollBox;

const BUTTON_HEIGHT = 40;
const SCROLL_HEIGHT = BUTTON_HEIGHT * 3;

const Wrapper = styled.div<{ width: number }>(
  {
    height: SCROLL_HEIGHT,
    overflowY: 'scroll',
    scrollSnapType: 'y mandatory',
    scrollSnapAlign: 'center',
    overscrollBehavior: 'none',
  },
  ({ width }) => ({
    width: `${width}px`,
  }),
);

const InnerScrollBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
