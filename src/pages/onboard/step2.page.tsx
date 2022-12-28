import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { m } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

import ContainedButton from '@/components/button/ContainedButton';
import Graphic from '@/components/graphic/Graphic';
import Item from '@/components/item/Item';
import AppBar from '@/components/navigation/AppBar';
import ButtonSection from '@/components/route-onboard/ButtonSection';
import TitleSection from '@/components/route-onboard/TitleSection';
import { staggerHalf } from '@/constants/motions';
import { ONBOARD_ITEMS, ONBOARD_TITLE } from '@/constants/route-onboard/onboardConstants';
import { ItemType } from '@/constants/route-onboard/type';
import selectedOnboardCategory from '@/store/route-onboard/selectedOnboardCategory';
import selectedOnboardItems from '@/store/route-onboard/selectedOnboardItems';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const Step2 = () => {
  const router = useRouter();

  const selectedCategory = useRecoilValue(selectedOnboardCategory);
  const [selectedItems, setSelectedItems] = useRecoilState(selectedOnboardItems);
  const isCheckAny = !selectedItems.length;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, item: ItemType) => {
    let updateSelectedList = [...selectedItems];
    if (e.target.checked) updateSelectedList = [...updateSelectedList, item];
    else updateSelectedList.splice(updateSelectedList.indexOf(item), 1);

    setSelectedItems(updateSelectedList);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/onboard/step3');
  };

  return (
    <>
      <WhiteBackgroundGlobalStyles />
      <AppBar onClickBackButton={() => router.push('/onboard/step1')} />
      <Wrapper>
        <TitleSection
          title={ONBOARD_TITLE[selectedCategory.type].title}
          subTitle={
            <>
              이것만은 꼭 챙겼으면 하는 소지품을 알려 주세요.
              <br />
              리스트에 추가되어 알림을 받아 볼 수 있어요.
            </>
          }
        />
        <form onSubmit={onSubmit}>
          <SelectSection variants={staggerHalf} initial="initial" animate="animate" exit="exit">
            {ONBOARD_ITEMS[selectedCategory.type].map((item) => (
              <Item
                key={item.name}
                name="items"
                value={item.name}
                label={item.name}
                emjCode={<Graphic type={item.emoji} isAct={selectedItems.indexOf(item) !== -1} />}
                labelSize="small"
                onChange={(e) => onChange(e, item)}
                checked={selectedItems.indexOf(item) !== -1}
              />
            ))}
          </SelectSection>
          <ButtonSection>
            <ContainedButton type="submit" size="large" disabled={isCheckAny}>
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
  min-height: calc(100vh - 48px);
  padding-top: 16px;
`;

const SelectSection = styled(m.section)`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 48px;
  gap: 16px 8px;
`;
