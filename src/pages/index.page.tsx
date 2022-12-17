import { ReactElement, useState } from 'react';

import { NextPageWithLayout } from './_app.page';

import Carousel from '@/components/carousel/Carousel';
import LoadingHandler from '@/components/loading/LoadingHandler';
import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';
import Card from '@/components/route-home/Card';
import CategorySection from '@/components/route-home/category/CategorySection';
import EmptyCard from '@/components/route-home/EmptyCard';
import RecommendSection from '@/components/route-home/RecommendSection';
import useGetUserTemplate from '@/hooks/api/template/useGetUserTemplate';

const HomePage: NextPageWithLayout = () => {
  const [carouselWrapper, setCarouselWrapper] = useState<HTMLDivElement | null>(null);

  const { data, isLoading } = useGetUserTemplate();

  return (
    <>
      <CategorySection />

      <LoadingHandler fallback={<>loading...</>} isLoading={isLoading}>
        <Carousel.Wrapper ref={setCarouselWrapper}>
          {data?.map((userTemplate) => (
            <Carousel.Item key={userTemplate.id}>
              {/* TODO: 알림 관련 API 수정 이후 대응 */}
              <Card
                id={userTemplate.id}
                templateName={userTemplate.templateName}
                alarmCycle="매주 화 오후 6:00"
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

        <Carousel.Indicator carouselWrapper={carouselWrapper} />
      </LoadingHandler>

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
