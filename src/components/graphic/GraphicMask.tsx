import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicMask = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2511_78340)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.89322 7.63515C4.9555 6.92038 6.21078 6.64107 7.04167 6.57227L7.1203 7.52186C6.3929 7.58209 5.31074 7.82981 4.42515 8.42569C3.56133 9.00693 2.88253 9.91567 2.88253 11.3646C2.88253 12.5991 3.54994 13.5428 4.44198 14.2008C5.34538 14.8671 6.42007 15.193 7.09009 15.2059L7.07188 16.1585C6.18361 16.1415 4.92086 15.738 3.87639 14.9676C2.82057 14.1888 1.92969 12.9887 1.92969 11.3646C1.92969 9.55009 2.80918 8.36457 3.89322 7.63515Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.9662 7.63515C20.9039 6.92038 19.6486 6.64107 18.8177 6.57227L18.7391 7.52186C19.4665 7.58209 20.5486 7.82981 21.4342 8.42569C22.298 9.00693 22.9768 9.91567 22.9768 11.3646C22.9768 12.5991 22.3094 13.5428 21.4174 14.2008C20.514 14.8671 19.4393 15.193 18.7693 15.2059L18.7875 16.1585C19.6758 16.1415 20.9385 15.738 21.983 14.9676C23.0388 14.1888 23.9297 12.9887 23.9297 11.3646C23.9297 9.55009 23.0502 8.36457 21.9662 7.63515Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M20.8053 5.77868C14.1293 4.73641 8.0708 5.25776 5.19601 5.76272C4.75491 5.8402 4.44531 6.22839 4.44531 6.67623V15.9568C4.44531 16.3726 4.71486 16.7403 5.11132 16.8655L11.566 18.903C12.7293 19.2703 13.9797 19.2558 15.1342 18.8616L20.9515 16.8754C21.3372 16.7437 21.5965 16.3813 21.5965 15.9737V6.71069C21.5965 6.24739 21.263 5.85015 20.8053 5.77868Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <mask id="mask0_2511_78340" mask="alpha" maskUnits="userSpaceOnUse" x="4" y="5" width="18" height="15">
          <path
            d="M20.8053 5.77868C14.1293 4.73641 8.0708 5.25776 5.19601 5.76272C4.75491 5.8402 4.44531 6.22839 4.44531 6.67623V15.9568C4.44531 16.3726 4.71486 16.7403 5.11132 16.8655L11.566 18.903C12.7293 19.2703 13.9797 19.2558 15.1342 18.8616L20.9515 16.8754C21.3372 16.7437 21.5965 16.3813 21.5965 15.9737V6.71069C21.5965 6.24739 21.263 5.85015 20.8053 5.77868Z"
            fill={isAct ? theme.colors.primary : theme.colors.gray3}
          />
        </mask>
        <g mask="url(#mask0_2511_78340)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.3125 17.5584L5.3125 5.32031L6.26534 5.32031L6.26534 17.5584L5.3125 17.5584Z"
            fill={isAct ? theme.colors.secondary : theme.colors.gray2}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.8359 17.5584L19.8359 5.32031L20.7888 5.32031L20.7888 17.5584L19.8359 17.5584Z"
            fill={isAct ? theme.colors.secondary : theme.colors.gray2}
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.2525 9.19112H5.78125V8.23828H20.2525V9.19112Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.3423 11.7438C18.8786 12.0126 15.3353 12.5556 12.9312 12.5556C10.5259 12.5556 7.10097 12.0123 5.69531 11.7431L5.87452 10.8073C7.26783 11.0741 10.6199 11.6028 12.9312 11.6028C15.2437 11.6028 18.7157 11.0738 20.1701 10.8066L20.3423 11.7438Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.5225 14.2792C19.2698 14.7884 16.026 15.8031 12.9883 15.8031C9.94892 15.8031 6.82219 14.7875 5.625 14.2759L5.99944 13.3997C7.12479 13.8807 10.1201 14.8502 12.9883 14.8502C15.8583 14.8502 18.9746 13.8798 20.1636 13.3965L20.5225 14.2792Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
      </g>
      <defs>
        <clipPath id="clip0_2511_78340">
          <rect width="22" height="13.9925" fill="white" transform="translate(1.92969 5.17578)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicMask;
