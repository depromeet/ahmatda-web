import { ChangeEventHandler, FC, FormEvent, useRef, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import IconCancelSmall from '../icon/IconCancelSmall';

interface EditableProps {
  editable: true;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  onClickCancel?: VoidFunction;
  onChangedEmpty?: VoidFunction;
}

interface NonEditableProps {
  editable?: false;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  onClickCancel?: VoidFunction;
  onChangedEmpty?: VoidFunction;
}

type Props = EditableProps | NonEditableProps;

const EditableTag: FC<Props> = ({
  editable = false,
  value = '',
  onChange,
  placeholder,
  onClickCancel,
  onChangedEmpty,
}) => {
  const isInitialEditing = editable && value === '';
  const [isEditing, setIsEditing] = useState<boolean>(isInitialEditing);
  const inputRef = useRef<HTMLInputElement>(null);
  const isShowingIconCancel = Boolean(!isEditing && onClickCancel);

  const onClickTextButton = () => {
    setIsEditing(true);
    inputRef.current?.focus();
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    endEditing();
  };

  const endEditing = () => {
    if (value.trim().length === 0 && onChangedEmpty) {
      onChangedEmpty();
      return;
    }

    setIsEditing(false);
  };

  return (
    <Form onSubmit={onSubmit} isEditing={isEditing} isShowingIconCancel={isShowingIconCancel}>
      <Input
        type="text"
        ref={inputRef}
        value={value}
        onChange={onChange}
        onBlur={endEditing}
        placeholder={placeholder}
        isEditing={isEditing}
        style={{ width: `${(value.length + 1) / 2}rem` }}
      />
      <Button editable={editable} isEditing={isEditing} type="button" onClick={onClickTextButton} disabled={!editable}>
        {value}
      </Button>

      {isShowingIconCancel && (
        <EmptyButton type="button" onClick={onClickCancel}>
          <IconCancelSmall />
        </EmptyButton>
      )}
    </Form>
  );
};

export default EditableTag;

const Form = styled.form<{ isEditing: boolean; isShowingIconCancel: boolean }>(
  {
    minWidth: '2.375rem',
    width: 'fit-content',
    maxWidth: '100%',
    height: '38px',
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
  ({ isEditing, theme }) => ({
    border: isEditing ? `1px solid ${theme.colors.gray3}` : 'none',
  }),
  ({ isShowingIconCancel }) =>
    isShowingIconCancel
      ? { paddingTop: '7px', paddingBottom: '7px', paddingLeft: '8px', paddingRight: '4px' }
      : { padding: '7px 8px' },
);

const Input = styled.input<{ isEditing: boolean }>(
  { all: 'unset', boxSizing: 'border-box', maxWidth: '100%', minWidth: '100%' },
  ({ theme }) => ({
    caretColor: theme.colors.secondary,
  }),
  ({ isEditing }) => {
    return !isEditing && hideCss;
  },
);

const Button = styled.button<{ editable: boolean; isEditing: boolean }>(
  {
    all: 'unset',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  ({ editable }) => ({
    cursor: editable ? 'pointer' : 'text',
  }),
  ({ isEditing }) => {
    return isEditing && hideCss;
  },
);

const hideCss = css({
  clipPath: 'polygon(0 0, 0 0, 0 0)',
  position: 'absolute',
  minWidth: 'auto',
  width: '0 !important',
});

const EmptyButton = styled.button({
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
