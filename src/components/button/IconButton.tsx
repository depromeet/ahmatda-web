import { ComponentProps, FC } from 'react';
import styled from '@emotion/styled';

import Button from './Button';

type Props = ComponentProps<typeof Button>;

const IconButton: FC<Props> = ({ children, ...rest }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default IconButton;

const StyledButton = styled(Button)(
  {
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    width: '40px',
    height: '40px',
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
    color: theme.colors.gray4,
  }),
);
