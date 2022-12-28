import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicPassport = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2627_61423)">
        <rect
          x="4.25"
          y="1.81641"
          width="17.3684"
          height="22"
          rx="2"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7458 7.5802C16.8204 7.72159 16.7663 7.8967 16.6249 7.97132C13.3876 9.67985 10.4888 8.69156 9.41469 7.95394C9.2829 7.86343 9.24944 7.68323 9.33994 7.55144C9.43045 7.41965 9.61065 7.38619 9.74244 7.47669C10.6706 8.11407 13.3392 9.05078 16.3546 7.45931C16.496 7.38469 16.6711 7.43881 16.7458 7.5802Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2963 7.34878C16.4987 7.24194 16.7495 7.31944 16.8563 7.52188C16.9632 7.72432 16.8857 7.97505 16.6832 8.08189C13.3981 9.81571 10.4495 8.81624 9.34394 8.057C9.15524 7.92742 9.10733 7.6694 9.23691 7.4807C9.3665 7.29201 9.62452 7.24409 9.81321 7.37367C10.7098 7.98939 13.3287 8.915 16.2963 7.34878ZM16.6352 7.63857C16.5928 7.55823 16.4933 7.52748 16.413 7.56988C13.3497 9.18661 10.6314 8.23881 9.67168 7.57976C9.59681 7.52833 9.49442 7.54735 9.44299 7.62223C9.39157 7.69711 9.41059 7.7995 9.48547 7.85092C10.5281 8.56692 13.3772 9.54403 16.5665 7.8608C16.6469 7.8184 16.6776 7.7189 16.6352 7.63857Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.32456 14.8339C9.24994 14.6925 9.30406 14.5174 9.44545 14.4427C12.6827 12.7342 15.5815 13.7225 16.6556 14.4601C16.7874 14.5506 16.8209 14.7308 16.7304 14.8626C16.6399 14.9944 16.4597 15.0279 16.3279 14.9374C15.3998 14.3 12.7311 13.3633 9.71568 14.9548C9.57429 15.0294 9.39918 14.9753 9.32456 14.8339Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.77401 15.0653C9.57157 15.1721 9.32084 15.0946 9.214 14.8922C9.10715 14.6897 9.18465 14.439 9.38709 14.3322C12.6722 12.5983 15.6208 13.5978 16.7264 14.3571C16.9151 14.4866 16.963 14.7447 16.8334 14.9334C16.7038 15.1221 16.4458 15.17 16.2571 15.0404C15.3605 14.4247 12.7416 13.4991 9.77401 15.0653ZM9.4351 14.7755C9.47749 14.8558 9.57699 14.8866 9.65732 14.8442C12.7206 13.2275 15.439 14.1753 16.3986 14.8343C16.4735 14.8857 16.5759 14.8667 16.6273 14.7918C16.6787 14.717 16.6597 14.6146 16.5848 14.5631C15.5422 13.8471 12.6931 12.87 9.50378 14.5533C9.42345 14.5957 9.3927 14.6952 9.4351 14.7755Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8777 6.28473C12.9483 6.42816 12.8893 6.60168 12.7459 6.67229C12.0613 7.00931 10.5555 8.41116 10.5555 11.2251C10.5555 14.0407 12.0639 15.5445 12.7583 15.9291C12.8981 16.0065 12.9487 16.1827 12.8712 16.3226C12.7938 16.4624 12.6176 16.513 12.4778 16.4356C11.6042 15.9517 9.97656 14.2569 9.97656 11.2251C9.97656 8.19164 11.6067 6.58779 12.4902 6.15288C12.6336 6.08227 12.8071 6.1413 12.8777 6.28473Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4349 6.04076C12.6403 5.93965 12.8888 6.02418 12.9899 6.22955C13.091 6.43492 13.0064 6.68336 12.8011 6.78447C12.1594 7.10035 10.6805 8.45859 10.6805 11.2251C10.6805 13.994 12.1631 15.4566 12.8188 15.8198C13.0191 15.9307 13.0915 16.1829 12.9806 16.3832C12.8697 16.5834 12.6174 16.6558 12.4172 16.5449C11.5049 16.0397 9.85156 14.3036 9.85156 11.2251C9.85156 8.14427 11.5086 6.49681 12.4349 6.04076ZM12.7656 6.33997C12.7255 6.25847 12.6269 6.22493 12.5454 6.26505C11.7049 6.67883 10.1016 8.23906 10.1016 11.2251C10.1016 14.2102 11.7034 15.8638 12.5383 16.3262C12.6178 16.3702 12.7179 16.3415 12.7619 16.262C12.8059 16.1826 12.7772 16.0825 12.6977 16.0385C11.9646 15.6324 10.4305 14.0874 10.4305 11.2251C10.4305 8.36379 11.9632 6.91833 12.6907 6.56017C12.7722 6.52005 12.8057 6.42146 12.7656 6.33997Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.1535 6.19489C13.0829 6.33832 13.142 6.51184 13.2854 6.58245C13.97 6.91947 15.4757 8.32132 15.4757 11.1352C15.4757 13.9508 13.9674 15.4547 13.273 15.8392C13.1331 15.9167 13.0826 16.0929 13.16 16.2327C13.2375 16.3726 13.4136 16.4232 13.5535 16.3457C14.4271 15.8619 16.0547 14.167 16.0547 11.1352C16.0547 8.1018 14.4245 6.49794 13.5411 6.06303C13.3977 5.99242 13.2241 6.05145 13.1535 6.19489Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5963 5.95092C13.3909 5.84981 13.1425 5.93433 13.0414 6.1397C12.9403 6.34507 13.0248 6.59352 13.2302 6.69462C13.8718 7.01051 15.3507 8.36875 15.3507 11.1353C15.3507 13.9042 13.8681 15.3668 13.2124 15.7299C13.0122 15.8408 12.9398 16.0931 13.0507 16.2933C13.1616 16.4936 13.4138 16.566 13.6141 16.4551C14.5263 15.9498 16.1797 14.2137 16.1797 11.1353C16.1797 8.05443 14.5226 6.40696 13.5963 5.95092ZM13.2657 6.25012C13.3058 6.16863 13.4044 6.13509 13.4859 6.17521C14.3264 6.58898 15.9297 8.14922 15.9297 11.1353C15.9297 14.1204 14.3278 15.774 13.4929 16.2364C13.4135 16.2804 13.3134 16.2517 13.2694 16.1722C13.2253 16.0927 13.2541 15.9926 13.3336 15.9486C14.0667 15.5426 15.6007 13.9975 15.6007 11.1353C15.6007 8.27395 14.0681 6.82849 13.3406 6.47033C13.2591 6.43021 13.2256 6.33162 13.2657 6.25012Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9301 6.08789C13.09 6.08789 13.2196 6.21749 13.2196 6.37736V16.0385C13.2196 16.1984 13.09 16.328 12.9301 16.328C12.7702 16.328 12.6406 16.1984 12.6406 16.0385V6.37736C12.6406 6.21749 12.7702 6.08789 12.9301 6.08789Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5156 6.37736C12.5156 6.14846 12.7012 5.96289 12.9301 5.96289C13.159 5.96289 13.3446 6.14846 13.3446 6.37736V16.0385C13.3446 16.2675 13.159 16.453 12.9301 16.453C12.7012 16.453 12.5156 16.2675 12.5156 16.0385V6.37736ZM12.9301 6.21289C12.8393 6.21289 12.7656 6.28653 12.7656 6.37736V16.0385C12.7656 16.1294 12.8393 16.203 12.9301 16.203C13.0209 16.203 13.0946 16.1294 13.0946 16.0385V6.37736C13.0946 6.28653 13.0209 6.21289 12.9301 6.21289Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.0469 11.2074C18.0469 11.3673 17.9173 11.4969 17.7574 11.4969L8.09622 11.4969C7.93635 11.4969 7.80674 11.3673 7.80674 11.2074C7.80674 11.0476 7.93635 10.918 8.09622 10.918L17.7574 10.918C17.9173 10.918 18.0469 11.0476 18.0469 11.2074Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.7574 10.793C17.9863 10.793 18.1719 10.9785 18.1719 11.2074C18.1719 11.4363 17.9863 11.6219 17.7574 11.6219L8.09622 11.6219C7.86731 11.6219 7.68174 11.4363 7.68174 11.2074C7.68174 10.9785 7.86731 10.793 8.09622 10.793L17.7574 10.793ZM17.9219 11.2074C17.9219 11.1166 17.8482 11.043 17.7574 11.043L8.09622 11.043C8.00538 11.043 7.93174 11.1166 7.93174 11.2074C7.93174 11.2983 8.00538 11.3719 8.09622 11.3719L17.7574 11.3719C17.8482 11.3719 17.9219 11.2983 17.9219 11.2074Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9285 15.9655C15.5464 15.9655 17.6686 13.8432 17.6686 11.2253C17.6686 8.60743 15.5464 6.4852 12.9285 6.4852C10.3106 6.4852 8.18832 8.60743 8.18832 11.2253C8.18832 13.8432 10.3106 15.9655 12.9285 15.9655ZM12.9285 16.5444C15.8661 16.5444 18.2475 14.163 18.2475 11.2253C18.2475 8.28768 15.8661 5.90625 12.9285 5.90625C9.99081 5.90625 7.60938 8.28768 7.60938 11.2253C7.60938 14.163 9.99081 16.5444 12.9285 16.5444Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9285 6.03125C10.0598 6.03125 7.73438 8.35672 7.73438 11.2253C7.73438 14.0939 10.0598 16.4194 12.9285 16.4194C15.7971 16.4194 18.1225 14.0939 18.1225 11.2253C18.1225 8.35672 15.7971 6.03125 12.9285 6.03125ZM7.48438 11.2253C7.48438 8.21865 9.92177 5.78125 12.9285 5.78125C15.9351 5.78125 18.3725 8.21865 18.3725 11.2253C18.3725 14.232 15.9351 16.6694 12.9285 16.6694C9.92177 16.6694 7.48438 14.232 7.48438 11.2253ZM12.9285 6.6102C10.3796 6.6102 8.31332 8.67646 8.31332 11.2253C8.31332 13.7742 10.3796 15.8405 12.9285 15.8405C15.4773 15.8405 17.5436 13.7742 17.5436 11.2253C17.5436 8.67646 15.4773 6.6102 12.9285 6.6102ZM8.06332 11.2253C8.06332 8.53839 10.2415 6.3602 12.9285 6.3602C15.6154 6.3602 17.7936 8.53839 17.7936 11.2253C17.7936 13.9123 15.6154 16.0905 12.9285 16.0905C10.2415 16.0905 8.06332 13.9123 8.06332 11.2253Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
      </g>
      <defs>
        <clipPath id="clip0_2627_61423">
          <rect width="17.3684" height="22" fill="white" transform="translate(4.25 1.81641)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicPassport;