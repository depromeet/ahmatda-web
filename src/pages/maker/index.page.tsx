import { ReactElement } from 'react';
import { useTheme } from '@emotion/react';
import { m } from 'framer-motion';

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
    { name: '이은지', icon: <GraphicPC isAct size={40} />, link: 'https://github.com/eunddodi' },
    { name: '박한솔', icon: <GraphicAirpods isAct size={40} />, link: null },
  ],
  'Backend Dev': [
    { name: '김민걸', icon: <GraphicCharger isAct size={40} />, link: null },
    { name: '명수찬', icon: <GraphicLipbalm isAct size={40} />, link: 'https://github.com/suchanmyoung' },
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
    <svg width="231" height="258" viewBox="0 0 231 258" fill="none" xmlns="http://www.w3.org/2000/svg">
      <m.path
        // animate={{
        //   y: [0, 6.5, -1.5, 4.5, -2.5, 0],
        //   scale: [1, 0.99, 1.01, 0.99, 1.01, 1],
        // }}
        // transition={{
        //   duration: 4,
        //   repeat: Infinity,
        // }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.4639 50.0382C16.9803 65.514 2.38217 105.203 17.858 138.687L25.0315 154.208C33.3498 172.205 48.6636 184.746 66.2491 190.094L60.0267 138.093C58.8956 128.641 65.6416 120.061 75.0943 118.93L167.059 107.925C166.093 102.203 164.359 96.5125 161.807 90.9912L154.633 75.4706C139.157 41.9871 99.468 27.3889 65.9845 42.8647L50.4639 50.0382Z"
        fill="#E9E9EE"
      />

      <m.g
        animate={{
          y: [0, 7, -2, 5, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M103.435 115.538C103.382 115.198 103.335 114.856 103.293 114.512C101.427 98.9154 112.558 84.7585 128.155 82.8922C143.752 81.0258 157.909 92.1567 159.775 107.754C159.816 108.098 159.851 108.441 159.88 108.784L138.427 111.351C138.438 111.009 138.423 110.662 138.381 110.312C137.929 106.53 134.497 103.832 130.715 104.285C126.934 104.737 124.236 108.169 124.688 111.95C124.73 112.3 124.798 112.641 124.889 112.971L103.435 115.538Z"
          fill="#FF6C3E"
        />
        <path
          d="M152.358 40.7431C131.524 34.5299 114.066 41.1178 107.941 45.1884L106.95 41.7216L132.019 28.6693L159.849 32.2956L182.797 49.8208L187.422 68.8914C184.415 62.0975 173.192 46.9563 152.358 40.7431Z"
          fill="#626273"
        />
        <rect
          width="15.1768"
          height="61.1002"
          rx="7.58842"
          transform="matrix(0.981311 -0.192428 0.275284 0.961363 82.1875 73.918)"
          fill="#626273"
        />
        <rect
          width="15.1768"
          height="61.1002"
          rx="7.58842"
          transform="matrix(-0.715619 -0.698491 -0.756886 0.653547 192.844 106.92)"
          fill="#626273"
        />
        <rect
          x="90.0859"
          y="63.0645"
          width="4.0591"
          height="12.6536"
          rx="2.02955"
          transform="rotate(16.6058 90.0859 63.0645)"
          fill="#626273"
        />
        <rect
          width="4.0591"
          height="12.6536"
          rx="2.02955"
          transform="matrix(-0.958294 -0.285785 -0.285785 0.958294 192.188 93.5137)"
          fill="#626273"
        />
        <rect
          width="13.898"
          height="61.1002"
          rx="6.94901"
          transform="matrix(0.981311 -0.192428 0.275284 0.961363 97.0938 70.9961)"
          fill="#464656"
        />
        <rect
          width="13.898"
          height="61.1002"
          rx="6.94901"
          transform="matrix(-0.715619 -0.698491 -0.756886 0.653547 181.977 96.3105)"
          fill="#464656"
        />
        <path
          d="M88.8047 61.7793L96.4152 64.0489C95.9257 65.6904 94.1981 66.6243 92.5566 66.1347L90.8905 65.6379C89.249 65.1483 88.3152 63.4208 88.8047 61.7793Z"
          fill="#626273"
        />
        <path
          d="M193.938 93.1348L186.327 90.8651C185.837 92.5066 186.771 94.2342 188.413 94.7237L190.079 95.2206C191.72 95.7101 193.448 94.7763 193.938 93.1348Z"
          fill="#626273"
        />
        <path
          d="M153.514 33.0802C120.504 23.2359 101.773 49.531 96.3965 64.0611L88.7972 61.7948C93.9804 45.6493 118.774 18.0467 154.794 28.7887C195.38 40.8924 197.877 76.6388 193.934 93.1541L186.324 90.8847C187.924 85.5203 194.777 45.3856 153.514 33.0802Z"
          fill="#464656"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M144.168 110.664L168.765 107.72L140.992 131.701C138.088 134.209 133.506 134.069 130.76 131.389C128.013 128.708 128.142 124.502 131.047 121.993L144.168 110.664ZM109.632 114.796L123.559 113.13L125.635 120.381C126.691 124.07 124.495 127.66 120.729 128.398C116.963 129.137 113.053 126.744 111.997 123.055L109.632 114.796ZM109.622 114.797L94.4141 116.617L96.9179 125.361C98.0716 129.39 102.341 132.003 106.454 131.196C110.566 130.39 112.965 126.47 111.811 122.441L109.622 114.797ZM189.464 105.392C189.892 107.704 189.096 110.158 187.103 111.879L152.344 141.892C149.172 144.631 144.169 144.479 141.17 141.551C138.171 138.624 138.311 134.03 141.483 131.291L168.784 107.718L187.201 105.514C187.962 105.423 188.718 105.383 189.464 105.392Z"
          fill="#FF6C3E"
        />

        <rect
          x="57.9766"
          y="120.977"
          width="147.383"
          height="110.537"
          rx="17.2378"
          transform="rotate(-6.82359 57.9766 120.977)"
          fill="#FF6C3E"
          fillOpacity="0.74"
        />

        <mask
          id="mask0_2705_61952"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="59"
          y="105"
          width="157"
          height="124"
        >
          <rect
            x="57.9766"
            y="120.977"
            width="147.383"
            height="110.537"
            rx="17.2378"
            transform="rotate(-6.82359 57.9766 120.977)"
            fill="#FF916F"
          />
        </mask>

        <g mask="url(#mask0_2705_61952)">
          <rect
            x="62.8984"
            y="162.135"
            width="147.383"
            height="75.9943"
            transform="rotate(-6.82359 62.8984 162.135)"
            fill="#FF6C3E"
          />
        </g>
      </m.g>

      <m.ellipse
        animate={{
          y: [0, 1, -1, 1, -1, 0],
          scale: [1, 0.97, 1.01, 0.98, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        opacity="0.5"
        cx="138"
        cy="249.003"
        rx="79"
        ry="8.38548"
        fill="#C7C7D0"
      />
    </svg>
  );
};
