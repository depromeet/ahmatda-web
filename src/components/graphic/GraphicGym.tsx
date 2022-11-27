import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicGym = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <rect
        width="11.2338"
        height="3.06377"
        rx="0.578947"
        transform="matrix(0.706707 -0.707506 0.707451 0.706763 7.45703 14.3774)"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <rect
        width="4.08503"
        height="13.2763"
        rx="2.04252"
        transform="matrix(0.706707 -0.707506 0.707451 0.706763 1.31787 13.2959)"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <rect
        width="4.08503"
        height="13.2763"
        rx="2.04252"
        transform="matrix(-0.706707 0.707506 -0.707451 -0.706763 22.6821 10.7036)"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <rect
        width="3.06377"
        height="8.17006"
        rx="1.53189"
        transform="matrix(0.706707 -0.707506 0.707451 0.706763 1 17.2256)"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <rect
        width="3.06377"
        height="8.17006"
        rx="1.53189"
        transform="matrix(-0.706707 0.707506 -0.707451 -0.706763 23 6.77441)"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
    </Svg>
  );
};

export default GraphicGym;
