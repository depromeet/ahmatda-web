import { ComponentProps, FC, ReactElement, useState } from 'react';
import styled from '@emotion/styled';

import CategoryAppendBottomSheet from './CategoryAppendBottomSheet';
import CategoryEditBottomSheet from './CategoryEditBottomSheet';

import LabelButton from '@/components/button/LabelButton';
import Graphic from '@/components/graphic/Graphic';
import IconAdd from '@/components/icon/IconAdd';
import IconChevron24pxRightLeft from '@/components/icon/IconChevron24pxRightLeft';
import AppBar from '@/components/navigation/AppBar';
import BottomSheet from '@/components/portal/BottomSheet';
import { Category } from '@/hooks/api/category/type';
import useGetUserCategories from '@/hooks/api/category/useGetUserCategories';
import useToggle from '@/hooks/common/useToggle';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const CategorySettingBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
  const [isCategoryAppendShowing, _, toggleIsCategoryAppendShowing] = useToggle(false);

  const { selectedCategory, onClickCategory, isCategoryEditShowing, toggleIsCategoryEditShowing } = useCategoryEdit();

  const { data } = useGetUserCategories();

  return (
    <>
      <BottomSheet isShowing={isShowing} setToClose={setToClose}>
        <Wrapper>
          <AppBar backButtonType="cancel" title="카테고리 설정" onClickBackButton={setToClose} />

          {data?.map(({ id, name, emoji, type }) => (
            <CategoryItem
              key={id}
              icon={<Graphic type={emoji} />}
              name={name}
              onClick={() => onClickCategory({ id, name, emoji, type })}
            />
          ))}

          <PadlessLabelButton size="large" onClick={toggleIsCategoryAppendShowing} withIcon>
            <IconAdd />
            추가하기
          </PadlessLabelButton>
        </Wrapper>
      </BottomSheet>

      <CategoryEditBottomSheet
        isShowing={isCategoryEditShowing}
        setToClose={toggleIsCategoryEditShowing}
        name={selectedCategory?.name ?? ''}
        category={selectedCategory?.type ?? 'DAILY'}
        icon={selectedCategory?.emoji ?? 'BOWLING'}
      />

      <CategoryAppendBottomSheet isShowing={isCategoryAppendShowing} setToClose={toggleIsCategoryAppendShowing} />
    </>
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
  name: string;
  onClick: VoidFunction;
}

const CategoryItem: FC<CategoryItemProps> = ({ icon, name, onClick }) => {
  return (
    <WrapperButton type="button" onClick={onClick}>
      <LeftWrapper>
        {icon}
        <span>{name}</span>
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

const useCategoryEdit = () => {
  const [isCategoryEditShowing, setIsCategoryEditShowing, toggleIsCategoryEditShowing] = useToggle(false);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const onClickCategory = (category: Category) => {
    setSelectedCategory(category);
    setIsCategoryEditShowing(true);
  };

  return { selectedCategory, onClickCategory, isCategoryEditShowing, toggleIsCategoryEditShowing };
};
