import React, { ChangeEvent, InputHTMLAttributes, useId } from 'react';
import styled from '@emotion/styled';

import IconCheckbox from '../icon/IconCheckbox';

import useToggle from '@/hooks/common/useToggle';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onToggle?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  textLabel?: string;
}

const Checkbox = ({ onToggle, defaultChecked = false, textLabel }: Props) => {
  const [checked, _, toggle] = useToggle(defaultChecked);

  const id = useId();

  return (
    <CheckboxWrapper>
      <StyledInput
        type="checkbox"
        onChange={(e) => {
          toggle();
          if (onToggle) {
            onToggle(e);
          }
        }}
        id={id}
        checked={checked}
        data-testid="checkbox"
      />
      <StyledLabel htmlFor={id}>
        {textLabel && <TextLabel>{textLabel}</TextLabel>}
        <IconWrapper>
          <IconCheckbox isChecked={checked} />
        </IconWrapper>
      </StyledLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;

const CheckboxWrapper = styled.div`
  display: inline-block;
`;

const StyledInput = styled.input`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip-path: polygon(0 0, 0 0, 0 0);
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

const TextLabel = styled.span`
  ${({ theme }) => ({ ...theme.typographies.caption2 })};
  color: ${({ theme }) => theme.colors.gray5};
  padding: 8px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
`;
