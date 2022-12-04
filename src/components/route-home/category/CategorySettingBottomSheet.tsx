import { ComponentProps, FC, ReactElement } from 'react';
import styled from '@emotion/styled';

import CategoryAppendBottomSheet from './CategoryAppendBottomSheet';
import CategoryEditBottomSheet from './CategoryEditBottomSheet';
import { CategoryType } from './type';

import LabelButton from '@/components/button/LabelButton';
import GraphicBus from '@/components/graphic/GraphicBus';
import IconAdd from '@/components/icon/IconAdd';
import IconChevron24pxRightLeft from '@/components/icon/IconChevron24pxRightLeft';
import AppBar from '@/components/navigation/AppBar';
import BottomSheet from '@/components/portal/BottomSheet';
import useToggle from '@/hooks/common/useToggle';

const MOCK_CATEGORIES: { id: string; name: string; category: CategoryType; icon: string }[] = [
  { id: '0', name: '일상', category: '일상', icon: 'bus' },
  { id: '1', name: '하이 여행', category: '여행', icon: 'bus' },
];

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const CategorySettingBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
  const [isCategoryAppendShowing, _, toggleIsCategoryAppendShowing] = useToggle(false);

  const { isCategoryEditShowing, toggleIsCategoryEditShowing } = useCategoryEdit();

  return (
    <>
      <BottomSheet isShowing={isShowing} setToClose={setToClose}>
        <Wrapper>
          <AppBar backButtonType="cancel" title="카테고리 설정" onClickBackButton={setToClose} />

          {MOCK_CATEGORIES.map((category) => (
            <CategoryItem
              key={category.id}
              // TODO: icon이 이름으로 저장될 것 같은데, 이름에 따라 반환하도록 작업해야할듯
              icon={<GraphicBus />}
              name={category.name}
              onClick={toggleIsCategoryEditShowing}
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
        name="asd"
        category="여행"
        icon="bus"
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
  const [isCategoryEditShowing, _, toggleIsCategoryEditShowing] = useToggle(false);

  // TODO: 누른 카테고리 아이템 저장
  // ?: 클릭 시 ID만 넘기고 조회를 할지, 아니면 전부 state로 넘길지?
  // const [editCategoryName] = useState<string | null>(null);
  // const [editCategory] = useState<CategoryType | null>(null);
  // const [editCategoryIcon] = useState<ReactElement | null>(null);

  // const onClickCategory = ({
  //   id,
  //   name,
  //   category,
  //   icon,
  // }: {
  //   id: string;
  //   name: string;
  //   category: CategoryType;
  //   icon: ReactElement;
  // }) => {
  //   setIsCategoryEditShowing(true);
  // };

  return { isCategoryEditShowing, toggleIsCategoryEditShowing };
};
