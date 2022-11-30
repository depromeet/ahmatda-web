import React from 'react';
import styled from '@emotion/styled';
import IconChevron24pxRightLeft from '../icon/IconChevron24pxRightLeft';
import ContainedButton from '../button/ContainedButton';

const ListRequestSection = () => {
  return (
    <div>
      <MainTitle>찾으시는 리스트가 없나요?</MainTitle>
      <SubTitle>필요한 상황의 리스트를 말씀해 주세요.</SubTitle>
      <StyledButton>
        <div>
          <Emoji role="img" aria-label="writing hand">
            ✍
          </Emoji>
          리스트 요청하기
        </div>
        <IconChevron24pxRightLeft />
      </StyledButton>
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

const StyledButton = styled(ContainedButton)`
  // TODO: 클릭 시 디자인 적용
  ${({ theme }) => ({ color: theme.colors.black, backgroundColor: theme.colors.white })}
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const Emoji = styled.span`
  margin-right: 8px;
`;
