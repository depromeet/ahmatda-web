import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicPill = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2511_78421)">
        <rect
          x="16.8125"
          y="0.914062"
          width="8.80016"
          height="22"
          rx="4.40008"
          transform="rotate(40 16.8125 0.914062)"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M9.80469 9.27148L16.546 14.9281L12.3037 19.9839C10.7416 21.8455 7.96625 22.0883 6.10468 20.5263C4.24312 18.9643 4.00031 16.1889 5.56234 14.3273L9.80469 9.27148Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
      </g>
      <defs>
        <clipPath id="clip0_2511_78421">
          <rect width="8.80691" height="22" fill="white" transform="translate(16.8125 0.914062) rotate(40)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicPill;
