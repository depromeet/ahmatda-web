import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { m } from 'framer-motion';
import { useRecoilState, useSetRecoilState } from 'recoil';

import ContainedButton from '@/components/button/ContainedButton';
import Graphic from '@/components/graphic/Graphic';
import Item from '@/components/item/Item';
import ButtonSection from '@/components/route-onboard/ButtonSection';
import TitleSection from '@/components/route-onboard/TitleSection';
import { staggerOne } from '@/constants/motions';
import { ONBOARD_CATEGORY } from '@/constants/route-onboard/onboardConstants';
import { Category } from '@/hooks/api/category/type';
import useDidMount from '@/hooks/life-cycle/useDidMount';
import { post } from '@/lib/api';
import userTokenState from '@/store/localStorage/userToken';
import selectedOnboardCategory from '@/store/route-onboard/selectedOnboardCategory';
import selectedOnboardItems from '@/store/route-onboard/selectedOnboardItems';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const Step1 = () => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedOnboardCategory);
  const setSelectedItems = useSetRecoilState(selectedOnboardItems);

  useDidMount(() => {
    // step2에서 back시 선택된 소지품 초기화
    setSelectedItems([]);
  });

  const onChange = (category: Category) => {
    setSelectedCategory(category);
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
            {ONBOARD_CATEGORY.map((category) => (
              <Item
                key={category.id}
                type="radio"
                name="category"
                value={category.type}
                label={category.name}
                emjCode={<Graphic type={category.emoji} isAct={category.type === selectedCategory.type} />}
                labelSize="large"
                defaultChecked={category.type === selectedCategory.type}
                onChange={() => onChange(category)}
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
