import { ItemsType, TitleType } from './type';

import GraphicCamera from '@/components/graphic/GraphicCamera';
import GraphicGym from '@/components/graphic/GraphicGym';
import GraphicWork from '@/components/graphic/GraphicWork';
import { Category } from '@/hooks/api/category/type';

export const ONBOARD_CATEGORY: Category[] = [
  {
    id: 0,
    type: 'DAILY',
    name: '일상',
    emoji: 'WORK',
  },
  {
    id: 1,
    type: 'EXERCISE',
    name: '운동',
    emoji: 'GYM',
  },
  {
    id: 2,
    type: 'TRAVEL',
    name: '여행',
    emoji: 'CAMERA',
  },
];

export const ONBOARD_TITLE: TitleType = {
  DAILY: {
    title: (
      <>
        <GraphicWork isAct /> 일상 속에서 챙기고 싶은
        <br /> 소지품이 있나요?
      </>
    ),
  },
  EXERCISE: {
    title: (
      <>
        <GraphicGym isAct /> 운동할 때 챙기고 싶은
        <br /> 소지품이 있나요?
      </>
    ),
  },
  TRAVEL: {
    title: (
      <>
        <GraphicCamera isAct /> 여행할 때 챙기고 싶은
        <br /> 소지품이 있나요?
      </>
    ),
  },
};

// TODO: Graphic 수정
export const ONBOARD_ITEMS: ItemsType = {
  DAILY: [
    {
      id: 0,
      name: '이어폰',
      emoji: 'CAMERA',
    },
    {
      id: 1,
      name: '노트북',
      emoji: 'CAMERA',
    },
    {
      id: 2,
      name: '충전기',
      emoji: 'CAMERA',
    },
    {
      id: 3,
      name: '보조배터리',
      emoji: 'CAMERA',
    },
    {
      id: 4,
      name: '시계',
      emoji: 'CAMERA',
    },
    {
      id: 5,
      name: '지갑',
      emoji: 'CAMERA',
    },
    {
      id: 6,
      name: '카드',
      emoji: 'CAMERA',
    },
    {
      id: 7,
      name: '열쇠',
      emoji: 'CAMERA',
    },
    {
      id: 8,
      name: '마스크',
      emoji: 'CAMERA',
    },
    {
      id: 9,
      name: '안경',
      emoji: 'CAMERA',
    },
    {
      id: 10,
      name: '향수',
      emoji: 'CAMERA',
    },
    {
      id: 11,
      name: '파우치',
      emoji: 'CAMERA',
    },
    {
      id: 12,
      name: '인공눈물',
      emoji: 'CAMERA',
    },
    {
      id: 13,
      name: '약',
      emoji: 'CAMERA',
    },
    {
      id: 14,
      name: '양치도구',
      emoji: 'CAMERA',
    },
    {
      id: 15,
      name: '우산',
      emoji: 'CAMERA',
    },
    {
      id: 16,
      name: '텀블러',
      emoji: 'CAMERA',
    },
    {
      id: 17,
      name: '휴지',
      emoji: 'CAMERA',
    },
  ],
  EXERCISE: [
    {
      id: 0,
      name: '이어폰',
      emoji: 'CAMERA',
    },
    {
      id: 1,
      name: '충전기',
      emoji: 'CAMERA',
    },
    {
      id: 2,
      name: '운동화',
      emoji: 'CAMERA',
    },
    {
      id: 3,
      name: '가방',
      emoji: 'CAMERA',
    },
    {
      id: 4,
      name: '양치도구',
      emoji: 'CAMERA',
    },
    {
      id: 5,
      name: '텀블러',
      emoji: 'CAMERA',
    },
    {
      id: 6,
      name: '수건',
      emoji: 'CAMERA',
    },
    {
      id: 7,
      name: '보조배터리',
      emoji: 'CAMERA',
    },
    {
      id: 8,
      name: '마스크',
      emoji: 'CAMERA',
    },
    {
      id: 9,
      name: '세면도구',
      emoji: 'CAMERA',
    },
    {
      id: 10,
      name: '매트',
      emoji: 'CAMERA',
    },
    {
      id: 11,
      name: '운동복',
      emoji: 'CAMERA',
    },
    {
      id: 12,
      name: '헤어밴드',
      emoji: 'CAMERA',
    },
    {
      id: 13,
      name: '스트랩',
      emoji: 'CAMERA',
    },
    {
      id: 14,
      name: '토삭스',
      emoji: 'CAMERA',
    },
    {
      id: 15,
      name: '속옷',
      emoji: 'CAMERA',
    },
    {
      id: 16,
      name: '쉐이크',
      emoji: 'CAMERA',
    },
    {
      id: 17,
      name: '단백질',
      emoji: 'CAMERA',
    },
  ],
  TRAVEL: [
    {
      id: 0,
      name: '이어폰',
      emoji: 'CAMERA',
    },
    {
      id: 1,
      name: '충전기',
      emoji: 'CAMERA',
    },
    {
      id: 2,
      name: '보조배터리',
      emoji: 'CAMERA',
    },
    {
      id: 3,
      name: '여권',
      emoji: 'CAMERA',
    },
    {
      id: 4,
      name: '속옷',
      emoji: 'CAMERA',
    },
    {
      id: 5,
      name: '양치도구',
      emoji: 'CAMERA',
    },
    {
      id: 6,
      name: '카드',
      emoji: 'CAMERA',
    },
    {
      id: 7,
      name: '로밍',
      emoji: 'CAMERA',
    },
    {
      id: 8,
      name: '마스크',
      emoji: 'CAMERA',
    },
    {
      id: 9,
      name: '지갑',
      emoji: 'CAMERA',
    },
    {
      id: 10,
      name: '돼지코',
      emoji: 'CAMERA',
    },
    {
      id: 11,
      name: '카메라',
      emoji: 'CAMERA',
    },
    {
      id: 12,
      name: '신분증',
      emoji: 'CAMERA',
    },
    {
      id: 13,
      name: '약',
      emoji: 'CAMERA',
    },
    {
      id: 14,
      name: '선글라스',
      emoji: 'CAMERA',
    },
    {
      id: 15,
      name: '캐리어',
      emoji: 'CAMERA',
    },
    {
      id: 16,
      name: '고데기',
      emoji: 'CAMERA',
    },
    {
      id: 17,
      name: '휴지',
      emoji: 'CAMERA',
    },
  ],
};
