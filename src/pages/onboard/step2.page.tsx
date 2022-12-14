import styled from '@emotion/styled';
import { m } from 'framer-motion';

import ContainedButton from '@/components/button/ContainedButton';
import Item from '@/components/item/Item';
import ButtonSection from '@/components/route-onboard/ButtonSection';
import TitleSection from '@/components/route-onboard/TitleSection';
import { staggerOne } from '@/constants/motions';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const TITLE = {
  daily: {
    title: (
      <>
        &#x1F4BC; 일상 속에서 챙기고 싶은
        <br /> 소지품이 있나요?
      </>
    ),
    subTitle: (
      <>
        이것만은 꼭 챙겼으면 하는 소지품을 알려 주세요.
        <br />
        리스트에 추가되어 알림을 받아 볼 수 있어요.
      </>
    ),
  },
};

const Step2 = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <WhiteBackgroundGlobalStyles />
      <Wrapper>
        <TitleSection title={TITLE.daily.title} subTitle={TITLE.daily.subTitle} />
        <form onSubmit={onSubmit}>
          <SelectSection variants={staggerOne} initial="initial" animate="animate" exit="exit">
            <Item name="item" label="이어폰" emjCode="&#x1F3A7;" labelSize="small" />
            <Item name="item" label="노트북" emjCode="&#x1F4BB;" labelSize="small" />
            <Item name="item" label="충전기" emjCode="&#x1F50C;" labelSize="small" />
            <Item name="item" label="보조배터리" emjCode="&#x1F50B;" labelSize="small" />
            <Item name="item" label="시계" emjCode="&#x231A;" labelSize="small" />
            <Item name="item" label="지갑" emjCode="&#x1F45B;" labelSize="small" />
            <Item name="item" label="카드" emjCode="&#x1F4B3;" labelSize="small" />
            <Item name="item" label="열쇠" emjCode="&#x1F511;" labelSize="small" />
            <Item name="item" label="마스크" emjCode="&#x1F637;" labelSize="small" />
            <Item name="item" label="안경" emjCode="&#x1F453;" labelSize="small" />
            <Item name="item" label="향수" emjCode="&#x1F4A8;" labelSize="small" />
            <Item name="item" label="파우치" emjCode="&#x1F45D;" labelSize="small" />
            <Item name="item" label="인공눈물" emjCode="&#x1F4A7;" labelSize="small" />
            <Item name="item" label="약" emjCode="&#x1F48A;" labelSize="small" />
            <Item name="item" label="양치도구" emjCode="&#x1FAA5;" labelSize="small" />
            <Item name="item" label="우산" emjCode="&#x1F302;" labelSize="small" />
            <Item name="item" label="텀블러" emjCode="&#x1F964;" labelSize="small" />
            <Item name="item" label="휴지" emjCode="&#x1F9FB;" labelSize="small" />
          </SelectSection>
          <ButtonSection>
            <ContainedButton type="submit" size="large">
              다음
            </ContainedButton>
          </ButtonSection>
        </form>
      </Wrapper>
    </>
  );
};

export default Step2;

const Wrapper = styled(m.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 64px;
`;

const SelectSection = styled(m.section)`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 48px;
  gap: 16px 8px;
`;
