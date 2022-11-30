import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicEtc = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <path
        d="M3.89209 10.8859L9.74812 17.5386C9.77961 17.5744 9.83511 17.5751 9.86752 17.5402L20.1077 6.5"
        stroke={isAct ? theme.colors.secondary : theme.colors.gray2}
        strokeWidth="5.63321"
        strokeLinecap="round"
      />
      <path
        d="M9.80762 17.6055L20.1083 6.5"
        stroke={isAct ? theme.colors.primary : theme.colors.gray3}
        strokeWidth="5.63321"
        strokeLinecap="round"
      />
      <circle cx="9.80699" cy="17.5648" r="0.764507" fill="white" />
    </Svg>
  );
};

export default GraphicEtc;
