import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import IconInfo from '../icon/IconInfo';

type Color = 'default' | 'black' | 'gray';

interface Props {
  label: string;
  color?: Color;
  icon?: ReactNode;
  onClick?: () => void;
}

const Chip: FC<Props> = ({ label, color = 'default', icon, onClick }) => {
  return (
    <Wrapper color={color} onClick={onClick} data-testid="chip-wrapper">
      {icon ?? <IconInfo width={16} height={16} viewBox="0 0 16 16" />}
      <span>{label}</span>
    </Wrapper>
  );
};

export default Chip;

const Wrapper = styled.span<{ color: Color }>(
  {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '50px',
    '*:first-of-type': {
      marginRight: '4px',
    },
  },
  ({ theme, color }) => ({
    ...theme.typographies.body1,
    fontWeight: 500,
    ...(color === 'default' && {
      backgroundColor: theme.colors.white,
      color: theme.colors.gray4,
    }),
    ...(color === 'black' && {
      backgroundColor: theme.colors.black,
      color: theme.colors.white,
    }),
    ...(color === 'gray' && {
      backgroundColor: theme.colors.gray1,
      color: theme.colors.gray4,
    }),
  }),
);
