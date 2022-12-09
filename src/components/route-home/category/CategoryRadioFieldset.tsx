import { ChangeEvent, Dispatch, FC, InputHTMLAttributes, SetStateAction, useId } from 'react';
import styled from '@emotion/styled';

import { categories, CategoryType } from './type';

import { isIn } from '@/utils/utils';

const RADIO_CATEGORY_NAME = 'category';

interface Props {
  currentCategory: CategoryType;
  setCurrentCategory: Dispatch<SetStateAction<CategoryType>>;
}

const CategoryRadioFieldset: FC<Props> = ({ currentCategory, setCurrentCategory }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (isIn(categories, value)) {
      setCurrentCategory(value);
    }
  };

  return (
    <fieldset>
      <Legend>아이콘 *</Legend>
      <div style={{ width: '100%', display: 'flex', gap: '8px' }}>
        {categories.map((category) => (
          <RadioItem
            key={category}
            name={RADIO_CATEGORY_NAME}
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

const Legend = styled.legend(({ theme }) => ({ ...theme.typographies.caption1, color: theme.colors.gray6 }));

type RadioItemProps = InputHTMLAttributes<HTMLInputElement>;

const RadioItem: FC<RadioItemProps> = ({ value, ...rest }) => {
  const id = useId();

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <HidedInput type="radio" id={id} value={value} {...rest} />
      <ItemLabel htmlFor={id}>{value}</ItemLabel>
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
