import { useState } from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

import Button from '@/components/button/Button';
import ContainedButton from '@/components/button/ContainedButton';
import IconButton from '@/components/button/IconButton';
import LabelButton from '@/components/button/LabelButton';
import Checkbox from '@/components/checkbox/Checkbox';
import Chip from '@/components/chip/Chip';
import IconAdd from '@/components/icon/IconAdd';
import IconCancel from '@/components/icon/IconCancel';
import IconCancelSmall from '@/components/icon/IconCancelSmall';
import IconCheckbox from '@/components/icon/IconCheckbox';
import IconChevron20pxUpDown from '@/components/icon/IconChevron20pxUpDown';
import IconChevron24pxRightLeft from '@/components/icon/IconChevron24pxRightLeft';
import IconChevron24pxUpDown from '@/components/icon/IconChevron24pxUpDown';
import IconHome from '@/components/icon/IconHome';
import IconInfo from '@/components/icon/IconInfo';
import IconMenu from '@/components/icon/IconMenu';
import IconMovable from '@/components/icon/IconMovable';
import IconOverflow from '@/components/icon/IconOverflow';
import IconPin from '@/components/icon/IconPin';
import IconSearch from '@/components/icon/IconSearch';
import SegmentedControl from '@/components/segmented-control/SegmentedControl';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';

const BottomSheet = dynamic(() => import('@/components/portal/BottomSheet'));

const Test = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Heading>버튼</Heading>
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

      <IconButton>
        <IconOverflow />
      </IconButton>

      <ToggleSwitch />
      <Heading>bottom sheet</Heading>

      <Button onClick={() => setIsOpen((prev) => !prev)}>bottom sheet 열기</Button>
      <BottomSheet setToClose={() => setIsOpen(false)} isShowing={isOpen}>
        <div>어쩌구저쩌구</div>
      </BottomSheet>

      <div>
        <Checkbox />
      </div>
      <div>
        <IconAdd />
        <IconCancel />
        <IconCancelSmall />
        <IconCheckbox />
        <IconChevron20pxUpDown />
        <IconChevron24pxRightLeft />
        <IconChevron24pxUpDown />
        <IconHome />
        <IconMenu />
        <IconMovable />
        <IconOverflow />
        <IconPin />
        <IconSearch />
        <IconInfo />
      </div>
      <div>
        <Chip color="black" label="디프만 준비물" />
        <Chip label="default" />
        <Chip color="black" icon={<IconAdd />} label="text" />
      </div>
      <div>
        <SegmentedControl options={['요일별', '날짜별']} />
      </div>
    </div>
  );
};

export default Test;

const Heading = styled.h2`
  border-top: solid 1px black;
`;
