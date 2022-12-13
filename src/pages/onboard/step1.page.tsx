import styled from '@emotion/styled';
import { m } from 'framer-motion';

import ContainedButton from '@/components/button/ContainedButton';
import Item from '@/components/item/Item';
import ButtonSection from '@/components/route-onboard/ButtonSection';
import TitleSection from '@/components/route-onboard/TitleSection';
import { staggerOne } from '@/constants/motions';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const Step1 = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <WhiteBackgroundGlobalStyles />
      <Wrapper>
        <TitleSection
          title={
            <>
              만나서 반가워요.
              <br />
              어떤 상황에서 소지품을
              <br />
              관리 받고 싶으신가요?
            </>
          }
          subTitle={<>소지품 관리가 가장 필요한 상황을 1개 골라 주세요.</>}
        />
        <form onSubmit={onSubmit}>
          <SelectSection variants={staggerOne} initial="initial" animate="animate" exit="exit">
            <Item
              type="radio"
              name="category"
              value="daily"
              label="일상"
              emjCode="&#x1F4BC;"
              labelSize="large"
              defaultChecked
            />
            <Item type="radio" name="category" value="exercise" label="운동" emjCode="&#x1F4AA;" labelSize="large" />
            <Item type="radio" name="category" value="traval" label="여행" emjCode="&#x2708;" labelSize="large" />
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

export default Step1;

const Wrapper = styled(m.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 64px;
`;

const SelectSection = styled(m.section)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  margin-bottom: 48px;
`;
