import React from 'react';
import styled from '@emotion/styled';

import Chip from '../chip/Chip';

interface Props {
  defaultColor?: 'gray';
}

const CategorySection = ({ defaultColor }: Props) => {
  return (
    <Wrapper>
      {CATEGORY_DUMMY.map((name) => (
        <Chip label={name} key={name} color={defaultColor} />
      ))}
    </Wrapper>
  );
};

export default CategorySection;

const CATEGORY_DUMMY = ['물놀이', '디프만', '호캉스', '일상', '운동', '유럽여행'];

const Wrapper = styled.div`
  display: flex;
  column-gap: 4px;
  overflow-x: auto;
  white-space: nowrap;
`;
