import { ComponentProps, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import LabelButton from '../button/LabelButton';
import IconAdd from '../icon/IconAdd';
import LoadingHandler from '../loading/LoadingHandler';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';

import CategorySection from './CategorySection';

import { Category } from '@/hooks/api/category/type';
import useGetUserCategories from '@/hooks/api/category/useGetUserCategories';
import { UserTemplate } from '@/hooks/api/template/type';
import { get } from '@/lib/api';
import currentRecCategoryState from '@/store/route-search/currentRecCategory';
import selectedRecTemplateState from '@/store/route-search/selectedRecTemplate';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const TemplateAppendBottomSheet = ({ isShowing, setToClose }: Props) => {
  const { userCategories, isUserCategoriesLoading, selectedUserCategory, setSelectedUserCategory } =
    useUserCategories();

  const { userTemplates, isUserTemplatesLoading, selectedUserTemplate, setSelectedUserTemplate } =
    useUserTemplates(selectedUserCategory);

  const currentRecCategory = useRecoilValue(currentRecCategoryState);
  const selectedRecTemplate = useRecoilValue(selectedRecTemplateState);

  return (
    <LoadingHandler fallback={<>loading...</>} isLoading={isUserCategoriesLoading || isUserTemplatesLoading}>
      <BottomSheet
        isShowing={isShowing}
        setToClose={() => {
          setToClose();
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
            options={userCategories?.concat(currentRecCategory!)}
            selectedCategory={selectedUserCategory}
            onCategoryClick={(clickedCategoryId) => {
              setSelectedUserCategory(clickedCategoryId);
            }}
          />
        </div>
        <List>
          {userTemplates?.map((item) => (
            <ListItem
              key={item.id}
              onClick={() => {
                setSelectedUserTemplate(item);
              }}
              selected={selectedUserTemplate?.id === item.id}
            >
              {item.templateName}
            </ListItem>
          ))}
          <ListItem newItem>
            <IconAdd />
            {'{{'}
            {selectedRecTemplate?.templateName}
            {'}}'}로 리스트 추가
          </ListItem>
        </List>
      </BottomSheet>
    </LoadingHandler>
  );
};

export default TemplateAppendBottomSheet;

const useUserCategories = () => {
  const [selectedUserCategory, setSelectedUserCategory] = useState<Category | null>(null);
  const { data: userCategories, isLoading: isUserCategoriesLoading } = useGetUserCategories();

  useEffect(() => {
    if (!userCategories) {
      return;
    }
    if (selectedUserCategory !== null) {
      return;
    }
    setSelectedUserCategory(userCategories[0]);
  }, [userCategories]);

  return { userCategories, isUserCategoriesLoading, selectedUserCategory, setSelectedUserCategory };
};

const useGetUserTemplates = (selectedUserCategory: Category | null) => {
  interface Response {
    result: UserTemplate[];
  }

  const selectedUserCategoryId = selectedUserCategory?.id;

  const getUserTemplate = () => get<Response>(`/template/user?category=${selectedUserCategoryId}`);
  const USER_TEMPLATE_QUERY_KEY = 'search_tab_user_template';

  const query = useQuery({
    queryKey: [USER_TEMPLATE_QUERY_KEY, selectedUserCategory],
    queryFn: () => getUserTemplate(),
    enabled: Boolean(selectedUserCategoryId),
  });

  return { ...query, data: query.data?.result };
};

const useUserTemplates = (selectedUserCategory: Category | null) => {
  const [selectedUserTemplate, setSelectedUserTemplate] = useState<UserTemplate | null>(null);
  const { data: userTemplates, isLoading: isUserTemplatesLoading } = useGetUserTemplates(selectedUserCategory);

  return { userTemplates, isUserTemplatesLoading, selectedUserTemplate, setSelectedUserTemplate };
};

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
