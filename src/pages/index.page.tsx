import { ReactElement, useState } from 'react';

import { NextPageWithLayout } from './_app.page';

import Carousel from '@/components/carousel/Carousel';
import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';
import CategorySection from '@/components/route-home/category/CategorySection';
import EmptyCard from '@/components/route-home/EmptyCard';
import RecommendSection from '@/components/route-home/RecommendSection';

const HomePage: NextPageWithLayout = () => {
  const [carouselWrapper, setCarouselWrapper] = useState<HTMLDivElement | null>(null);

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
