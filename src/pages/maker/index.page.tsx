import AppBar from '@/components/navigation/AppBar';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const Information = () => {
  return (
    <>
      <WhiteBackgroundGlobalStyles />

      <main>
        <AppBar title="만든 사람들" />
      </main>
    </>
  );
};

export default Information;
