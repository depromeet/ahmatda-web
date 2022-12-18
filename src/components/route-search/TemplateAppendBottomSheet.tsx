import { ComponentProps, useState } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import IconAdd from '../icon/IconAdd';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';

import CategorySection from './CategorySection';

import { Category } from '@/hooks/api/category/type';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const TemplateAppendBottomSheet = ({ isShowing, setToClose }: Props) => {
  const initialState = {
    categories: MOCK_USER_CATEGORIES.result[0],
    templateId: null,
  };

  const [selectedUserCategory, setSelectedUserCategory] = useState<Category>(initialState.categories);
  const [selectedUserTemplateId, setSelectedUserTemplateId] = useState<number | null>(initialState.templateId);

  const resetState = () => {
    setSelectedUserCategory(initialState.categories);
    setSelectedUserTemplateId(initialState.templateId);
  };

  return (
    <BottomSheet
      isShowing={isShowing}
      setToClose={() => {
        setToClose();
        resetState();
      }}
    >
      <AppBar
        backButtonType="cancel"
        title="추가하기"
        rightElement={<LabelButton size="large">완료</LabelButton>}
        onClickBackButton={setToClose}
      />
      <div style={{ marginTop: 8 }}>
        <CategorySection
          defaultColor="gray"
          options={MOCK_USER_CATEGORIES.result}
          selectedCategory={selectedUserCategory}
          onCategoryClick={(clickedCategory) => {
            setSelectedUserCategory(clickedCategory);
          }}
        />
      </div>
      <List>
        {MOCK_USER_TEMPLATES.result.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => {
              setSelectedUserTemplateId(item.id);
            }}
            selected={selectedUserTemplateId === item.id}
          >
            {item.templateName}
          </ListItem>
        ))}
        <ListItem newItem>
          <IconAdd />
          디프만 UT 준비물로 리스트 추가
        </ListItem>
      </List>
    </BottomSheet>
  );
};

export default TemplateAppendBottomSheet;

const List = styled.ul`
  list-style: none;
  margin-top: 24px;
`;

interface ListItemProps {
  newItem?: boolean;
  selected?: boolean;
}

const ListItem = styled('li')<ListItemProps>(
  {
    display: 'flex',
    width: 'calc(100% + 20px * 2)',
    alignItems: 'center',
    height: 48,
    marginLeft: -20,
    paddingLeft: 20,
  },
  ({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.gray1}`,
    color: `${theme.colors.gray6}`,
  }),
  (props) => props.newItem && { color: props.theme.colors.gray3, borderBottom: 'none' },
  (props) =>
    props.selected && {
      backgroundColor: props.theme.colors.gray1,
    },
);

const MOCK_USER_CATEGORIES: {
  result: Category[];
  error: null;
} = {
  result: [
    {
      id: 1,
      name: '일상',
      type: 'DAILY',
      emoji: 'PLANE',
    },
    {
      id: 2,
      name: '운동',
      type: 'EXERCISE',
      emoji: 'GYM',
    },
  ],
  error: null,
};

const MOCK_USER_TEMPLATES = {
  result: [
    {
      id: 100,
      userToken: 'FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F0',
      templateName: '일상에서 중요한거',
      categoryId: 1,
    },
    {
      id: 101,
      userToken: 'FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F0',
      templateName: '운동에서 중요한거',
      categoryId: 1,
    },
  ],
  error: null,
};
