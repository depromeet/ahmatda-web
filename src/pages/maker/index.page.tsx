import { ReactElement } from 'react';
import { useTheme } from '@emotion/react';

import Graphic10Kg from '@/components/graphic/Graphic10Kg';
import GraphicAirpods from '@/components/graphic/GraphicAirpods';
import GraphicAppleWatch from '@/components/graphic/GraphicAppleWatch';
import GraphicCard from '@/components/graphic/GraphicCard';
import GraphicCharger from '@/components/graphic/GraphicCharger';
import GraphicEyeDrops from '@/components/graphic/GraphicEyeDrops';
import GraphicHandBag from '@/components/graphic/GraphicHandbag';
import GraphicHeadphones from '@/components/graphic/GraphicHeadphones';
import GraphicLipbalm from '@/components/graphic/GraphicLipbalm';
import GraphicPC from '@/components/graphic/GraphicPC';
import AppBar from '@/components/navigation/AppBar';

interface Maker {
  name: string;
  link: string | null;
  icon: ReactElement;
}

interface Makers {
  'Frontend Dev': Maker[];
  'Backend Dev': Maker[];
  Designer: Maker[];
}

const MAKERS: Makers = {
  'Frontend Dev': [
    { name: '오혜성', icon: <Graphic10Kg isAct size={40} />, link: 'https://www.hyesungoh.xyz/' },
    { name: '구민규', icon: <GraphicCard isAct size={40} />, link: null },
    { name: '이은지', icon: <GraphicPC isAct size={40} />, link: null },
    { name: '박한솔', icon: <GraphicAirpods isAct size={40} />, link: null },
  ],
  'Backend Dev': [
    { name: '김민걸', icon: <GraphicCharger isAct size={40} />, link: null },
    { name: '명수찬', icon: <GraphicLipbalm isAct size={40} />, link: null },
    { name: '조성민', icon: <GraphicHeadphones isAct size={40} />, link: 'https://github.com/sungmin69355' },
  ],
  Designer: [
    { name: '이영희', icon: <GraphicEyeDrops isAct size={40} />, link: 'https://www.behance.net/altns684700d5' },
    { name: '윤가빈', icon: <GraphicAppleWatch isAct size={40} />, link: 'https://www.behance.net/gabinyun' },
    { name: '이종원', icon: <GraphicHandBag isAct size={40} />, link: null },
  ],
};

