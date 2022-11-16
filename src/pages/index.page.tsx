import TextField from '@/components/text-field/TextField';

const HomePage = () => {
  return (
    <div style={{ width: '500px', padding: 40 }}>
      <TextField placeholder="소지품 입력" />
      <br />
      <br />
      <div />
      <TextField placeholder="소지품 입력" error="에러메세지" />
    </div>
  );
};

export default HomePage;
