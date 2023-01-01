import { ReactElement, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { NextPageWithLayout } from './_app.page';

import Carousel from '@/components/carousel/Carousel';
import FixedSpinner from '@/components/loading/FixedSpinner';
import LoadingHandler from '@/components/loading/LoadingHandler';
import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';
import Card from '@/components/route-home/Card';
import CategorySection from '@/components/route-home/category/CategorySection';
import EmptyCard from '@/components/route-home/EmptyCard';
import RecommendSection from '@/components/route-home/RecommendSection';
import useGetUserTemplate from '@/hooks/api/template/useGetUserTemplate';
import useCurrentUserTemplate from '@/hooks/route-home/useCurrentUserTemplate';
import { get } from '@/lib/api';
import fcmTokenState from '@/store/push-notification/fcmToken';

const HomePage: NextPageWithLayout = () => {
  const [carouselWrapper, setCarouselWrapper] = useState<HTMLDivElement | null>(null);
  const { data, isLoading } = useGetUserTemplate();
  const { onCarouselIndexChange } = useCurrentUserTemplate();
  const fcmToken = useRecoilValue(fcmTokenState);

  const sendFcmToken = () => {
    get(`/alarm?token=${fcmToken}`);
  };

  return (
    <>
      <CategorySection />
      <button
        type="button"
        onClick={() => {
          sendFcmToken();
        }}
      >
        FCM 토큰 전송 🧚‍♀️
      </button>
      <div>{fcmToken}</div>

      <LoadingHandler fallback={<FixedSpinner />} isLoading={isLoading}>
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

        <Carousel.Indicator carouselWrapper={carouselWrapper} onIndexChange={onCarouselIndexChange} />
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
