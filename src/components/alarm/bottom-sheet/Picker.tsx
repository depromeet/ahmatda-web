import { FC } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import IconChevron20pxUpDown from '@/components/icon/IconChevron20pxUpDown';

interface Props {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const Picker: FC<Props> = ({ text, onClick, active = false }) => {
  const theme = useTheme();

  return (
    <Wrapper onClick={onClick} active={active}>
      <span>{text}</span>
      <IconChevron20pxUpDown
        direction={active ? 'up' : 'down'}
        stroke={active ? theme.colors.gray1 : theme.colors.gray5}
      />
    </Wrapper>
  );
};

export default Picker;

const Wrapper = styled.div<{ active: boolean }>(
  {
    display: 'flex',
    alignItems: 'center',
    padding: '7px 9px 7px 16px',
    borderRadius: '8px',
    border: 'none',
  },
  ({ active, theme }) => ({
    ...theme.typographies.button2,
    color: active ? theme.colors.gray1 : theme.colors.gray5,
    backgroundColor: active ? theme.colors.black : theme.colors.gray1,
  }),
);
