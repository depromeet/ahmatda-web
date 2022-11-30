import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicWork = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0736 10.1302C14.3118 10.1302 16.1263 8.31574 16.1263 6.07754C16.1263 3.83933 14.3118 2.0249 12.0736 2.0249C9.83542 2.0249 8.021 3.83933 8.021 6.07754C8.021 8.31574 9.83542 10.1302 12.0736 10.1302ZM12.0738 7.05962C12.6164 7.05962 13.0562 6.61976 13.0562 6.07716C13.0562 5.53456 12.6164 5.0947 12.0738 5.0947C11.5312 5.0947 11.0913 5.53456 11.0913 6.07716C11.0913 6.61976 11.5312 7.05962 12.0738 7.05962Z"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <rect
        x="1.5"
        y="6.2251"
        width="21"
        height="15.75"
        rx="2.45614"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <mask
        id="mask0_1559_49131"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="6"
        width="22"
        height="16"
      >
        <rect x="1.5" y="6.2251" width="21" height="15.75" rx="2.45614" fill="#FF916F" />
      </mask>
      <g mask="url(#mask0_1559_49131)">
        <rect
          x="1.5"
          y="12.1313"
          width="21"
          height="10.8281"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
      </g>
    </Svg>
  );
};

export default GraphicWork;
