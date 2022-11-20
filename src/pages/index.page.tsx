import { ReactElement } from 'react';

import { NextPageWithLayout } from './_app.page';

import BottomNavigation from '@/components/navigation/BottomNavigation';

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
      {page}
      <BottomNavigation />
    </>
  );
};

export default HomePage;
