import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { gaPageview } from '@/lib/analytics/gtag';
import { mixpanelTrack } from '@/lib/analytics/mixpanel';

const useTrackPageView = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gaPageview(url);
      mixpanelTrack('Page view', { url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

export default useTrackPageView;
