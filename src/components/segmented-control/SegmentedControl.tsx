import React, { ChangeEvent, InputHTMLAttributes, useId, useState } from 'react';
import styled from '@emotion/styled';
import { LayoutGroup, m } from 'framer-motion';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  onChange?: (e: ChangeEvent) => void;
}

const SegmentedControl = ({ options, onChange }: Props) => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <Wrapper>
      <LayoutGroup>
        {options.map((option, idx) => {
          const id = useId();
          const isSelected = idx === selectedOption;
          return (
            // eslint-disable-next-line react/no-array-index-key
            <OptionWrapper key={idx} whileTap={isSelected ? { scale: 0.95 } : { opacity: 0.6 }}>
              {isSelected && <ActivatedBackground layoutId="SegmentedControlActive" />}
              <StyledHiddenInput
                value={option}
                onChange={(e) => {
                  setSelectedOption(idx);
                  if (onChange) {
                    onChange(e);
                  }
                }}
                checked={isSelected}
                type="radio"
                name="selectedControl"
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
  width: 335px;
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
