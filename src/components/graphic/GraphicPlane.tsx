import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicPlane = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8106 3.47801C4.62139 3.16368 4.72282 2.75548 5.03715 2.56627L6.27951 1.81845C6.47974 1.69792 6.72857 1.69148 6.93476 1.80147L15.5621 6.40349L15.5711 6.40835L18.9275 4.38799C20.4992 3.44194 22.5402 3.94911 23.4862 5.52078C24.4323 7.09245 23.9251 9.13346 22.3534 10.0795L8.69378 18.3018C7.12211 19.2478 5.0811 18.7406 4.13505 17.169C4.12202 17.1473 4.10927 17.1256 4.09679 17.1038L0.709995 11.4773C0.520786 11.163 0.622219 10.7548 0.936554 10.5655L2.23141 9.78612C2.40246 9.68316 2.61075 9.66259 2.79864 9.7301L7.226 11.321C7.26222 11.334 7.29704 11.35 7.33011 11.3689L8.96723 10.3834L4.8106 3.47801Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2497 4.32708C22.616 4.52945 22.9477 4.80315 23.2219 5.14249L19.7784 7.21526C19.4945 7.38616 19.1258 7.29454 18.9549 7.01064C18.784 6.72673 18.8757 6.35805 19.1596 6.18715L22.2497 4.32708Z"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <rect
        x="15.7998"
        y="8.20947"
        width="2.65723"
        height="1.2"
        rx="0.6"
        transform="rotate(-31.0453 15.7998 8.20947)"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <rect
        x="12.9536"
        y="9.92188"
        width="2.65723"
        height="1.2"
        rx="0.6"
        transform="rotate(-31.0453 12.9536 9.92188)"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <rect
        x="1.2002"
        y="20.3999"
        width="22.8"
        height="2.4"
        rx="1.2"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
    </Svg>
  );
};

export default GraphicPlane;
