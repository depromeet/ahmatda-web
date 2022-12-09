import React, { FC, InputHTMLAttributes, useId, useState } from 'react';
import styled from '@emotion/styled';
import { LayoutGroup, m } from 'framer-motion';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  options: string[];
  initialValue?: string;
  onChange?: (option: string) => void;
}

const SegmentedControl: FC<Props> = ({ options, initialValue, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(initialValue ?? options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;

    setSelectedOption(name);
    onChange?.(name);
  };

  return (
    <Wrapper>
      <LayoutGroup>
        {options.map((option) => {
          const id = useId();
          const isSelected = option === selectedOption;
          return (
            <OptionWrapper key={option} whileTap={isSelected ? { scale: 0.95 } : { opacity: 0.6 }}>
              {isSelected && <ActivatedBackground layoutId="SegmentedControlActive" />}
              <StyledHiddenInput
                value={option}
                onChange={handleChange}
                checked={isSelected}
                type="radio"
                name={option}
                id={`segmented-control-${id}`}
              />
              <StyledLabel htmlFor={`segmented-control-${id}`}>{option}</StyledLabel>
            </OptionWrapper>
          );
        })}
      </LayoutGroup>
    </Wrapper>
  );
};

export default SegmentedControl;

const Wrapper = styled.div`
  display: flex;
  padding: 4px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.gray1};
`;

const OptionWrapper = styled(m.div)`
  flex: 1;
  position: relative;
  padding-block: 7px;
  text-align: center;
`;

const StyledHiddenInput = styled.input`
  appearance: none;
  &:checked + label {
    color: ${({ theme }) => theme.colors.gray6};
  }
`;

const StyledLabel = styled.label`
  ${({ theme }) => ({ ...theme.typographies.button2 })}
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.gray3};
`;

const ActivatedBackground = styled(m.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.white};
`;