const Information = () => {
  const theme = useTheme();
  return (
    <>
      <AppBar title="만든 사람들" />
      <div style={{ padding: '12px 0 24px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <GraphicLogo />
        </div>
        <p style={{ marginTop: '28px', color: theme.colors.black, ...theme.typographies.title2 }}>
          아맞다!
          <br />
          오늘도 소지품을 깜빡하셨나요?
        </p>
        <p style={{ marginTop: '8px', color: theme.colors.gray5, ...theme.typographies.caption1 }}>
          이제 아맞다가 알려 드릴게요.
          <br />
          소지품을 입력하고, 일상의 고민을 줄이세요!
        </p>
        <p style={{ margin: '64px 0 24px 0', color: theme.colors.gray5, ...theme.typographies.caption1 }}>
          팀 삼겹살🥓을 소개할게요.
        </p>
        <Grid title="Frontend Dev" />
        <Grid title="Backend Dev" />
        <Grid title="Designer" />
      </div>
    </>
  );
};

export default Information;

const Grid = ({ title }: { title: keyof typeof MAKERS }) => {
  const theme = useTheme();

  return (
    <div style={{ marginBottom: '20px' }}>
      <p style={{ marginBottom: '12px', color: theme.colors.gray4, ...theme.typographies.caption1 }}>{title}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', columnGap: '11.5px', rowGap: '12px' }}>
        {MAKERS[title].map((item) => {
          if (item.link === null) return <GridItem key={item.name} name={item.name} icon={item.icon} />;

          return (
            <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer">
              <GridItem key={item.name} name={item.name} icon={item.icon} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

const GridItem = ({ name, icon }: Omit<Maker, 'link'>) => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '22px',
        paddingBottom: '15px',
        backgroundColor: theme.colors.white,
        borderRadius: '10px',
      }}
    >
      {icon}
      <span style={{ marginTop: '12px', color: theme.colors.black, ...theme.typographies.caption1 }}>{name}</span>
    </div>
  );
};

const GraphicLogo = () => {
  return (
    <svg width="191" height="261" viewBox="0 0 191 261" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="22.0469"
        y="61.5137"
        width="153.403"
        height="153.403"
        rx="76.7015"
        transform="rotate(-2.44141 22.0469 61.5137)"
        fill="#E9E9EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M97.368 149.785C110.666 153.185 124.203 145.161 127.603 131.862C131.003 118.564 122.979 105.027 109.681 101.627C96.3821 98.227 82.8453 106.251 79.4453 119.55C76.0453 132.848 84.0696 146.385 97.368 149.785ZM102.034 131.543C105.258 132.367 108.539 130.422 109.363 127.198C110.188 123.974 108.242 120.692 105.019 119.868C101.795 119.044 98.513 120.989 97.6888 124.213C96.8645 127.437 98.8098 130.719 102.034 131.543Z"
        fill="#FF916F"
      />
      <path
        d="M110.609 95.0586L116.558 94.0998L118.957 108.983C119.22 110.619 118.096 112.16 116.46 112.424C114.824 112.688 113.272 111.577 113.008 109.942L110.609 95.0586Z"
        fill="#9090A0"
      />
      <circle cx="118.48" cy="94.1718" r="7.90792" transform="rotate(-9.15645 118.48 94.1718)" fill="#626273" />
      <circle r="7.90792" transform="matrix(-0.82136 -0.57041 -0.57041 0.82136 131.4 116.082)" fill="#626273" />
      <path
        d="M136.398 122.747C137.343 121.386 136.996 119.51 135.635 118.565C134.274 117.62 132.394 117.95 131.449 119.311L122.85 131.693L127.799 135.129L136.398 122.747Z"
        fill="#9090A0"
      />
      <path
        d="M134.432 121.946C134.668 121.606 134.584 121.139 134.244 120.902C133.904 120.666 133.436 120.751 133.2 121.091L130.596 124.841C130.36 125.181 130.444 125.648 130.784 125.884C131.124 126.12 131.591 126.036 131.827 125.696L134.432 121.946Z"
        fill="#626273"
      />
      <rect
        x="145.25"
        y="95.2539"
        width="38.6416"
        height="26.439"
        rx="5.55473"
        transform="rotate(-21 145.25 95.2539)"
        fill="#626273"
      />
      <path d="M147.07 99.9668L183.145 86.1189L185.009 90.9727L148.934 104.821L147.07 99.9668Z" fill="#9090A0" />
      <path
        d="M87.9305 32.5113C87.5109 28.8642 84.1559 26.2545 80.4369 26.6823C76.718 27.1102 74.0433 30.4136 74.4629 34.0607L77.921 64.1188"
        stroke="#9090A0"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M89.7404 116.704C89.4249 122.972 80.5841 123.989 78.8534 117.956L61.9193 58.9307C60.9729 55.632 63.2145 52.2728 66.6238 51.8806L86.6454 49.5771C90.0547 49.1849 93.0006 51.9473 92.828 55.3748L89.7404 116.704Z"
        fill="#626273"
      />
      <rect
        x="53.1641"
        y="112.836"
        width="104.686"
        height="103.933"
        rx="22.2189"
        transform="rotate(14.3416 53.1641 112.836)"
        fill="#FF6C3E"
      />
      <ellipse cx="89.3537" cy="254.559" rx="60.674" ry="6.44026" fill="#C7C7D0" />
    </svg>
  );
};
