import { FC } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import IconCancelSmall from '../icon/IconCancelSmall';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  error?: string;
}

const TextField: FC<Props> = ({ error, ...rest }) => {
  const theme = useTheme();

  return (
    <div>
      <InputWrapper error={!!error} data-testid="input-wrapper">
        <Input {...rest} />
      </InputWrapper>
      {!!error && (
        <ErrorMessage data-testid="error-message">
          <IconCancelSmall width={16} height={16} stroke={theme.colors.danger} strokeWidth={2} />
          <span>{error}</span>
        </ErrorMessage>
      )}
    </div>
  );
};

export default TextField;

const InputWrapper = styled.div<{ error: boolean }>(
  {
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    boxSizing: 'border-box',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.gray1,
    '&:focus-within': {
      boxShadow: `0 0 0 1px ${theme.colors.gray3} inset`,
    },
  }),
);

const Input = styled.input(
  {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
  },
  ({ theme }) => ({
    ...theme.typographies.body1,
    color: theme.colors.black,
    caretColor: theme.colors.secondary,
    '&::placeholder': {
      color: theme.colors.gray3,
    },
  }),
);

const ErrorMessage = styled.div(
  {
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    '*:first-of-type': {
      marginRight: '8px',
    },
  },
  ({ theme }) => ({
    ...theme.typographies.text2,
    color: theme.colors.danger,
  }),
);
