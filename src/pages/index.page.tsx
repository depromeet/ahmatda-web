import { ReactElement } from 'react';

import { NextPageWithLayout } from './_app.page';

import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';
import RecommendSection from '@/components/route-home/RecommendSection';

const HomePage: NextPageWithLayout = () => {
  return <RecommendSection />;
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
