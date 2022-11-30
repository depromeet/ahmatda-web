import { ComponentProps, FC, InputHTMLAttributes, MouseEvent, useId, useState } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';
import TextField from '../text-field/TextField';

import IconRadioGroup from './IconRadioGroup';

import useInput from '@/hooks/common/useInput';
import useDidUpdate from '@/hooks/life-cycle/useDidUpdate';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const RADIO_CATEGORY_NAME = 'category';

const CategoryAppendBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
  const {
    value: categoryName,
    onChange: onChangeCategoryName,
    debouncedValue: debouncedCategoryName,
  } = useInput({ initialValue: '', useDebounce: true });

  // TODO: API 부착 시 [group, setGroup]
  const [_, setGroup] = useState<string>('일상');
  const onClickGroup = (e: MouseEvent<HTMLInputElement>) => {
    setGroup(e.currentTarget.value);
  };

  const [currentIcon, setCurrentIcon] = useState<string | null>(null);

  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);
  useDidUpdate(() => {
    const isDisabled = debouncedCategoryName.length === 0 || currentIcon === null;
    setIsSubmitDisabled(isDisabled);
  }, [debouncedCategoryName, currentIcon]);

  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <Wrapper>
        <AppBar
          backButtonType="cancel"
          title="카테고리 추가"
          onClickBackButton={setToClose}
          rightElement={
            <LabelButton size="large" disabled={isSubmitDisabled}>
              완료
            </LabelButton>
          }
        />
        <Form>
          <TextField value={categoryName} onChange={onChangeCategoryName} placeholder="카테고리 입력" />

          <fieldset>
            <Legend style={{ marginBottom: '8px' }}>분류 *</Legend>
            <div style={{ width: '100%', display: 'flex', gap: '8px' }}>
              <RadioItem name={RADIO_CATEGORY_NAME} value="일상" defaultChecked onClick={onClickGroup} />
              <RadioItem name={RADIO_CATEGORY_NAME} value="여행" onClick={onClickGroup} />
              <RadioItem name={RADIO_CATEGORY_NAME} value="운동" onClick={onClickGroup} />
            </div>
          </fieldset>

          <fieldset>
            <Legend>아이콘 *</Legend>
            <IconRadioGroup currentValue={currentIcon} setCurrentValue={setCurrentIcon} />
          </fieldset>
        </Form>
      </Wrapper>
    </BottomSheet>
  );
};

export default CategoryAppendBottomSheet;

const Wrapper = styled.div({ height: '100vh' });

const Form = styled.form({
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

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
