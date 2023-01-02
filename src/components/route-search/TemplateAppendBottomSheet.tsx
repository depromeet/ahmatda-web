import { ComponentProps, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue } from 'recoil';

import LabelButton from '../button/LabelButton';
import IconAdd from '../icon/IconAdd';
import LoadingHandler from '../loading/LoadingHandler';
import Spinner from '../loading/Spinner';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';

import CategorySection from './CategorySection';

import useGetUserCategories from '@/hooks/api/category/useGetUserCategories';
import useAppendToMyTemplate from '@/hooks/api/template/useAppendToMyTemplate';
import useGetUserTemplatesInSearchTab from '@/hooks/api/template/useGetUserTemplatesInSearchTab';
import selectedCategoryState from '@/store/route-search/bottomSheet/selectedCategory';
import selectedTemplateState from '@/store/route-search/bottomSheet/selectedTemplate';
import { currentRecCategoryWithFlag } from '@/store/route-search/currentRecCategory';
import selectedRecTemplateState from '@/store/route-search/selectedRecTemplate';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const TemplateAppendBottomSheet = ({ isShowing, setToClose }: Props) => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);
  const [selectedTemplate, setSelectedTemplate] = useRecoilState(selectedTemplateState);

  const { userCategories, isUserCategoriesLoading } = useUserCategories();
  const { userTemplates, isUserTemplatesLoading } = useUserTemplates();

  const currentRecCategory = useRecoilValue(currentRecCategoryWithFlag);
  const selectedRecTemplate = useRecoilValue(selectedRecTemplateState);

  useEffect(() => {
    if (userCategories && selectedCategory === null) {
      setSelectedCategory(userCategories[0]);
    }
  }, [userCategories, isShowing]);

  const { appendToMyTemplateMutation } = useAppendToMyTemplate();
  const { mutate } = appendToMyTemplateMutation;

  const resetBottomSheetState = () => {
    setSelectedCategory(null);
    setSelectedTemplate(null);
  };

  const onCloseBottomSheet = () => {
    setToClose();
    resetBottomSheetState();
  };

  const onComplete = () => {
    mutate();
    onCloseBottomSheet();
  };

  return (
    <BottomSheet isShowing={isShowing} setToClose={onCloseBottomSheet}>
      <AppBar
        backButtonType="cancel"
        title="추가하기"
        rightElement={
          <LabelButton onClick={onComplete} disabled={!selectedCategory || !selectedTemplate} size="large">
            완료
          </LabelButton>
        }
        onClickBackButton={onCloseBottomSheet}
      />
      <LoadingHandler fallback={<Spinner />} isLoading={isUserCategoriesLoading || isUserTemplatesLoading}>
        <div style={{ marginTop: 8 }}>
          <CategorySection
            defaultColor="gray"
            options={userCategories?.concat(currentRecCategory)}
            selectedCategory={selectedCategory}
            onCategoryClick={(clickedCategory) => {
              setSelectedCategory(clickedCategory);
              setSelectedTemplate(null);
            }}
          />
        </div>
        <List>
          {userTemplates?.map((item) => (
            <ListItem
              key={item.id}
              onClick={() => {
                setSelectedTemplate(item);
              }}
              selected={selectedTemplate?.id === item.id}
            >
              {item.templateName}
            </ListItem>
          ))}
          <ListItem
            newItem
            onClick={() => {
              setSelectedTemplate(selectedRecTemplate);
            }}
            selected={Boolean(selectedTemplate && !('userToken' in selectedTemplate))}
          >
            <IconAdd />
            {'{{'}
            {selectedRecTemplate?.templateName}
            {'}}'}로 리스트 추가
          </ListItem>
        </List>
      </LoadingHandler>
    </BottomSheet>
  );
};

export default TemplateAppendBottomSheet;

const useUserCategories = () => {
  const { data: userCategories, isLoading: isUserCategoriesLoading } = useGetUserCategories();
  return { userCategories, isUserCategoriesLoading };
};

const useUserTemplates = () => {
  const { data: userTemplates, isLoading: isUserTemplatesLoading } = useGetUserTemplatesInSearchTab();
  return { userTemplates, isUserTemplatesLoading };
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
