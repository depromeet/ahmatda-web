import React from 'react';
import styled from '@emotion/styled';

import Button from '../button/Button';

const ListRequestSection = () => {
  return (
    <div>
      <MainTitle>찾으시는 리스트가 없나요?</MainTitle>
      <SubTitle>필요한 상황의 리스트를 말씀해 주세요.</SubTitle>
      <Button>리스트 요청하기</Button>
    </div>
  );
};

export default ListRequestSection;

const MainTitle = styled.p`
  ${({ theme }) => ({ ...theme.typographies.title2, color: theme.colors.black })};
  margin-bottom: 4px;
`;
const SubTitle = styled.p`
  ${({ theme }) => ({ ...theme.typographies.body1, color: theme.colors.gray4 })};
  margin-bottom: 16px;
`;
