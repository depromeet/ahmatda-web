import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { isProd } from '../../utils/utils';

import { gaPageview } from '@/lib/gtag';
import { mixpanelTrack } from '@/lib/mixpanel';

const useTrackPageView = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gaPageview(url);
      mixpanelTrack('Page view', { url });
    };

    if (isProd(process.env.NODE_ENV)) {
      router.events.on('routeChangeComplete', handleRouteChange);
    }
    return () => {
      if (isProd(process.env.NODE_ENV)) {
        router.events.off('routeChangeComplete', handleRouteChange);
      }
    };
  }, [router.events]);
};

export default useTrackPageView;
