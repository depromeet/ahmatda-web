import { FC } from 'react';
import styled from '@emotion/styled';

interface Props {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const SelectItem: FC<Props> = ({ text, onClick, active = false }) => {
  return (
    <Wrapper active={active} onClick={onClick}>
      {text}
    </Wrapper>
  );
};

export default SelectItem;

const Wrapper = styled.div<{ active: boolean }>(
  {
    padding: '7px 16px',
    borderRadius: '8px',
  },
  ({ active, theme }) => ({
    ...theme.typographies.button2,
    color: active ? theme.colors.white : theme.colors.gray4,
    backgroundColor: active ? theme.colors.gray4 : theme.colors.gray1,
  }),
);
