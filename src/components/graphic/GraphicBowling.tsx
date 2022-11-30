import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicBowling = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <circle cx="12" cy="12" r="11" fill={isAct ? theme.colors.primary : theme.colors.gray3} />
      <circle cx="13.3301" cy="9.9502" r="1.03125" fill={isAct ? theme.colors.secondary : theme.colors.gray2} />
      <circle cx="16.3574" cy="8.20312" r="1.03125" fill={isAct ? theme.colors.secondary : theme.colors.gray2} />
      <circle cx="13.3301" cy="6.39941" r="1.03125" fill={isAct ? theme.colors.secondary : theme.colors.gray2} />
    </Svg>
  );
};

export default GraphicBowling;
