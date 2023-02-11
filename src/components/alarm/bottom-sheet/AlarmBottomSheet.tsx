import { ComponentProps, FC, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';

import LabelButton from '../../button/LabelButton';
import AppBar from '../../navigation/AppBar';
import BottomSheet from '../../portal/BottomSheet';

import AlarmController from './AlarmController';

import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import CustomException from '@/exceptions/CustomException';
import useCreateAlarm from '@/hooks/api/alarm/useCreateAlarm';
import useGetAlarm from '@/hooks/api/alarm/useGetAlarm';
import recordEvent from '@/lib/analytics/record';
import configState from '@/store/alarm-config/config';
import dailyState from '@/store/alarm-config/daily';
import currentUserTemplateState from '@/store/route-home/currentUserTemplate';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const AlarmBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
  const resetAlarmConfig = useResetRecoilState(configState);
  const resetDailyAlarmConfig = useResetRecoilState(dailyState);
  const { mutate } = useCreateAlarm();
  const currentUserTemplate = useRecoilValue(currentUserTemplateState);
  const { refetch } = useGetAlarm(currentUserTemplate?.id);
  const [{ alarmType, isActivated }, setAlarmConfig] = useRecoilState(configState);

  useEffect(() => {
    if (isShowing) {
      refetch();
    }
  }, [isShowing]);

  // @memo: 날짜별 알림을 우선적으로 구현하기 위해 주석처리
  // const alarmTypeOptions = alarmTypePairs.map((pair) => pair.value);
  // const alarmTypeValue = alarmTypePairs.find((pair) => pair.key === alarmType)?.value;

  // const handleChangeAlarmType = (option: string) => {
  //   const alarmTypeKey = alarmTypePairs.find(({ value }) => option === value)?.key;

  //   if (!alarmTypeKey) return;

  //   setAlarmConfig((prev) => ({ ...prev, alarmType: alarmTypeKey }));
  // };

  const onClose = () => {
    resetAlarmConfig();
    resetDailyAlarmConfig();
    setToClose();
  };

  const onComplete = () => {
    if (!currentUserTemplate) {
      throw new CustomException('유저템플릿 정보를 불러올 수 없습니다.', 'UNKNOWN_ERROR');
    }

    mutate(currentUserTemplate.id);
    recordEvent({ action: '알림 설정', value: `소지품 수 : ${currentUserTemplate.items.length}` });
    onClose();
  };

  const onChangeAlarmActivateToggle = () => {
    setAlarmConfig((prev) => ({ ...prev, isActivated: !prev.isActivated }));
  };

  return (
    <BottomSheet isShowing={isShowing} setToClose={onClose}>
      <AppBar
        backButtonType="cancel"
        title="알림 설정"
        onClickBackButton={onClose}
        rightElement={
          <LabelButton size="large" onClick={onComplete}>
            완료
          </LabelButton>
        }
      />
      <Wrapper>
        <Form>
          <Row spaceBetween>
            <div>알림</div>
            <ToggleSwitch name="alarm" checked={isActivated} onChange={onChangeAlarmActivateToggle} />
          </Row>
          {/* <SegmentedControl options={alarmTypeOptions} initialValue={alarmTypeValue} onChange={handleChangeAlarmType} /> */}
          <AlarmController alarmType={alarmType} />
        </Form>
      </Wrapper>
    </BottomSheet>
  );
};

export default AlarmBottomSheet;

const Wrapper = styled.div(
  {
    height: '60vh',
    width: '100%',
    overflowY: 'scroll',
    paddingBottom: '40px',
  },
  ({ theme }) => ({
    ...theme.typographies.body1,
    color: theme.colors.gray6,
  }),
);

const Form = styled.form({
  width: '100%',
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const Row = styled.div<{ spaceBetween?: boolean }>(
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
  },
  ({ spaceBetween }) => spaceBetween && { justifyContent: 'space-between' },
);
