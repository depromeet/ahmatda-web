import Button from '@/components/button/Button';
import ContainedButton from '@/components/button/ContainedButton';
import LabelButton from '@/components/button/LabelButton';
import Checkbox from '@/components/checkbox/Checkbox';

const Test = () => {
  return (
    <div>
      <Button>테스트 버튼</Button>

      <ContainedButton size="medium">컨테인 버튼 medium</ContainedButton>
      <ContainedButton size="medium" disabled>
        컨테인 버튼 medium
      </ContainedButton>

      <ContainedButton size="large">컨테인 버튼 large</ContainedButton>
      <ContainedButton size="large" disabled>
        컨테인 버튼 large
      </ContainedButton>

      <LabelButton>라벨 버튼 small</LabelButton>
      <LabelButton disabled>라벨 버튼 small</LabelButton>
      <LabelButton size="large">라벨 버튼 large</LabelButton>
      <LabelButton size="large" disabled>
        라벨 버튼 large
      </LabelButton>

      <div>
        <Checkbox
          onCheck={() => {
            // 체크박스 체크 시 실행할 내용 작성
          }}
          onUncheck={() => {
            // 체크박스 체크 해제 시 실행할 내용 작성
          }}
        />
      </div>
    </div>
  );
};

export default Test;
