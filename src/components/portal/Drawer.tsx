import { ComponentProps, FC } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import IconAlarm from '../icon/IconAlarm';
import IconCircleCheck from '../icon/IconCircleCheck';
import IconCircleInfo from '../icon/IconCircleInfo';

import SideMenu from './SideMenu';

type Props = Omit<ComponentProps<typeof SideMenu>, 'children'>;

const Drawer: FC<Props> = ({ isShowing, setToClose }) => {
  return (
    <SideMenu isShowing={isShowing} setToClose={setToClose}>
      <Wrapper>
        <ImgWrapper>이미지 들어갈 예정</ImgWrapper>
        <LinkWrapper>
          <StyledNextLink href="/setting/alarm">
            <IconAlarm />
            <span>알림 설정</span>
          </StyledNextLink>
          <StyledNextLink href="/information">
            <IconCircleInfo />
            <span>정보</span>
          </StyledNextLink>
          <StyledNextLink href="/maker">
            <IconCircleCheck />
            <span>만든 사람들</span>
          </StyledNextLink>
        </LinkWrapper>
        <VersionWrapper>
          <span>버전 정보</span>
          {/* TODO: App에서 버전 정보 받아와서 보여주기 */}
          <span>1.0</span>
        </VersionWrapper>
      </Wrapper>
    </SideMenu>
  );
};

export default Drawer;

const Wrapper = styled.div({
  padding: '20px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const ImgWrapper = styled.div({
  marginTop: '36px',
  width: '100%',
  height: '80px',
  backgroundColor: 'gray',
  borderRadius: '12px',
});

const LinkWrapper = styled.div({
  all: 'unset',
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
});

const StyledNextLink = styled(Link)(
  {
    all: 'unset',
    cursor: 'pointer',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  ({ theme }) => ({
    ...theme.typographies.body1,
    color: theme.colors.gray5,
    borderBottom: `1px solid ${theme.colors.gray2}`,
  }),
);

const VersionWrapper = styled.div(
  {
    width: '100%',
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  ({ theme }) => ({ ...theme.typographies.body1, color: theme.colors.gray4 }),
);
