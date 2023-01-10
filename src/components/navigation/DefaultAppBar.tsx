import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import styled from '@emotion/styled';

import IconAlarm from '../icon/IconAlarm';
import IconMenu from '../icon/IconMenu';

import useToggle from '@/hooks/common/useToggle';

const Drawer = dynamic(() => import('../portal/Drawer'));

const DefaultAppBar = () => {
  const [isDrawerShowing, _, toggleDrawerShowing] = useToggle(false);

  return (
    <>
      <Wrapper>
        <ButtonWrapper>
          <StyledLink href="/notice">
            <IconAlarm />
          </StyledLink>

          <Button onClick={toggleDrawerShowing}>
            <IconMenu />
          </Button>
        </ButtonWrapper>
      </Wrapper>

      <Drawer isShowing={isDrawerShowing} setToClose={toggleDrawerShowing} />
    </>
  );
};

export default DefaultAppBar;

const Wrapper = styled.section(
  {
    position: 'sticky',
    top: '0',
    left: '0',
    width: '100%',
    height: '48px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.gray1 }),
);

const ButtonWrapper = styled.div({
  position: 'absolute',
  top: '0',
  right: '-12px',
  height: '100%',
  display: 'flex',
});

const Button = styled.button({
  all: 'unset',
  cursor: 'pointer',
  width: '48px',
  height: '48px',
  textAlign: 'center',
});

const StyledLink = styled(NextLink)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '48px',
});
