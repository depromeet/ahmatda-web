import styled from '@emotion/styled';

import AppBar from '@/components/navigation/AppBar';
import NoticeItem from '@/components/route-notice/NoticeItem';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const Notice = () => {
  return (
    <>
      <WhiteBackgroundGlobalStyles />
      {/* TODO: #106 이후 패딩 대응 */}
      <AppBar title="알림" />
      <Main>
        <NoticeItem icon="&#127911;" title="아맞다! 이어폰은 꼭 챙기셔야 해요!" time="1초 전" />
        <NoticeItem
          icon="&#127911;"
          title="이어폰, 노트북, 충전기, 보조배터리, 시계, 안경 모두 챙기셨나요? "
          time="1초 전"
        />
        <NoticeItem icon="&#127911;" title="asdf" time="1초 전" />
        <NoticeItem icon="&#127911;" title="asdf" time="1초 전" />
        <NoticeItem icon="&#127911;" title="asdf" time="1초 전" />
        <NoticeItem icon="&#127911;" title="asdf" time="1초 전" />
        <NoticeItem icon="&#127911;" title="asdf" time="1초 전" />
        <NoticeItem icon="&#127911;" title="asdf" time="1초 전" />
        <NoticeItem icon="&#127911;" title="asdf" time="1초 전" />
        <NoticeItem icon="&#127911;" title="asdf" time="1초 전" />
        <NoticeItem icon="&#127911;" title="asdf" time="1초 전" />
        <NoticeItem icon="&#127911;" title="asdf" time="1초 전" />
      </Main>
    </>
  );
};

export default Notice;

const Main = styled.main({ paddingTop: '8px' });
