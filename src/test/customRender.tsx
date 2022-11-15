import { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import MockTheme from './MockTheme';
import ReactQueryWrapper from './ReactQueryWrapper';

import theme from '@/styles/theme';

const RenderWithAllProviders = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryWrapper>
      <MockTheme theme={theme}>{children}</MockTheme>
    </ReactQueryWrapper>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: RenderWithAllProviders, ...options });
};

export default customRender;
