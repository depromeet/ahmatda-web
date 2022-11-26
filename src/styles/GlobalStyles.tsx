import React, { ReactElement } from 'react';
import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import theme from './theme';

export const setGlobalStyles = css`
  ${emotionNormalize}

  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      sans-serif;
    background-color: ${theme.colors.gray1};
    color: ${theme.colors.black};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :disabled {
    cursor: not-allowed;
  }

  * {
    font-family: inherit;
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none !important;
    }

    -webkit-tap-highlight-color: transparent !important;
    -webkit-touch-callout: none !important;
  }
`;

const GlobalStyles = (): ReactElement => {
  return <Global styles={setGlobalStyles} />;
};

export default GlobalStyles;
