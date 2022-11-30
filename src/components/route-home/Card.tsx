import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import IconAdd from '../icon/IconAdd';
import IconAlarmAdd from '../icon/IconAlarmAdd';
import IconPin from '../icon/IconPin';
import IconSetting from '../icon/IconSetting';

import CardItem from './CardItem';

// TODO: API 부착 이후 변경 (요소 및 선언 위치)
export interface Item {
  id: string;
  isChecked: boolean;
  name: string;
  isImportant: boolean;
}
export interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  id: string;
  title: string;
  alarmCycle: string;
  items: Item[];
}

const Card = ({ title, alarmCycle, items }: Props) => {
  return (
    <Wrapper>
      <TitleHeading>{title}</TitleHeading>
      <AlarmCycleSpan>{alarmCycle}</AlarmCycleSpan>
      <PinButton type="button">
        <IconPin />
      </PinButton>

      <ItemWrapper>
        <LabelButton size="large">
          <IconAdd />
          추가하기
        </LabelButton>

        {items.map(({ id, isChecked, isImportant, name }) => (
          <CardItem key={id} id={id} isChecked={isChecked} isImportant={isImportant} name={name} />
        ))}
      </ItemWrapper>

      <BottomButtonWrapper>
        <BottomButton type="button">
          <IconAlarmAdd /> 알림
        </BottomButton>
        <BottomButton type="button">
          <IconSetting /> 설정
        </BottomButton>
      </BottomButtonWrapper>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div(
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

const PinButton = styled.button({
  all: 'unset',
  cursor: 'pointer',
  position: 'absolute',
  top: '11px',
  right: '8px',
  width: '48px',
  height: '48px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

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
