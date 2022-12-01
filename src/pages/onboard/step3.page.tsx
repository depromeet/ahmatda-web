import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { m } from 'framer-motion';

import ContainedButton from '@/components/button/ContainedButton';
import AppBar from '@/components/navigation/AppBar';
import ButtonSection from '@/components/route-onboard/ButtonSection';
import ListCard from '@/components/route-onboard/ListCard';
import TitleSection from '@/components/route-onboard/TitleSection';
import { mockCheckboxGroupOptions } from '@/fixtures/checkboxGroup.mock';

const LIST_CARD = {
  daily: [
    {
      title: '출근할 때 필수품',
      option: mockCheckboxGroupOptions,
    },
    {
      title: '등교할 때 필수품',
      option: mockCheckboxGroupOptions,
    },
  ],
  exercise: [
    {
      title: '운동할 때 필수품',
      option: mockCheckboxGroupOptions,
    },
  ],
  travel: [
    {
      title: '여행갈 때 필수품',
      option: mockCheckboxGroupOptions,
    },
  ],
};

const Step3 = () => {
  const router = useRouter();

  const [checkStatus, setCheckStatus] = useState<boolean[]>(new Array(LIST_CARD.daily.length).fill(false));

  const toggleSingleCheckbox = (clikedIdx: number) => {
    setCheckStatus((prev) => prev.map((checked, idx) => checkedOneOrNot(checked, clikedIdx, idx)));
  };

  // 템플릿은 하나만 선택하거나 or 모두 선택하지 않거나
  const checkedOneOrNot = (checked: boolean, clikedIdx: number, idx: number) => {
    if (clikedIdx === idx) return !checked;
    return false;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <AppBar onClickBackButton={() => router.push('/onboard/step2')} />
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
            {LIST_CARD.daily.map((list, idx) => (
              <ListCard
                key={list.title}
                title={list.title}
                options={list.option}
                onToggle={() => {
                  toggleSingleCheckbox(idx);
                }}
                checked={checkStatus[idx]}
              />
            ))}
          </CardsWrapper>
          <ButtonSection>
            {checkStatus.indexOf(true) !== -1 ? (
              <ContainedButton type="submit" size="large">
                다음
              </ContainedButton>
            ) : (
              <ContainedButton size="large">리스트가 없어도 괜찮아요</ContainedButton>
            )}
          </ButtonSection>
        </form>
      </Wrapper>
    </>
  );
};

export default Step3;

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
