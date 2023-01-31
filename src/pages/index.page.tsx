import { ReactElement, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

import { NextPageWithLayout } from './_app.page';

import Carousel from '@/components/carousel/Carousel';
import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';
import Card from '@/components/route-home/Card';
import CategorySection from '@/components/route-home/category/CategorySection';
import EmptyCard from '@/components/route-home/EmptyCard';
import RecommendSection from '@/components/route-home/RecommendSection';
import useGetUserTemplate from '@/hooks/api/template/useGetUserTemplate';
import useCurrentUserTemplate from '@/hooks/route-home/useCurrentUserTemplate';
import currentCategoryState from '@/store/route-home/currentCategory';

const HomePage: NextPageWithLayout = () => {
  const [carouselWrapper, setCarouselWrapper] = useState<HTMLDivElement | null>(null);
  const { data } = useGetUserTemplate();
  const { onCarouselIndexChange } = useCurrentUserTemplate();
  const currentCategory = useRecoilValue(currentCategoryState);

  return (
    <>
      <CategorySection />

      <AnimatePresence mode="wait">
        <Carousel.Wrapper key={currentCategory?.id} ref={setCarouselWrapper}>
          {data?.map((userTemplate) => (
            <Carousel.Item key={userTemplate.id}>
              <Card
                key={userTemplate.id}
                id={userTemplate.id}
                templateName={userTemplate.templateName}
                alarmInfo={userTemplate.alarmInfo}
                items={userTemplate.items}
                userToken={userTemplate.userToken}
                categoryId={userTemplate.categoryId}
                pin={userTemplate.pin}
              />
            </Carousel.Item>
          ))}

          <Carousel.Item>
            <EmptyCard />
          </Carousel.Item>
        </Carousel.Wrapper>
      </AnimatePresence>

      <Carousel.Indicator carouselWrapper={carouselWrapper} onIndexChange={onCarouselIndexChange} />

      <RecommendSection />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <DefaultAppBar />
      {page}
      <BottomNavigation />
    </>
  );
};

export default HomePage;
