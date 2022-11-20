import React, { InputHTMLAttributes, useState } from 'react';
import styled from '@emotion/styled';

import IconCheckbox from '../icon/IconCheckbox';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onCheck?: () => void;
  onUncheck?: () => void;
  defaultChecked?: boolean;
}

const Checkbox = ({ onCheck, onUncheck, defaultChecked = false }: Props) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const onToggle = () => {
    setChecked((prev) => !prev);
    if (!checked && onCheck) {
      onCheck();
      return;
    }
    if (onUncheck) {
      onUncheck();
    }
  };

  return (
    <CheckboxWrapper onClick={onToggle} role="checkbox" aria-checked={checked}>
      <IconCheckbox isChecked={checked} />
    </CheckboxWrapper>
  );
};

export default Checkbox;

const CheckboxWrapper = styled.label`
  display: inline-block;
  padding: 8px;
  width: 24px;
  height: 24px;
`;
