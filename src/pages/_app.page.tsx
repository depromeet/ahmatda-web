import { PropsWithChildren, ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { domAnimation, LazyMotion } from 'framer-motion';
import { RecoilRoot } from 'recoil';

import useTrackPageView from '@/hooks/analytics/useTrackPageView';
import GlobalStyles from '@/styles/GlobalStyles';
import lightTheme from '@/styles/theme';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component: AppComponent, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  useTrackPageView();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <ThemeProvider theme={lightTheme}>
            <LazyMotion strict features={domAnimation}>
              <DefaultLayout>
                <GlobalStyles />
                <AppComponent {...pageProps} />
              </DefaultLayout>
            </LazyMotion>
          </ThemeProvider>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

const LayoutWrapper = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth};
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.size.layoutPadding};
  margin: 0 auto;
`;
