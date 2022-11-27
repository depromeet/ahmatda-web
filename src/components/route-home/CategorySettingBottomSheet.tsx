import { ComponentProps, FC, ReactElement } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import IconAdd from '../icon/IconAdd';
import IconChevron24pxRightLeft from '../icon/IconChevron24pxRightLeft';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const CategorySettingBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
  const testFn = () => {
    // TODO: 이후 대응
    // eslint-disable-next-line no-console
    console.log('d');
  };

  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <Wrapper>
        <AppBar title="카테고리 설정" onClickBackButton={setToClose} isAbsolute />

        <CategoryItem icon={<IconAdd />} label="일상" onClick={testFn} />
        <CategoryItem icon={<IconAdd />} label="여행" onClick={testFn} />

        <PadlessLabelButton size="large">
          <IconAdd />
          추가하기
        </PadlessLabelButton>
      </Wrapper>
    </BottomSheet>
  );
};

const Wrapper = styled.div({
  // NOTE: BottomSheet maxHeight에서 잘리는 것을 의도
  height: '100vh',
});

const PadlessLabelButton = styled(LabelButton)({
  marginTop: '8px',
  paddingLeft: '0',
});

export default CategorySettingBottomSheet;

interface CategoryItemProps {
  icon: ReactElement;
  label: string;
  onClick: VoidFunction;
}

const CategoryItem: FC<CategoryItemProps> = ({ icon, label, onClick }) => {
  return (
    <WrapperButton type="button" onClick={onClick}>
      <LeftWrapper>
        {icon}
        <span>{label}</span>
      </LeftWrapper>
      <IconChevron24pxRightLeft direction="right" />
    </WrapperButton>
  );
};

const WrapperButton = styled.button(
  {
    all: 'unset',
    cursor: 'pointer',
    width: '100%',
    height: '48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ({ theme }) => ({
    ...theme.typographies.button2,
    color: theme.colors.gray6,
    borderBottom: `1px solid ${theme.colors.gray2}`,
  }),
);

const LeftWrapper = styled.div({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});
