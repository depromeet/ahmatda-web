import { ReactElement } from 'react';

import { NextPageWithLayout } from './_app.page';

import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <div style={{ height: '90vh', backgroundColor: 'blue' }} />
      <div style={{ height: '10vh', backgroundColor: 'red' }} />
    </div>
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
