import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicCurlingIron = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2627_61658)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5989 14.1807C19.6792 13.8352 20.0248 13.6202 20.3708 13.7004C20.8354 13.8081 21.5051 14.0877 22.0914 14.5901C22.6886 15.102 23.2185 15.8643 23.3177 16.9144C23.4447 18.2584 22.769 19.4194 21.4392 19.9382C20.1657 20.435 18.381 20.3146 16.2342 19.4406C14.8388 18.8725 13.0285 18.5208 11.6088 18.6756C10.8998 18.7528 10.3527 18.9492 9.9946 19.2424C9.66232 19.5144 9.44255 19.9086 9.44255 20.5316C9.44255 20.8862 9.1546 21.1737 8.7994 21.1737C8.4442 21.1737 8.15625 20.8862 8.15625 20.5316C8.15625 19.5491 8.52977 18.7808 9.17903 18.2493C9.80244 17.7389 10.6251 17.4908 11.4692 17.3989C13.1554 17.2151 15.1839 17.626 16.7198 18.2513C18.7133 19.0629 20.1293 19.0704 20.9711 18.742C21.7567 18.4355 22.1111 17.8181 22.0371 17.035C21.9755 16.3834 21.6546 15.9083 21.2535 15.5646C20.8416 15.2116 20.3657 15.0176 20.0799 14.9514C19.7339 14.8712 19.5186 14.5261 19.5989 14.1807Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M3.92956 5.7711C4.0073 5.61167 4.19976 5.54534 4.35945 5.62295L12.7236 9.68823C12.8832 9.76584 12.9497 9.95801 12.8719 10.1174L12.5661 10.7447C12.4884 10.9041 12.2959 10.9705 12.1362 10.8928L3.77212 6.82757C3.61243 6.74996 3.546 6.55779 3.62373 6.39836L3.92956 5.7711Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M2.57293 10.5682C2.53265 10.7409 2.64022 10.9135 2.8132 10.9537L11.8733 13.0599C12.0463 13.1002 12.2192 12.9928 12.2595 12.8201L12.4179 12.1406C12.4582 11.9679 12.3506 11.7953 12.1777 11.7551L3.1175 9.64881C2.94453 9.6086 2.77166 9.716 2.73138 9.8887L2.57293 10.5682Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M4.16381 3.74924C4.31928 3.43037 4.70421 3.29771 5.02358 3.45294L19.1968 10.3417C19.5162 10.4969 19.6491 10.8812 19.4936 11.2001L18.8128 12.5963C18.6574 12.9152 18.2724 13.0479 17.9531 12.8926L3.77982 6.00389C3.46045 5.84866 3.32758 5.46433 3.48305 5.14546L4.16381 3.74924Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M1.48179 12.2867C1.40124 12.6321 1.61638 12.9773 1.96233 13.0577L17.3151 16.6269C17.661 16.7073 18.0067 16.4925 18.0873 16.1471L18.44 14.6347C18.5206 14.2893 18.3054 13.9441 17.9595 13.8636L2.60674 10.2945C2.2608 10.2141 1.91505 10.4289 1.8345 10.7743L1.48179 12.2867Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M20.5935 13.5609C20.5935 14.78 19.6037 15.7682 18.3827 15.7682C17.1617 15.7682 16.1719 14.78 16.1719 13.5609C16.1719 12.3418 17.1617 11.3535 18.3827 11.3535C19.6037 11.3535 20.5935 12.3418 20.5935 13.5609Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
      </g>
      <defs>
        <clipPath id="clip0_2627_61658">
          <rect width="21.9969" height="18.0018" fill="white" transform="translate(1.33594 3.17188)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicCurlingIron;