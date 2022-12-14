import { FC, InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

type Props = InputHTMLAttributes<HTMLInputElement>;

const ToggleSwitch: FC<Props> = ({ name, ...rest }) => {
  const id = name ? `${name}-toggle` : 'toggle';

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ToggleCheckbox id={id} type="checkbox" {...rest} />
      <CheckBoxLabel htmlFor={id} />
    </>
  );
};

export default ToggleSwitch;

const CheckBoxLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 48px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.gray3};
  border-radius: 12px;
  transition: background-color 0.2s;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 45px;
    transition: 0.2s;
    background-color: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
`;

const ToggleCheckbox = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + ${CheckBoxLabel} {
    background-color: ${({ theme }) => theme.colors.gray6};
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: calc(100% - 2px);
      width: 20px;
      height: 20px;
      border-radius: 45px;
      transition: 0.2s;
      background: #fff;
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
      transform: translateX(-100%);
    }
  }
`;
