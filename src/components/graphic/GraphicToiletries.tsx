import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicToiletries = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2519_61509)">
        <path
          d="M12.0312 4.4075C12.0312 4.0077 12.3894 3.68359 12.8313 3.68359C13.2731 3.68359 13.6313 4.0077 13.6313 4.4075V5.71958C13.6313 6.11939 13.2731 6.44349 12.8313 6.44349C12.3894 6.44349 12.0312 6.11939 12.0312 5.71958V4.4075Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M10.2344 6.20898C10.2344 5.6567 10.7292 5.20898 11.3395 5.20898H14.3293C14.9396 5.20898 15.4344 5.6567 15.4344 6.20898V7.46657C15.4344 8.01885 14.9396 8.46657 14.3293 8.46657H11.3395C10.7292 8.46657 10.2344 8.01885 10.2344 7.46657V6.20898Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M6.83594 10.9707C6.83594 9.31385 8.32027 7.9707 10.1513 7.9707H15.5206C17.3516 7.9707 18.8359 9.31385 18.8359 10.9707V20.1728C18.8359 21.8296 17.3516 23.1728 15.5206 23.1728H10.1513C8.32027 23.1728 6.83594 21.8296 6.83594 20.1728V10.9707Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0979 2.27947C11.1271 2.26521 11.1598 2.25774 11.1929 2.25774H11.7534C11.7409 2.31788 11.7344 2.37992 11.7344 2.44334V3.58781C11.7344 4.1401 12.2303 4.58781 12.8406 4.58781C13.451 4.58781 13.9469 4.1401 13.9469 3.58781V2.44334C13.9469 2.37992 13.9403 2.31788 13.9278 2.25774H14.3407C14.6721 2.25774 14.9407 2.01466 14.9407 1.71481C14.9407 1.41495 14.6721 1.17188 14.3407 1.17188H11.1929C10.9607 1.17188 10.7321 1.22416 10.5277 1.32402L9.45565 1.84787C9.16408 1.99035 9.05535 2.31973 9.2128 2.58358C9.37025 2.84742 9.73426 2.9458 10.0258 2.80333L11.0979 2.27947Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M16.9609 15.5936C16.9609 17.0928 15.1141 18.3082 12.8359 18.3082C10.5578 18.3082 8.71094 17.0928 8.71094 15.5936C8.71094 14.0943 10.5578 12.8789 12.8359 12.8789C15.1141 12.8789 16.9609 14.0943 16.9609 15.5936Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
      </g>
      <defs>
        <clipPath id="clip0_2519_61509">
          <rect width="12" height="22.0009" fill="white" transform="translate(6.83594 1.17188)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicToiletries;
