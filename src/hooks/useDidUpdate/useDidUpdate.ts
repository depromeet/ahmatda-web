import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const useDidUpdate = (callback: EffectCallback, dependencyList: DependencyList) => {
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    callback();
  }, [...dependencyList]);
};

export default useDidUpdate;
