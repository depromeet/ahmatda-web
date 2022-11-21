import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app.page';

import BottomNavigation from '@/components/navigation/BottomNavigation';
import DefaultAppBar from '@/components/navigation/DefaultAppBar';

const Template: NextPageWithLayout = () => {
  return <div>Template</div>;
};

Template.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <DefaultAppBar />
      {page}
      <BottomNavigation />
    </>
  );
};

export default Template;
