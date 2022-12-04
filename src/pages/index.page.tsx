import { ReactElement, useState } from 'react';

import { NextPageWithLayout } from './_app.page';

import Carousel from '@/components/carousel/Carousel';
import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';
import Card, { Props as CardType } from '@/components/route-home/Card';
import CategorySection from '@/components/route-home/CategorySection';
import EmptyCard from '@/components/route-home/EmptyCard';
import ListSettingBottomSheet from '@/components/route-home/ListSettingBottomSheet';
import RecommendSection from '@/components/route-home/RecommendSection';
import TemplateItemSettingBottomSheet from '@/components/route-home/TemplateItemSettingBottomSheet';

const MOCK_CARDS: CardType[] = [
  {
    title: '출근할 때 필수템',
    alarmCycle: '매주 월 오후 6:00',
    id: '0',
    items: [
      { id: '0', isChecked: false, name: '중요 소지품', isImportant: true },
      { id: '1', isChecked: false, name: '비중요 소지품', isImportant: false },
      { id: '2', isChecked: true, name: '체크 + 중요 소지품', isImportant: true },
      { id: '3', isChecked: true, name: '체크 + 비중요 소지품', isImportant: false },
      {
        id: '4',
        isChecked: false,
        name: '엄청 긴 소지품소지품소지품소지품소지품소지품소지품소지품소지품소지품',
        isImportant: false,
      },
      { id: '5', isChecked: false, name: '스크롤을 위한 소지품', isImportant: false },
      { id: '6', isChecked: false, name: '스크롤을 위한 소지품', isImportant: false },
      { id: '7', isChecked: false, name: '스크롤을 위한 소지품', isImportant: false },
      { id: '8', isChecked: false, name: '스크롤을 위한 소지품', isImportant: false },
      { id: '9', isChecked: false, name: '스크롤을 위한 소지품', isImportant: false },
      { id: '10', isChecked: false, name: '스크롤을 위한 소지품', isImportant: false },
      { id: '11', isChecked: false, name: '스크롤을 위한 소지품', isImportant: false },
      { id: '12', isChecked: false, name: '스크롤을 위한 소지품', isImportant: false },
      { id: '13', isChecked: false, name: '스크롤을 위한 소지품', isImportant: false },
      { id: '14', isChecked: false, name: '스크롤을 위한 소지품', isImportant: false },
      { id: '15', isChecked: false, name: '스크롤을 위한 소지품', isImportant: false },
    ],
  },
  {
    title: '혹한기에서 살아남기',
    alarmCycle: '매주 화 오후 6:00',
    id: '1',
    items: [
      { id: '16', isChecked: false, name: '중요 소지품', isImportant: true },
      { id: '17', isChecked: false, name: '비중요 소지품', isImportant: false },
      { id: '18', isChecked: true, name: '체크 + 중요 소지품', isImportant: true },
      { id: '19', isChecked: true, name: '체크 + 비중요 소지품', isImportant: false },
    ],
  },
];

const HomePage: NextPageWithLayout = () => {
  const [carouselWrapper, setCarouselWrapper] = useState<HTMLDivElement | null>(null);

  // TODO: Home Card 컴포넌트 개발 시 해당 컴포넌트 내부로 이동 예정
  const [isShowingList, setIsShowingList] = useState(false);
  const [isShowingItem, setIsShowingItem] = useState(false);

  return (
    <>
      <CategorySection />

      <Carousel.Wrapper ref={setCarouselWrapper}>
        {MOCK_CARDS.map(({ id, title, alarmCycle, items }) => (
          <Carousel.Item key={id}>
            <Card id={id} title={title} alarmCycle={alarmCycle} items={items} />
          </Carousel.Item>
        ))}

        <Carousel.Item>
          <EmptyCard />
        </Carousel.Item>
      </Carousel.Wrapper>

      <Carousel.Indicator carouselWrapper={carouselWrapper} />

      <RecommendSection />
      <button
        onClick={() => {
          setIsShowingList(true);
        }}
        type="button"
      >
        리스트 설정 BottomSheet 열기
      </button>
      <ListSettingBottomSheet
        isShowing={isShowingList}
        setToClose={() => {
          setIsShowingList(false);
        }}
      />
      <button
        onClick={() => {
          setIsShowingItem(true);
        }}
        type="button"
      >
        소지품 설정 BottomSheet 열기
      </button>
      <TemplateItemSettingBottomSheet
        isShowing={isShowingItem}
        setToClose={() => {
          setIsShowingItem(false);
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
