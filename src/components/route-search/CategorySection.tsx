import React from 'react';
import Chip from '../chip/Chip';
import styled from '@emotion/styled';

function CategorySection() {
  return (
    <Wrapper>
      {CATEGORY_DUMMY.map((name) => (
        <Chip label={name} key={name} />
      ))}
    </Wrapper>
  );
}

export default CategorySection;

const CATEGORY_DUMMY = ['물놀이', '디프만', '호캉스', '일상', '운동', '유럽여행'];

const Wrapper = styled.div`
  overflow: auto;
  white-space: nowrap;
`;
