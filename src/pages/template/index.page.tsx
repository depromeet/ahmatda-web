import { ReactElement, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { NextPageWithLayout } from '../_app.page';

import FixedSpinner from '@/components/loading/FixedSpinner';
import LoadingHandler from '@/components/loading/LoadingHandler';
import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';
import CategorySection from '@/components/route-search/CategorySection';
import ListRequestSection from '@/components/route-search/ListRequestSection';
import RecommendationTemplateCard from '@/components/route-search/RecommendationTemplateCard';
import TemplateAppendBottomSheet from '@/components/route-search/TemplateAppendBottomSheet';
import useGetRecCategories from '@/hooks/api/category/useGetRecCategories';
import useGetRecTemplates from '@/hooks/api/template/useGetRecTemplates';
import currentRecCategoryState from '@/store/route-search/currentRecCategory';
import selectedRecTemplateState from '@/store/route-search/selectedRecTemplate';

const Template: NextPageWithLayout = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const { data: categories, currentRecCategory, setCurrentRecCategory } = useRecCategories();

  const { data: templates, isRefetching: isRefetchingRecTemplates, isLoading } = useGetRecTemplates();
  const setSelectedRecTemplate = useSetRecoilState(selectedRecTemplateState);

  return (
    <LoadingHandler isLoading={isLoading} fallback={<FixedSpinner />}>
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
          {templates?.map((templateInfo) => (
            <RecommendationTemplateCard
              key={`rec-template-${templateInfo.id}`}
              data={templateInfo}
              isRefetchingTemplateData={isRefetchingRecTemplates}
              submitBtnTitle="내 리스트에 추가하기"
              onSubmit={() => {
                setSelectedRecTemplate(templateInfo);
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
    </LoadingHandler>
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
    if (query.data && currentRecCategory === null) {
      setCurrentRecCategory(query.data[0]);
    }
  }, [query.data]);

  return { ...query, currentRecCategory, setCurrentRecCategory };
};
