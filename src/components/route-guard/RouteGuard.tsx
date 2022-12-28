import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import FixedSpinner from '../loading/FixedSpinner';
import LoadingHandler from '../loading/LoadingHandler';

import useCheckUserToken from './useCheckUserToken';

import useDidMount from '@/hooks/life-cycle/useDidMount';

const NOT_GUARDED_ROUTES = ['/onboard/step1', '/onboard/step2', '/onboard/step3', '/onboard/step4'];

const RouteGuard: FC<PropsWithChildren> = ({ children }) => {
  const { isTokenRegistered, isLoading } = useCheckUserToken();
  const [isRouteGuardPassed, setIsRouteGuardPassed] = useState<boolean>(false);
  const router = useRouter();

  const routeCheck = useCallback(
    (asPath: string) => {
      if (NOT_GUARDED_ROUTES.includes(asPath)) {
        setIsRouteGuardPassed(true);
        return;
      }

      if (isLoading) {
        return;
      }

      if (isTokenRegistered) {
        setIsRouteGuardPassed(true);
        return;
      }

      router.replace('/onboard/step1');
    },
    [isLoading],
  );

  useEffect(() => {
    routeCheck(router.asPath);
  }, [isLoading]);

  useDidMount(() => {
    router.events.on('beforeHistoryChange', routeCheck);
    return () => {
      router.events.off('beforeHistoryChange', routeCheck);
    };
  });

  return (
    <LoadingHandler isLoading={!isRouteGuardPassed} fallback={<FixedSpinner />}>
      {children}
    </LoadingHandler>
  );
};

export default RouteGuard;
