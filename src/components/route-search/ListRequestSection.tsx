import React from 'react';
import styled from '@emotion/styled';

import ContainedButton from '../button/ContainedButton';
import IconChevron24pxRightLeft from '../icon/IconChevron24pxRightLeft';

const ListRequestSection = () => {
  return (
    <div>
      <MainTitle>찾으시는 리스트가 없나요?</MainTitle>
      <SubTitle>필요한 상황의 리스트를 말씀해 주세요.</SubTitle>
      <StyledButton>
        <StyledAnchor href="https://tally.so/r/w5Xqyd" target="_blank" rel="noreferrer">
          <div>
            <Emoji role="img" aria-label="writing hand">
              ✍
            </Emoji>
            리스트 요청하기
          </div>
          <IconChevron24pxRightLeft />
        </StyledAnchor>
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

const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 12px;
  padding-inline: 20px;
`;

const StyledButton = styled(ContainedButton)`
  ${({ theme }) => ({ color: theme.colors.black, backgroundColor: theme.colors.white })}
  width: 100%;
`;

const Emoji = styled.span`
  margin-right: 8px;
`;
