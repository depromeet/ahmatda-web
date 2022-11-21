import styled from '@emotion/styled';

import IconMenu from '../icon/IconMenu';
import IconPin from '../icon/IconPin';

const DefaultAppBar = () => {
  return (
    <Wrapper>
      <span>Logo</span>

      <ButtonWrapper>
        <Button>
          <IconPin />
        </Button>

        <Button>
          <IconMenu />
        </Button>
      </ButtonWrapper>
    </Wrapper>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.gray1 }),
);

const ButtonWrapper = styled.div({
  position: 'absolute',
  top: '0',
  right: '-12px',
  height: '100%',
});

const Button = styled.button({
  all: 'unset',
  cursor: 'pointer',
  width: '48px',
  height: '48px',
  textAlign: 'center',
});
