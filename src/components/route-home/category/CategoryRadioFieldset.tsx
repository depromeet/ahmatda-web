import { ChangeEvent, Dispatch, FC, InputHTMLAttributes, SetStateAction, useId } from 'react';
import styled from '@emotion/styled';

import { CATEGORY_KIND, CategoryKind } from '@/hooks/api/category/type';
import { isIn, objectKeys } from '@/utils/utils';

const RADIO_CATEGORY_NAME = 'category';

interface Props {
  currentCategory: CategoryKind;
  setCurrentCategory: Dispatch<SetStateAction<CategoryKind>>;
}

const CategoryRadioFieldset: FC<Props> = ({ currentCategory, setCurrentCategory }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (isIn(objectKeys(CATEGORY_KIND), value)) {
      setCurrentCategory(value);
    }
  };

  return (
    <fieldset>
      <Legend>아이콘 *</Legend>
      <div style={{ width: '100%', display: 'flex', gap: '8px' }}>
        {objectKeys(CATEGORY_KIND).map((category) => (
          <RadioItem
            key={category}
            name={RADIO_CATEGORY_NAME}
            text={CATEGORY_KIND[category]}
            value={category}
            onChange={onChange}
            checked={currentCategory === category}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default CategoryRadioFieldset;

const Legend = styled.legend({ marginBottom: '8px' }, ({ theme }) => ({
  ...theme.typographies.caption1,
  color: theme.colors.gray6,
}));

interface RadioItemProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const RadioItem: FC<RadioItemProps> = ({ text, value, ...rest }) => {
  const id = useId();

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <HidedInput type="radio" id={id} value={value} {...rest} />
      <ItemLabel htmlFor={id}>{text}</ItemLabel>
    </>
  );
};

const HidedInput = styled.input(
  {
    position: 'absolute',
    clipPath: 'polygon(0 0, 0 0, 0 0)',
  },
  ({ theme }) => ({
    '&:checked + label': {
      backgroundColor: theme.colors.gray4,
      color: theme.colors.white,
    },
  }),
);

const ItemLabel = styled.label(
  {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '38px',
    borderRadius: '8px',
    transition: 'background-color .3s, color .3s',
  },
  ({ theme }) => ({
    ...theme.typographies.button2,
    color: theme.colors.gray4,
    backgroundColor: theme.colors.gray1,
  }),
);
