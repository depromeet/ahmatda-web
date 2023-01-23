import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { m } from 'framer-motion';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import ContainedButton from '@/components/button/ContainedButton';
import AppBar from '@/components/navigation/AppBar';
import ButtonSection from '@/components/route-onboard/ButtonSection';
import ListCard from '@/components/route-onboard/ListCard';
import TitleSection from '@/components/route-onboard/TitleSection';
import { ONBOARD_LISTCARD } from '@/constants/route-onboard/onboardConstants';
import { ListCardType } from '@/constants/route-onboard/type';
import recordEvent from '@/lib/analytics/record';
import selectedOnboardCategory from '@/store/route-onboard/selectedOnboardCategory';
import selectedOnboardItems from '@/store/route-onboard/selectedOnboardItems';
import selectedOnboardTemplate from '@/store/route-onboard/selectedOnboardTemplate';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const Step3 = () => {
  const router = useRouter();

  const selectedCategory = useRecoilValue(selectedOnboardCategory);
  const selectedItems = useRecoilValue(selectedOnboardItems);
  const setSelectedTemplate = useSetRecoilState(selectedOnboardTemplate);

  const [cardList, setCardList] = useState<ListCardType[]>(ONBOARD_LISTCARD[selectedCategory.type]);
  const [checkStatus, setCheckStatus] = useState<boolean[]>(
    new Array(ONBOARD_LISTCARD[selectedCategory.type].length).fill(false),
  );
  const isCheckAny = checkStatus.indexOf(true) !== -1;

  useEffect(() => {
    // 중복 아이템 제거
    const deduplicateArr = cardList.map((list) => {
      return {
        title: list.title,
        option: [
          ...list.option.filter((item) => {
            return !selectedItems.some((other) => other.name === item.name);
          }),
          ...selectedItems,
        ],
      };
    });
    setCardList(deduplicateArr);
  }, []);

  const toggleSingleCheckbox = (e: React.ChangeEvent<HTMLInputElement>, clikedIdx: number, option: ListCardType) => {
    setCheckStatus((prev) => prev.map((checked, idx) => checkedOneOrNot(checked, clikedIdx, idx)));

    if (e.target.checked) setSelectedTemplate(option);
    else setSelectedTemplate(null);
  };

  // 템플릿은 하나만 선택하거나 or 모두 선택하지 않거나
  const checkedOneOrNot = (checked: boolean, clikedIdx: number, idx: number) => {
    if (clikedIdx === idx) return !checked;
    return false;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace('/onboard/step4');
    recordEvent({ action: '온보딩 3', value: isCheckAny ? '템플릿 선택' : '템플릿 선택 안함' });
  };

  return (
    <>
      <WhiteBackgroundGlobalStyles />
      <AppBar onClickBackButton={() => router.replace('/onboard/step2')} />
      <Wrapper>
        <TitleSection
          title={
            <>
              당신을 위한
              <br /> 소지품 리스트를 찾았어요.
            </>
          }
          subTitle={
            <>
              가장 필요한 리스트를 1개 골라 주세요.
              <br />
              리스트가 홈에 그대로 추가돼요.
            </>
          }
        />
        <form onSubmit={onSubmit}>
          <CardsWrapper>
            {cardList.map((list, idx) => (
              <ListCard
                key={list.title}
                title={list.title}
                options={list.option}
                onToggle={(e) => {
                  toggleSingleCheckbox(e, idx, list);
                }}
                checked={checkStatus[idx]}
              />
            ))}
          </CardsWrapper>
          <ButtonSection>
            <ContainedButton type="submit" size="large">
              {isCheckAny ? '다음' : '리스트가 없어도 괜찮아요'}
            </ContainedButton>
          </ButtonSection>
        </form>
      </Wrapper>
    </>
  );
};

export default React.memo(Step3);

const Wrapper = styled(m.div)`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 48px);
  padding-top: 16px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin: 32px 0;
`;
