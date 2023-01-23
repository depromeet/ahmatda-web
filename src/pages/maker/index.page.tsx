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
      <AppBar title="만든 사람들" backgroundColorType="gray" />
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
    <svg width="248" height="258" viewBox="0 0 248 258" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3451_72798)">
        <rect
          x="-0.164062"
          y="65.0605"
          width="150.678"
          height="150.678"
          rx="66.7898"
          transform="rotate(-24.806 -0.164062 65.0605)"
          fill="#E9E9EE"
        />

        {/* NOTE: 가방 + 헤드셋 */}
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
            d="M113.435 102.536C113.382 102.196 113.335 101.854 113.293 101.51C111.427 85.9134 122.558 71.7566 138.155 69.8902C153.752 68.0239 167.909 79.1548 169.775 94.7518C169.816 95.0958 169.851 95.4391 169.88 95.7816L148.427 98.3487C148.438 98.0067 148.423 97.6596 148.381 97.3096C147.929 93.5285 144.497 90.8301 140.715 91.2826C136.934 91.735 134.236 95.167 134.688 98.9481C134.73 99.2981 134.798 99.6389 134.889 99.9687L113.435 102.536Z"
            fill="#FF6C3E"
          />
          <path
            d="M162.358 27.7431C141.524 21.5299 124.066 28.1178 117.941 32.1884L116.95 28.7216L142.019 15.6693L169.849 19.2956L192.797 36.8208L197.422 55.8914C194.415 49.0975 183.192 33.9563 162.358 27.7431Z"
            fill="#626273"
          />
          <rect
            width="15.1768"
            height="61.1002"
            rx="7.58842"
            transform="matrix(0.981311 -0.192428 0.275284 0.961363 92.1875 60.918)"
            fill="#626273"
          />
          <rect
            width="15.1768"
            height="61.1002"
            rx="7.58842"
            transform="matrix(-0.715619 -0.698491 -0.756886 0.653547 202.844 93.9199)"
            fill="#626273"
          />
          <rect
            x="100.086"
            y="50.0645"
            width="4.0591"
            height="12.6536"
            rx="2.02955"
            transform="rotate(16.6058 100.086 50.0645)"
            fill="#626273"
          />
          <rect
            width="4.0591"
            height="12.6536"
            rx="2.02955"
            transform="matrix(-0.958294 -0.285785 -0.285785 0.958294 202.188 80.5137)"
            fill="#626273"
          />
          <rect
            width="13.898"
            height="61.1002"
            rx="6.94901"
            transform="matrix(0.981311 -0.192428 0.275284 0.961363 107.094 57.9961)"
            fill="#464656"
          />
          <rect
            width="13.898"
            height="61.1002"
            rx="6.94901"
            transform="matrix(-0.715619 -0.698491 -0.756886 0.653547 191.977 83.3105)"
            fill="#464656"
          />
          <path
            d="M98.8047 48.7793L106.415 51.0489V51.0489C105.926 52.6904 104.198 53.6243 102.557 53.1347L100.891 52.6379C99.249 52.1483 98.3152 50.4208 98.8047 48.7793V48.7793Z"
            fill="#626273"
          />
          <path
            d="M203.938 80.1348L196.327 77.8651V77.8651C195.837 79.5066 196.771 81.2342 198.413 81.7237L200.079 82.2206C201.72 82.7101 203.448 81.7763 203.938 80.1348V80.1348Z"
            fill="#626273"
          />
          <path
            d="M163.514 20.0802C130.504 10.2359 111.773 36.531 106.396 51.0611L98.7972 48.7948C103.98 32.6493 128.774 5.04674 164.794 15.7887C205.38 27.8924 207.877 63.6388 203.934 80.1541L196.324 77.8847C197.924 72.5203 204.777 32.3856 163.514 20.0802Z"
            fill="#464656"
          />
          <rect
            x="67.9766"
            y="107.977"
            width="147.383"
            height="110.537"
            rx="17.2378"
            transform="rotate(-6.82359 67.9766 107.977)"
            fill="white"
          />
          <mask
            id="mask0_3451_72798"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="69"
            y="92"
            width="157"
            height="124"
          >
            <rect
              x="67.9766"
              y="107.977"
              width="147.383"
              height="110.537"
              rx="17.2378"
              transform="rotate(-6.82359 67.9766 107.977)"
              fill="#FF6C3E"
            />
          </mask>
          <g mask="url(#mask0_3451_72798)">
            <g filter="url(#filter0_f_3451_72798)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M154.168 97.6636L178.765 94.7203L150.992 118.701C148.088 121.209 143.506 121.069 140.76 118.389C138.013 115.708 138.142 111.502 141.047 108.993L154.168 97.6636ZM119.632 101.796L133.559 100.13L135.635 107.381C136.691 111.07 134.495 114.66 130.729 115.398C126.963 116.137 123.053 113.744 121.997 110.055L119.632 101.796ZM119.622 101.797L104.414 103.617L106.918 112.361C108.072 116.39 112.341 119.003 116.454 118.196C120.566 117.39 122.965 113.47 121.811 109.441L119.622 101.797ZM199.464 92.3915C199.892 94.704 199.096 97.1578 197.103 98.8792L162.344 128.892C159.172 131.631 154.169 131.479 151.17 128.551C148.171 125.624 148.311 121.03 151.483 118.291L178.784 94.718L197.201 92.5142C197.962 92.4232 198.718 92.3832 199.464 92.3915Z"
                fill="#FF6C3E"
              />
            </g>
          </g>
          <rect
            x="67.9766"
            y="107.977"
            width="147.383"
            height="110.537"
            rx="17.2378"
            transform="rotate(-6.82359 67.9766 107.977)"
            fill="#FF6C3E"
            fillOpacity="0.74"
          />
          <mask
            id="mask1_3451_72798"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="69"
            y="92"
            width="157"
            height="124"
          >
            <rect
              x="67.9766"
              y="107.977"
              width="147.383"
              height="110.537"
              rx="17.2378"
              transform="rotate(-6.82359 67.9766 107.977)"
              fill="#FF916F"
            />
          </mask>
          <g mask="url(#mask1_3451_72798)">
            <rect
              x="72.8984"
              y="149.135"
              width="147.383"
              height="75.9943"
              transform="rotate(-6.82359 72.8984 149.135)"
              fill="#FF6C3E"
            />
          </g>
        </m.g>

        {/* NOTE: 가방 아래 원 */}
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
          cx="148"
          cy="236.003"
          rx="79"
          ry="8.38548"
          fill="#C7C7D0"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_3451_72798"
          x="101.414"
          y="89.3906"
          width="101.164"
          height="44.4609"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_3451_72798" />
        </filter>
        <clipPath id="clip0_3451_72798">
          <rect width="248" height="258" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
