import styled from '@emotion/styled';

import Spinner from './Spinner';

const FixedSpinner = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default FixedSpinner;

const Wrapper = styled.div(
  {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    zIndex: 9999,
  },
  ({ theme }) => ({ backgroundColor: theme.colors.white }),
);
