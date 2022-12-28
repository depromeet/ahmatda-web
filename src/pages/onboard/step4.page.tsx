import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { m, Variants } from 'framer-motion';
import { useRecoilValue } from 'recoil';

import Graphic from '@/components/graphic/Graphic';
import Item from '@/components/item/Item';
import { defaultFadeInUpVariants } from '@/constants/motions';
import animationData from '@/constants/route-onboard/onboardingAnimation.json';
import useUserOnboardMutaion from '@/hooks/api/onboard/useUserOnboardMutaion';
import selectedOnboardCategory from '@/store/route-onboard/selectedOnboardCategory';
import selectedOnboardItems from '@/store/route-onboard/selectedOnboardItems';
import selectedOnboardTemplate from '@/store/route-onboard/selectedOnboardTemplate';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const FIRST_DURATION = 3000;
const SECOND_DURATION = 1500;

const Step4 = () => {
  const router = useRouter();

  const selectedCategory = useRecoilValue(selectedOnboardCategory);
  const selectedItems = useRecoilValue(selectedOnboardItems);
  const selectedTemplate = useRecoilValue(selectedOnboardTemplate);

  const [temp, setTemp] = useState<boolean>(false);
  const { createUserMutation } = useUserOnboardMutaion();

  useEffect(() => {
    createUserMutation.mutate({
      category: selectedCategory.type,
      templateName: selectedTemplate ? selectedTemplate.title : '기본 소지품',
      items: selectedTemplate
        ? selectedTemplate.option.map((item) => item.name)
        : selectedItems.map((item) => item.name),
    });
    const timer = setTimeout(() => setTemp(true), FIRST_DURATION);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!temp) return;
    const timer = setTimeout(() => router.replace('/'), SECOND_DURATION);

    return () => {
      clearTimeout(timer);
    };
  }, [temp]);

  return (
    <Wrapper>
      <TextSection variants={stagger} initial="initial" animate="animate" exit="exit">
        {!temp ? (
          <>
            <SelectedOption variants={defaultFadeInUpVariants}>
              <Text>
                <Graphic type={selectedCategory.emoji} isAct />
                {selectedCategory.type === 'DAILY'
                  ? ` ${selectedCategory.name} 속에서`
                  : ` ${selectedCategory.name} 할 때`}
              </Text>
            </SelectedOption>
            {selectedTemplate ? (
              <>
                <SelectedOption variants={defaultFadeInUpVariants}>
                  {selectedTemplate.option
                    .filter((item, idx) => idx < 5)
                    .map((item) => {
                      return (
                        <Item
                          key={item.name}
                          label={item.name}
                          emjCode={<Graphic type={item.emoji} isAct />}
                          labelSize="small"
                          disabled
                        />
                      );
                    })}
                  {selectedTemplate.option.length > 5 && (
                    <Item label={`외 ${selectedTemplate.option.length - 5}개`} labelSize="small" disabled />
                  )}
                </SelectedOption>
                <SelectedOption variants={defaultFadeInUpVariants}>
                  <Text>그리고</Text>
                  <Item label={selectedTemplate.title} labelSize="small" disabled />
                </SelectedOption>
              </>
            ) : (
              <SelectedOption variants={defaultFadeInUpVariants}>
                {selectedItems
                  .filter((item, idx) => idx < 5)
                  .map((item) => {
                    return (
                      <Item
                        key={item.name}
                        label={item.name}
                        emjCode={<Graphic type={item.emoji} isAct />}
                        labelSize="small"
                        disabled
                      />
                    );
                  })}
                {selectedItems.length > 5 && (
                  <Item label={`외 ${selectedItems.length - 5}개`} labelSize="small" disabled />
                )}
              </SelectedOption>
            )}
          </>
        ) : (
          <SelectedOption variants={defaultFadeInUpVariants}>
            <Text>
              이젠 까먹지 않고 <br />
              챙길수 있게 해 드릴게요!
            </Text>
          </SelectedOption>
        )}
      </TextSection>
      <AnimationSection>
        <Lottie options={defaultOptions} height={375} width={325} />
      </AnimationSection>
      <WhiteBackgroundGlobalStyles key={router.asPath} />
    </Wrapper>
  );
};

export default Step4;

const Wrapper = styled(m.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 375px;
  height: 100vh;
`;

const TextSection = styled(m.div)`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-top: 130px;
`;

const SelectedOption = styled(m.div)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Text = styled.span`
  ${({ theme }) => ({ ...theme.typographies.text1 })};
  color: ${({ theme }) => theme.colors.gray6};
`;

const AnimationSection = styled.div`
  width: 325px;
  height: 375px;
  margin-bottom: 50px;
`;

const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.65 } },
};
