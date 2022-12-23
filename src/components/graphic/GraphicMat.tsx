import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicMat = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <path
        d="M18.1496 1.17188H6.10938C5.55709 1.17188 5.10938 1.61959 5.10938 2.17187V11.1032C5.10938 11.6934 5.58784 12.1719 6.17805 12.1719C6.47316 12.1719 6.71239 12.4111 6.71239 12.7062V22.1719C6.71239 22.7242 7.1601 23.1719 7.71239 23.1719H19.8079C20.3602 23.1719 20.8079 22.7242 20.8079 22.1719V12.5035C20.8079 12.0456 20.4366 11.6744 19.9787 11.6744C19.5208 11.6744 19.1496 11.3032 19.1496 10.8452V2.17188C19.1496 1.61959 18.7019 1.17188 18.1496 1.17188Z"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <rect
        x="5.10938"
        y="3.32812"
        width="14.0955"
        height="1.54774"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <rect
        x="6.71094"
        y="20.2422"
        width="14.0955"
        height="1.54774"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
    </Svg>
  );
};

export default GraphicMat;
