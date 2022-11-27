import { ComponentProps } from 'react';

import { BottomSheetAppBar } from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const CategorySettingBottomSheet = ({ isShowing, setToClose }: Props) => {
  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <BottomSheetAppBar title="카테고리 설정" onClickBackButton={setToClose} />

      <h1> asdf asdf</h1>
    </BottomSheet>
  );
};

export default CategorySettingBottomSheet;
