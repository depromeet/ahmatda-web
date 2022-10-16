import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const useDidUpdate = (effectCallback: EffectCallback, dependencyList: DependencyList) => {
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    effectCallback();
  }, [...dependencyList]);
};

export default useDidUpdate;
