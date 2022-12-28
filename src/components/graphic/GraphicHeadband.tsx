import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicHeadband = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2529_61403)">
        <rect
          x="1.89062"
          y="8.17188"
          width="22"
          height="8"
          rx="1"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <rect x="1.89062" y="9.67188" width="22" height="5" fill={isAct ? theme.colors.primary : theme.colors.gray3} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4739 10.812C15.6533 11.022 15.6285 11.3376 15.4185 11.5169C14.6671 12.1587 14.0819 12.6323 13.6077 12.9588C13.141 13.28 12.7328 13.4942 12.3402 13.5598C11.9098 13.6317 11.5587 13.5168 11.2429 13.3194C11.0127 13.1756 10.773 12.9677 10.5284 12.7556C10.4733 12.7078 10.418 12.6599 10.3624 12.6123C10.1526 12.4328 10.1281 12.1172 10.3076 11.9074C10.4871 11.6975 10.8028 11.673 11.0126 11.8525C11.0853 11.9147 11.1518 11.9723 11.2134 12.0255C11.4515 12.2314 11.615 12.3728 11.7728 12.4713C11.9374 12.5742 12.0434 12.5956 12.1754 12.5735C12.3453 12.5451 12.6051 12.435 13.0407 12.1351C13.4689 11.8403 14.0204 11.396 14.769 10.7565C14.979 10.5772 15.2946 10.602 15.4739 10.812Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
      </g>
      <defs>
        <clipPath id="clip0_2529_61403">
          <rect width="22" height="8" fill="white" transform="translate(1.89062 8.17188)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicHeadband;
