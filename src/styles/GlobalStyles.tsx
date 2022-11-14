import React, { ReactElement } from 'react';
import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const setGlobalStyles = css`
  ${emotionNormalize}

  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      sans-serif;
    box-sizing: border-box;
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
  }
`;

const GlobalStyles = (): ReactElement => {
  return <Global styles={setGlobalStyles} />;
};

export default GlobalStyles;
