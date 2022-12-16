import React, { FC, UIEventHandler, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import ScrollItem from './ScrollItem';

interface Props {
  items: string[] | number[];
  onChange: (value: string | number) => void;
  align?: 'left' | 'center' | 'right';
}

const ScrollBox: FC<Props> = ({ items, onChange, align = 'center' }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  const getIndexByOffset = (offsetY) => {
    const index = Math.round(offsetY / BUTTON_HEIGHT);

    return index;
  };

  const handleScroll: UIEventHandler = (e) => {
    const index = getIndexByOffset((e.target as HTMLDivElement).scrollTop);

    setSelectedItem(items[index]);
  };

  return (
    <Wrapper onScroll={handleScroll}>
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

const Wrapper = styled.div({
  height: SCROLL_HEIGHT,
  width: '80px',
  overflowY: 'scroll',
  scrollSnapType: 'y mandatory',
  scrollSnapAlign: 'center',
  overscrollBehavior: 'none',
});

const InnerScrollBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
