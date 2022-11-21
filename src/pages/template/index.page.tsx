import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app.page';

import BottomNavigation from '@/components/navigation/BottomNavigation';

const Template: NextPageWithLayout = () => {
  return <div>Template</div>;
};

Template.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
      <BottomNavigation />
    </>
  );
};

export default Template;
