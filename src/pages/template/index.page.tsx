import { ReactElement, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { NextPageWithLayout } from '../_app.page';

import CheckboxGroup from '@/components/checkbox/CheckboxGroup';
import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';
import CategorySection from '@/components/route-search/CategorySection';
import ListRequestSection from '@/components/route-search/ListRequestSection';
import TemplateAppendBottomSheet from '@/components/route-search/TemplateAppendBottomSheet';
import useGetRecCategories from '@/hooks/api/category/useGetRecCategories';
import useGetRecTemplates from '@/hooks/api/template/useGetRecTemplates';
import currentRecCategoryState from '@/store/route-search/currentRecCategory';

const Template: NextPageWithLayout = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const { data: categories, currentRecCategory, setCurrentRecCategory } = useRecCategories();
  const { data: templates } = useGetRecTemplates();

  return (
    <Wrapper>
      <Title>
        상황에 맞는
        <br />
        소지품을 추천해 드릴게요
      </Title>
      <CategorySection
        options={categories}
        selectedCategory={currentRecCategory}
        onCategoryClick={(clickedCategory) => {
          setCurrentRecCategory(clickedCategory);
        }}
      />
      <CardsWrapper>
        {templates.map((templateInfo) => (
          <CheckboxGroup
            key={`rec-template-${templateInfo.id}`}
            data={templateInfo}
            submitBtnTitle="내 리스트에 추가하기"
            onSubmit={() => {
              setIsBottomSheetOpen(true);
            }}
          />
        ))}
      </CardsWrapper>
      <ListRequestSection />
      <TemplateAppendBottomSheet
        isShowing={isBottomSheetOpen}
        setToClose={() => {
          setIsBottomSheetOpen(false);
        }}
      />
    </Wrapper>
  );
};

Template.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <DefaultAppBar />
      {page}
      <BottomNavigation />
    </>
  );
};

export default Template;

const Wrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 41.5px;
`;

const Title = styled.p`
  ${({ theme }) => ({ ...theme.typographies.title2 })};
  margin-bottom: 24px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin: 16px 0 24px 0;
`;

const useRecCategories = () => {
  const [currentRecCategory, setCurrentRecCategory] = useRecoilState(currentRecCategoryState);
  const query = useGetRecCategories();

  useEffect(() => {
    setCurrentRecCategory(query.data[0]);
  }, [query.data]);

  return { ...query, currentRecCategory, setCurrentRecCategory };
};
