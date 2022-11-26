import styled from '@emotion/styled';

interface ItemProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: 'radio' | 'checkbox';
  name?: string;
  label?: string;
  emjCode?: string;
  labelSize?: 'small' | 'large';
}

const Item = ({ type, label, emjCode, labelSize = 'small', ...rest }: ItemProps) => {
  return (
    <>
      <ItemInput type={type} id={label} emjCode={emjCode} {...rest} data-testid="item-input" />
      <ItemLabel htmlFor={label} labelSize={labelSize} data-testid="item-label">
        {emjCode && <span data-testid="item-emoji">{emjCode}</span>}
        <LabelText>{label}</LabelText>
      </ItemLabel>
    </>
  );
};

export default Item;

const ItemLabel = styled.label<ItemProps>(
  {
    padding: '8px 16px',
    borderRadius: '8px',
  },
  ({ theme, labelSize }) => ({
    backgroundColor: theme.colors.gray1,

    ...(labelSize === 'large' && {
      ...theme.typographies.button1,
    }),
    ...(labelSize === 'small' && {
      ...theme.typographies.button2,
    }),
  }),
);

const ItemInput = styled.input<ItemProps>(
  {
    height: '0',
    width: '0',
    visibility: 'hidden',
  },
  ({ theme, emjCode }) => ({
    color: theme.colors.black,

    '&:checked + label': {
      color: theme.colors.white,
      backgroundColor: emjCode ? theme.colors.black : theme.colors.gray4,
    },
  }),
);

const LabelText = styled.span({
  marginLeft: '8px',
});
