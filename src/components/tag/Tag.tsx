import { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
import styled from '@emotion/styled';

import IconCancelSmall from '../icon/IconCancelSmall';

type ButtonPropsWithoutChildrenAndRef = Omit<ComponentPropsWithoutRef<'button'>, 'children'>;

interface Props extends ButtonPropsWithoutChildrenAndRef {
  value: string;
  onClickCancel?: VoidFunction;
}

const Tag = forwardRef(function Tag(
  { value, onClick, onClickCancel, ...rest }: Props,
  forwardedRef: Ref<HTMLButtonElement>,
) {
  return (
    <Button type="button" ref={forwardedRef} isShowingIconCancel={Boolean(onClickCancel)} onClick={onClick} {...rest}>
      <span>{value}</span>
      {onClickCancel && <IconCancelSmall onClick={onClickCancel} />}
    </Button>
  );
});

const Button = styled.button<{ isShowingIconCancel: boolean }>(
  {
    all: 'unset',
    cursor: 'pointer',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    borderRadius: '8px',
  },
  ({ theme }) => ({
    ...theme.typographies.button2,
    backgroundColor: theme.colors.gray1,
    color: theme.colors.gray6,
  }),
  ({ isShowingIconCancel }) =>
    isShowingIconCancel
      ? { paddingTop: '7px', paddingBottom: '7px', paddingLeft: '8px', paddingRight: '4px' }
      : { padding: '7px 8px' },
);

export default Tag;
