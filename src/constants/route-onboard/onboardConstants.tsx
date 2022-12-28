import { ItemsType, ListCardsType, TitleType } from './type';

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
      name: '이어폰',
      emoji: 'AIRPODS',
    },
    {
      name: '노트북',
      emoji: 'PC',
    },
    {
      name: '충전기',
      emoji: 'CHARGER',
    },
    {
      name: '보조배터리',
      emoji: 'BATTERY',
    },
    {
      name: '시계',
      emoji: 'APPLEWATCH',
    },
    {
      name: '지갑',
      emoji: 'WALLET',
    },
    {
      name: '카드',
      emoji: 'CARD',
    },
    {
      name: '열쇠',
      emoji: 'KEY',
    },
    {
      name: '마스크',
      emoji: 'MASK',
    },
    {
      name: '안경',
      emoji: 'GLASSES',
    },
    {
      name: '향수',
      emoji: 'PERFUME',
    },
    {
      name: '파우치',
      emoji: 'POUCH',
    },
    {
      name: '인공눈물',
      emoji: 'EYEDROPS',
    },
    {
      name: '약',
      emoji: 'PILL',
    },
    {
      name: '양치도구',
      emoji: 'TEETH',
    },
    {
      name: '우산',
      emoji: 'CAMERA',
    },
    {
      name: '텀블러',
      emoji: 'TUMBLER',
    },
    {
      name: '휴지',
      emoji: 'TISSUE',
    },
  ],
  EXERCISE: [
    {
      name: '이어폰',
      emoji: 'AIRPODS',
    },
    {
      name: '충전기',
      emoji: 'CHARGER',
    },
    {
      name: '운동화',
      emoji: 'RUN',
    },
    {
      name: '가방',
      emoji: 'SCHOOL',
    },
    {
      name: '양치도구',
      emoji: 'TEETH',
    },
    {
      name: '텀블러',
      emoji: 'TUMBLER',
    },
    {
      name: '수건',
      emoji: 'TOWEL',
    },
    {
      name: '보조배터리',
      emoji: 'BATTERY',
    },
    {
      name: '마스크',
      emoji: 'MASK',
    },
    {
      name: '세면도구',
      emoji: 'CAMERA',
    },
    {
      name: '매트',
      emoji: 'MAT',
    },
    {
      name: '운동복',
      emoji: 'SPORTSWEAR',
    },
    {
      name: '헤어밴드',
      emoji: 'HEADBAND',
    },
    {
      name: '스트랩',
      emoji: 'STRAP',
    },
    {
      name: '토삭스',
      emoji: 'TOESCOKS',
    },
    {
      name: '속옷',
      emoji: 'UNDERWEAR',
    },
    {
      name: '쉐이크',
      emoji: 'SHAKE',
    },
    {
      name: '단백질',
      emoji: 'PROTEIN',
    },
  ],
  TRAVEL: [
    {
      name: '이어폰',
      emoji: 'AIRPODS',
    },
    {
      name: '충전기',
      emoji: 'CHARGER',
    },
    {
      name: '보조배터리',
      emoji: 'BATTERY',
    },
    {
      name: '여권',
      emoji: 'PASSPORT',
    },
    {
      name: '속옷',
      emoji: 'UNDERWEAR',
    },
    {
      name: '양치도구',
      emoji: 'TEETH',
    },
    {
      name: '카드',
      emoji: 'CARD',
    },
    {
      name: '로밍',
      emoji: 'ROAMING',
    },
    {
      name: '마스크',
      emoji: 'MASK',
    },
    {
      name: '지갑',
      emoji: 'WALLET',
    },
    {
      name: '돼지코',
      emoji: 'SOCKET',
    },
    {
      name: '카메라',
      emoji: 'CAMERA',
    },
    {
      name: '신분증',
      emoji: 'IDCARD',
    },
    {
      name: '약',
      emoji: 'PILL',
    },
    {
      name: '선글라스',
      emoji: 'SUNGLASSES',
    },
    {
      name: '캐리어',
      emoji: 'CARRIER',
    },
    {
      name: '고데기',
      emoji: 'CURLINGIRON',
    },
    {
      name: '휴지',
      emoji: 'TISSUE',
    },
  ],
};

export const ONBOARD_LISTCARD: ListCardsType = {
  DAILY: [
    {
      title: '출근할 때 필수품',
      option: [
        {
          name: '지갑',
          emoji: 'WALLET',
        },
        {
          name: '카드',
          emoji: 'CARD',
        },
        {
          name: '열쇠',
          emoji: 'KEY',
        },
        {
          name: '마스크',
          emoji: 'MASK',
        },
        {
          name: '안경',
          emoji: 'GLASSES',
        },
        {
          name: '이어폰',
          emoji: 'AIRPODS',
        },
      ],
    },
    {
      title: '등교할 때 필수품',
      option: [
        {
          name: '노트북',
          emoji: 'PC',
        },
        {
          name: '충전기',
          emoji: 'CHARGER',
        },
        {
          name: '보조배터리',
          emoji: 'BATTERY',
        },
        {
          name: '시계',
          emoji: 'APPLEWATCH',
        },
      ],
    },
  ],
  EXERCISE: [
    {
      title: '운동할 때 필수품',
      option: [
        {
          name: '세면도구',
          emoji: 'CAMERA',
        },
        {
          name: '텀블러',
          emoji: 'TUMBLER',
        },
        {
          name: '수건',
          emoji: 'TOWEL',
        },
        {
          name: '운동복',
          emoji: 'SPORTSWEAR',
        },
      ],
    },
  ],
  TRAVEL: [
    {
      title: '여행갈 때 필수품',
      option: [
        {
          name: '신분증',
          emoji: 'IDCARD',
        },

        {
          name: '선글라스',
          emoji: 'SUNGLASSES',
        },
        {
          name: '캐리어',
          emoji: 'CARRIER',
        },

        {
          name: '충전기',
          emoji: 'CHARGER',
        },
        {
          name: '보조배터리',
          emoji: 'BATTERY',
        },
      ],
    },
  ],
};
