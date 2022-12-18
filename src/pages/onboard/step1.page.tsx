import { cloneElement } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { m } from 'framer-motion';
import { useRecoilState, useSetRecoilState } from 'recoil';

import ContainedButton from '@/components/button/ContainedButton';
import GraphicCamera from '@/components/graphic/GraphicCamera';
import GraphicGym from '@/components/graphic/GraphicGym';
import GraphicWork from '@/components/graphic/GraphicWork';
import { GraphicProps } from '@/components/graphic/type';
import Item from '@/components/item/Item';
import ButtonSection from '@/components/route-onboard/ButtonSection';
import TitleSection from '@/components/route-onboard/TitleSection';
import { staggerOne } from '@/constants/motions';
import { post } from '@/lib/api';
import userTokenState from '@/store/localStorage/userToken';
import selectedOnboardCategory from '@/store/route-onboard/selectedOnboardCategory';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const CATEGORY_DATA = [
  {
    value: 'DAILY',
    label: '일상',
    emjCode: <GraphicWork />,
  },
  {
    value: 'EXERCISE',
    label: '운동',
    emjCode: <GraphicGym />,
  },
  {
    value: 'TRAVEL',
    label: '여행',
    emjCode: <GraphicCamera />,
  },
];

const Step1 = () => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedOnboardCategory);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/onboard/step2');
  };

  // TODO: 온보딩 마지막 로직 개발 이후에 삭제 필요
  const router = useRouter();
  const setUserToken = useSetRecoilState(userTokenState);
  const testTokenAndSave = async () => {
    const res = await post<{ result: string }>('/user', {
      onboardingRequest: {
        category: 'DAILY',
        templateName: 'Tomorrow Checklists',
        items: ['MacBook', 'Airpods'],
      },
    });
    setUserToken(res.result);
    router.push('/');
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

        <button type="button" onClick={testTokenAndSave}>
          테스트 토큰 발급 및 저장
        </button>

        <form onSubmit={onSubmit}>
          <SelectSection variants={staggerOne} initial="initial" animate="animate" exit="exit">
            {CATEGORY_DATA.map(({ value, label, emjCode }) => (
              <Item
                key={value}
                type="radio"
                name="category"
                value={value}
                label={label}
                emjCode={cloneElement<GraphicProps>(emjCode, { isAct: value === selectedCategory })}
                labelSize="large"
                defaultChecked={value === selectedCategory}
                onChange={(e) => onChange(e)}
              />
            ))}
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
