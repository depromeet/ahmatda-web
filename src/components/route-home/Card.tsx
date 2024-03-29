import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { m } from 'framer-motion';

import AlarmBottomSheet from '../alarm/bottom-sheet/AlarmBottomSheet';
import LabelButton from '../button/LabelButton';
import IconAdd from '../icon/IconAdd';
import IconAlarmAdd from '../icon/IconAlarmAdd';
import IconSetting from '../icon/IconSetting';

import CardItem from './CardItem';

import { homeCardVariants } from '@/constants/motions';
import { UserTemplate } from '@/hooks/api/template/type';
import useToggle from '@/hooks/common/useToggle';

const ListSettingBottomSheet = dynamic(() => import('./ListSettingBottomSheet'));
const CardItemAppendBottomSheet = dynamic(() => import('./CardItemAppendBottomSheet'));

export type Props = UserTemplate;

const Card = ({ id, templateName, alarmInfo, items, pin }: Props) => {
  const [isListSettingShowing, _, toggleListSettingShowing] = useToggle(false);
  const [isCardItemAppendShowing, __, toggleCardItemAppendShowing] = useToggle(false);
  const [isAlarmSettingShowing, ___, toggleAlarmSettingShowing] = useToggle(false);

  return (
    <>
      <Wrapper variants={homeCardVariants} initial="initial" animate="animate" exit="exit">
        <TitleHeading>{templateName}</TitleHeading>
        {alarmInfo && <AlarmCycleSpan>{alarmInfo}</AlarmCycleSpan>}
        {/* <PinButton type="button">
          <IconPin />
        </PinButton> */}

        <ItemWrapper>
          <LabelButton size="large" withIcon onClick={toggleCardItemAppendShowing}>
            <IconAdd />
            추가하기
          </LabelButton>

          {items.map((item) => (
            <CardItem key={item.id} itemId={item.id} take={item.take} important={item.important} name={item.name} />
          ))}
        </ItemWrapper>

        <BottomButtonWrapper>
          <BottomButton type="button" onClick={toggleAlarmSettingShowing}>
            <IconAlarmAdd /> 알림
          </BottomButton>
          <BottomButton type="button" onClick={toggleListSettingShowing}>
            <IconSetting /> 설정
          </BottomButton>
        </BottomButtonWrapper>
      </Wrapper>

      <ListSettingBottomSheet
        id={id}
        templateName={templateName}
        pin={pin}
        setToClose={toggleListSettingShowing}
        isShowing={isListSettingShowing}
      />
      <CardItemAppendBottomSheet setToClose={toggleCardItemAppendShowing} isShowing={isCardItemAppendShowing} />
      <AlarmBottomSheet setToClose={toggleAlarmSettingShowing} isShowing={isAlarmSettingShowing} />
    </>
  );
};

export default Card;

const Wrapper = styled(m.div)(
  {
    position: 'relative',
    width: '100%',
    minHeight: '410px',
    height: '100%',
    // NOTE: 100vh - DefaultAppBar - Category - Indicator - Recommend - BottomNavigation
    maxHeight: 'calc(100vh - 48px - 56px - 24px - 114px - 56px)',
    padding: '20px',
    // NOTE: bottom button wrapper height
    paddingBottom: 'calc(48px)',
    borderRadius: '16px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
  }),
);

const TitleHeading = styled.h3({ marginBottom: '4px' }, ({ theme }) => ({
  ...theme.typographies.title2,
  color: theme.colors.gray6,
}));

const AlarmCycleSpan = styled.span({ display: 'inline-block', marginBottom: '24px' }, ({ theme }) => ({
  ...theme.typographies.caption2,
  color: theme.colors.gray4,
}));

// const PinButton = styled.button({
//   all: 'unset',
//   cursor: 'pointer',
//   position: 'absolute',
//   top: '11px',
//   right: '8px',
//   width: '48px',
//   height: '48px',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// });

const ItemWrapper = styled.div({
  flexGrow: '1',
  overflow: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const BottomButtonWrapper = styled.div(
  {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '48px',
    display: 'flex',
  },
  ({ theme }) => ({
    borderTop: `1px solid ${theme.colors.gray1}`,
  }),
);

const BottomButton = styled.button(
  {
    all: 'unset',
    cursor: 'pointer',
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ({ theme }) => ({ ...theme.typographies.caption2, color: theme.colors.gray5 }),
);
