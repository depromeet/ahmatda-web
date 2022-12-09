import AppBar from '@/components/navigation/AppBar';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const AlarmSetting = () => {
  return (
    <>
      <WhiteBackgroundGlobalStyles />

      <main>
        <AppBar title="알림 설정" />
      </main>
    </>
  );
};

export default AlarmSetting;
