import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicSunglasses = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2627_61588)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.32423 5.91753C7.12881 5.84637 6.91608 5.83791 6.71563 5.89332L3.77971 6.70491C3.24739 6.85206 2.93515 7.40289 3.0823 7.93521C3.22945 8.46753 3.78027 8.77977 4.31259 8.63261L6.94034 7.90621L22.4001 13.5357C22.9191 13.7247 23.493 13.4572 23.6819 12.9382C23.8709 12.4193 23.6034 11.8454 23.0845 11.6564L7.32423 5.91753Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3398 5.96636C18.5352 5.8952 18.748 5.88674 18.9484 5.94215L21.8844 6.75374C22.4167 6.90089 22.7289 7.45171 22.5818 7.98403C22.4346 8.51635 21.8838 8.82859 21.3515 8.68144L18.7237 7.95504L3.26392 13.5846C2.74497 13.7735 2.17109 13.506 1.98212 12.9871C1.79315 12.4681 2.06065 11.8942 2.5796 11.7053L18.3398 5.96636Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <rect
          x="3.45312"
          y="13.084"
          width="7.85156"
          height="4.875"
          rx="2"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <rect
          x="14.3672"
          y="13.084"
          width="7.85156"
          height="4.875"
          rx="2"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M11.3359 13.4043L14.3195 13.3905L14.331 15.2694L11.3474 15.2832L11.3359 13.4043Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M2.64564 12.2148H7.82494L3.60961 13.1668L2.91689 17.3412L1.95374 15.9504C1.87731 15.8401 1.83689 15.7136 1.83684 15.5846L1.83594 12.9223C1.8358 12.5316 2.19836 12.2148 2.64564 12.2148Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.9353 13.3787H5.82106C4.71538 13.3787 3.81905 14.1617 3.81905 15.1275L3.81905 15.9047C3.81905 16.8705 4.71538 17.6534 5.82106 17.6534H8.93531C10.041 17.6534 10.9373 16.8705 10.9373 15.9047V15.1275C10.9373 14.1617 10.041 13.3787 8.9353 13.3787ZM5.82106 12.2129C3.97826 12.2129 2.48438 13.5178 2.48438 15.1275V15.9047C2.48438 17.5144 3.97826 18.8193 5.82106 18.8193H8.93531C10.7781 18.8193 12.272 17.5144 12.272 15.9047V15.1275C12.272 13.5178 10.7781 12.2129 8.9353 12.2129H5.82106Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <rect
          x="4.04688"
          y="13.5312"
          width="6.71875"
          height="4.26562"
          rx="1.75"
          stroke={isAct ? theme.colors.primary : theme.colors.gray3}
          strokeWidth="0.5"
        />
        <path
          d="M23.0262 12.2148H17.8469L22.0623 13.1668L22.755 17.3412L23.7181 15.9504C23.7946 15.8401 23.835 15.7136 23.835 15.5846L23.8359 12.9223C23.8361 12.5316 23.4735 12.2148 23.0262 12.2148Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7366 13.3826H19.8508C20.9565 13.3826 21.8528 14.1656 21.8528 15.1314V15.9086C21.8528 16.8744 20.9565 17.6573 19.8508 17.6573H16.7366C15.6309 17.6573 14.7346 16.8744 14.7346 15.9086V15.1314C14.7346 14.1656 15.6309 13.3826 16.7366 13.3826ZM19.8508 12.2168C21.6936 12.2168 23.1875 13.5217 23.1875 15.1314V15.9086C23.1875 17.5183 21.6936 18.8232 19.8508 18.8232H16.7366C14.8938 18.8232 13.3999 17.5183 13.3999 15.9086V15.1314C13.3999 13.5217 14.8938 12.2168 16.7366 12.2168H19.8508Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <rect
          x="14.9297"
          y="13.4434"
          width="6.71875"
          height="4.26562"
          rx="1.75"
          stroke={isAct ? theme.colors.primary : theme.colors.gray3}
          strokeWidth="0.5"
        />
        <circle cx="3.13587" cy="13.462" r="0.378056" fill={isAct ? theme.colors.secondary : theme.colors.gray2} />
        <circle cx="22.6281" cy="13.462" r="0.378056" fill={isAct ? theme.colors.secondary : theme.colors.gray2} />
      </g>
      <defs>
        <clipPath id="clip0_2627_61588">
          <rect width="22.0972" height="15.3048" fill="white" transform="translate(1.78125 3.51953)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicSunglasses;
