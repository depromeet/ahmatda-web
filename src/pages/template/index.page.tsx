import { ReactElement, useState } from 'react';
import styled from '@emotion/styled';

import { NextPageWithLayout } from '../_app.page';

import CheckboxGroup from '@/components/checkbox/CheckboxGroup';
import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';
import CategorySection from '@/components/route-search/CategorySection';
import ListRequestSection from '@/components/route-search/ListRequestSection';
import TemplateAppendBottomSheet from '@/components/route-search/TemplateAppendBottomSheet';
import { mockCheckboxGroupOptions, mockCheckboxGroupTitle } from '@/fixtures/checkboxGroup.mock';
import { CategoryType } from '@/types';

const Template: NextPageWithLayout = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(MOCK_DATA.result[0]);

  return (
    <Wrapper>
      <Title>
        상황에 맞는
        <br />
        소지품을 추천해 드릴게요
      </Title>
      <CategorySection
        options={MOCK_DATA.result}
        selectedCategory={selectedCategory}
        onCategoryClick={(clickedCategory) => {
          setSelectedCategory(clickedCategory);
        }}
      />
      <CardsWrapper>
        <CheckboxGroup
          title={mockCheckboxGroupTitle}
          options={mockCheckboxGroupOptions}
          submitBtnTitle="내 리스트에 추가하기"
          onSubmit={() => {
            setIsBottomSheetOpen(true);
          }}
        />
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

const MOCK_DATA = {
  result: [
    {
      id: 1,
      name: '일상',
      type: 'DAILY',
      emoji: 'AIRPLANE',
    },
    {
      id: 2,
      name: '운동',
      type: 'HEALTH',
      emoji: 'GYM',
    },
  ],
  error: null,
};
