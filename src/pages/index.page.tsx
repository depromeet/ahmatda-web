import { ReactElement } from 'react';

import { NextPageWithLayout } from './_app.page';

import BottomNavigation from '@/components/navigation/BottomNavigation';
import RecommendSection from '@/components/route-home/RecommendSection';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <div style={{ height: '90vh', backgroundColor: 'blue' }} />
      <div style={{ height: '10vh', backgroundColor: 'red' }} />
      <RecommendSection />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
      <BottomNavigation />
    </>
  );
};

export default HomePage;
