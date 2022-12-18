import React, { FC } from 'react';
import styled from '@emotion/styled';

interface Props extends Omit<StyledProps, 'isSelected'> {
  item: string | number;
  selectedItem: string | number;
}

const ScrollItem: FC<Props> = ({ item, align, selectedItem, height }) => {
  const isEmptyItem = item.toString().includes('empty');
  const isSelected = item === selectedItem;

  return (
    <Item key={item} align={align} isSelected={isSelected} height={height}>
      {isEmptyItem ? '' : item}
    </Item>
  );
};

export default ScrollItem;

interface StyledProps {
  align: 'left' | 'center' | 'right';
  isSelected: boolean;
  height: number;
}

const Item = styled.div<StyledProps>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    scrollSnapType: 'y mandatory',
    scrollSnapAlign: 'center',
  },
  ({ height, align, isSelected, theme }) => ({
    ...(isSelected ? theme.typographies.button1 : theme.typographies.button2),
    height,
    justifyContent: align,
    color: isSelected ? 'white' : theme.colors.gray4,
  }),
);
