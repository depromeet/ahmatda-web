import { DependencyList, useEffect, useRef } from 'react';

const useDidUpdate = (callback: VoidFunction, dependencyList: DependencyList) => {
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
