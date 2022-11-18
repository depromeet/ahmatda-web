import React, { ChangeEvent, InputHTMLAttributes, useId, useState } from 'react';
import styled from '@emotion/styled';

import IconCheckbox from '../icon/IconCheckbox';

import useDidUpdate from '@/hooks/life-cycle/useDidUpdate';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onCheck: () => void;
  onUncheck: () => void;
  defaultChecked?: boolean;
}

const Checkbox = ({ onCheck, onUncheck, defaultChecked = false }: Props) => {
  const id = useId();
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const onToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  useDidUpdate(() => {
    if (checked) {
      onCheck();
      return;
    }
    onUncheck();
  }, [checked]);

  return (
    <StyledLabel htmlFor={`checkbox-${id}`}>
      <StyledHiddenInput type="checkbox" onChange={onToggle} id={`checkbox-${id}`} data-testid="checkbox" />
      <IconCheckbox isChecked={checked} />
    </StyledLabel>
  );
};

export default Checkbox;

const StyledLabel = styled.label`
  display: inline-block;
  padding: 8px;
  width: 24px;
  height: 24px;
`;

const StyledHiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`;
