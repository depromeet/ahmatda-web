import { ReactElement, useState } from 'react';

import { NextPageWithLayout } from './_app.page';

import Carousel from '@/components/carousel/Carousel';
import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';
import CategorySection from '@/components/route-home/CategorySection';
import EmptyCard from '@/components/route-home/EmptyCard';
import ListSettingBottomSheet from '@/components/route-home/ListSettingBottomSheet';
import RecommendSection from '@/components/route-home/RecommendSection';

const HomePage: NextPageWithLayout = () => {
  const [carouselWrapper, setCarouselWrapper] = useState<HTMLDivElement | null>(null);

  // TODO: Home Card 컴포넌트 개발 시 해당 컴포넌트 내부로 이동 예정
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <CategorySection />

      <Carousel.Wrapper ref={setCarouselWrapper}>
        <Carousel.Item>
          <EmptyCard />
        </Carousel.Item>
      </Carousel.Wrapper>

      <Carousel.Indicator carouselWrapper={carouselWrapper} />

      <RecommendSection />
      <button
        onClick={() => {
          setIsShowing(true);
        }}
        type="button"
      >
        리스트 설정 BottomSheet 열기
      </button>
      <ListSettingBottomSheet
        isShowing={isShowing}
        setToClose={() => {
          setIsShowing(false);
        }}
      />
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
