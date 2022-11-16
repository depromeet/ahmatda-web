import React, { InputHTMLAttributes, useId } from 'react';
import styled from '@emotion/styled';

import IconCheckbox from '../icon/IconCheckbox';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ onCheck, checked }: Props) => {
  const id = useId();
  return (
    <StyledLabel htmlFor={`checkbox-${id}`}>
      <StyledHiddenInput type="checkbox" checked={checked} onChange={onCheck} id={`checkbox-${id}`} />
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
