import React from 'react';
import styled from '@emotion/styled';

import Chip from '../chip/Chip';
import Graphic from '../graphic/Graphic';
import IconAdd from '../icon/IconAdd';

import { Category } from '@/hooks/api/category/type';

interface Props {
  defaultColor?: 'gray';
  options?: Category[];
  selectedCategory: Category | null;
  onCategoryClick: (selectedCategory: Category) => void;
}

const CategorySection = ({ options, defaultColor, selectedCategory, onCategoryClick }: Props) => {
  return (
    <Wrapper>
      {options?.map((item) => (
        <Chip
          label={item.name}
          key={item.id}
          onClick={() => {
            onCategoryClick(item);
          }}
          color={selectedCategory?.id === item.id ? 'black' : defaultColor}
          icon={item.isRecCategory ? <IconAdd /> : <Graphic type={item.emoji} />}
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
