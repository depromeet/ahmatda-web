import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicBus = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g>
        <rect
          x="2.22217"
          y="1"
          width="19.5556"
          height="19.5556"
          rx="3.66667"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <rect
          width="19.5556"
          height="4.88889"
          transform="translate(2.22217 15.6665)"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <circle cx="7.11089" cy="18.1109" r="1.22222" fill={isAct ? theme.colors.secondary : theme.colors.gray2} />
        <circle cx="16.8887" cy="18.1109" r="1.22222" fill={isAct ? theme.colors.secondary : theme.colors.gray2} />
        <path
          d="M4.6665 5.88873C4.6665 5.21371 5.21371 4.6665 5.88873 4.6665H18.1109C18.786 4.6665 19.3332 5.21371 19.3332 5.88873V13.2221H4.6665V5.88873Z"
          fill="white"
        />
      </g>
      <path
        d="M5.88867 20.5557H8.33312V21.7779C8.33312 22.4529 7.78591 23.0001 7.11089 23.0001C6.43588 23.0001 5.88867 22.4529 5.88867 21.7779V20.5557Z"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <path
        d="M15.6665 20.5557H18.1109V21.7779C18.1109 22.4529 17.5637 23.0001 16.8887 23.0001C16.2137 23.0001 15.6665 22.4529 15.6665 21.7779V20.5557Z"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
    </Svg>
  );
};

export default GraphicBus;
