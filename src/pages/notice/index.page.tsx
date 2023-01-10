import styled from '@emotion/styled';

import GraphicEmptyCard from '@/components/graphic/GraphicEmptyCard';
import FixedSpinner from '@/components/loading/FixedSpinner';
import LoadingHandler from '@/components/loading/LoadingHandler';
import AppBar from '@/components/navigation/AppBar';
import NoticeItem from '@/components/route-notice/NoticeItem';
import useGetAlarmHistory from '@/hooks/api/alarm/useGetAlarmHistory';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const Notice = () => {
  const { data, isLoading, isEmpty } = useAlarmHistory();

  return (
    <>
      <WhiteBackgroundGlobalStyles />
      <LoadingHandler isLoading={isLoading} fallback={<FixedSpinner />}>
        <AppBar title="알림" />

        <Main>
          {isEmpty && <EmptyCard />}

          {data?.result.map((alarmHistory) => (
            <NoticeItem
              key={alarmHistory.elapsedSentTime + alarmHistory.message}
              icon="&#127911;"
              title={alarmHistory.message}
              time={alarmHistory.elapsedSentTime}
            />
          ))}
        </Main>
      </LoadingHandler>
    </>
  );
};

export default Notice;

const Main = styled.main({ paddingTop: '8px' });

const useAlarmHistory = () => {
  const { data, isLoading } = useGetAlarmHistory();

  const isEmpty = data?.result.length === 0 && !isLoading;

  return { data, isLoading, isEmpty };
};

const EmptyCard = () => {
  return (
    <EmptyWrapper>
      <GraphicEmptyCard />
      <EmptyParagraph>아직 발송된 알림이 없어요.</EmptyParagraph>
    </EmptyWrapper>
  );
};

const EmptyWrapper = styled.div({
  width: '100%',
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const EmptyParagraph = styled.p({ marginTop: '32px' }, ({ theme }) => ({
  ...theme.typographies.caption1,
  color: theme.colors.gray5,
}));
