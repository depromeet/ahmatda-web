import { useState } from 'react';

import postAppMessage from '../postAppMessage';
import useListeningAppMessage from '../useListeningAppMessage';

import useDidMount from '@/hooks/life-cycle/useDidMount';

const useAppVersionBridge = () => {
  const [appVersion, setAppVersion] = useState<string | null>(null);

  useListeningAppMessage({
    targetType: 'APP_VERSION',
    handler: ({ data }) => {
      console.error(data);
      setAppVersion(data);
    },
  });

  useDidMount(() => {
    postAppMessage<undefined>({ type: 'APP_VERSION', data: undefined });
  });

  return { appVersion };
};

export default useAppVersionBridge;
