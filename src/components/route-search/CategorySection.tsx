import React from 'react';
import styled from '@emotion/styled';

import Chip from '../chip/Chip';

import { CategoryType } from '@/types';

interface Props {
  defaultColor?: 'gray';
  options: CategoryType[];
  selectedCategory: CategoryType;
  onCategoryClick: (selectedCategory: CategoryType) => void;
}

const CategorySection = ({ options, defaultColor, selectedCategory, onCategoryClick }: Props) => {
  return (
    <Wrapper>
      {options.map((item) => (
        <Chip
          label={item.name}
          key={item.id}
          onClick={() => {
            onCategoryClick(item);
          }}
          color={selectedCategory.id === item.id ? 'black' : defaultColor}
        />
      ))}
    </Wrapper>
  );
};

export default CategorySection;

const Wrapper = styled.div`
  display: flex;
  column-gap: 4px;
  overflow-x: auto;
  white-space: nowrap;
`;
