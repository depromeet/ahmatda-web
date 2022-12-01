import { ComponentProps, FC } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';
import SegmentedControl from '../segmented-control/SegmentedControl';
import ToggleSwitch from '../toggle/ToggleSwitch';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const AlarmBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <Wrapper>
        <AppBar
          backButtonType="cancel"
          title="알림 설정"
          onClickBackButton={setToClose}
          rightElement={<LabelButton size="large">완료</LabelButton>}
        />
        <Form>
          <Row>
            <div>알림</div>
            <ToggleSwitch />
          </Row>
          <SegmentedControl options={['요일별', '날짜별']} />
        </Form>
      </Wrapper>
    </BottomSheet>
  );
};

export default AlarmBottomSheet;

const Wrapper = styled.div({ height: '60vh' });

const Form = styled.form({
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const Row = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});
