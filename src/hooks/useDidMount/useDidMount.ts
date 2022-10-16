import { EffectCallback, useEffect, useRef } from 'react';

const useDidMount = (effectCallback: EffectCallback) => {
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    if (didMountRef.current) return;
    didMountRef.current = true;
    effectCallback();
  }, []);
};

export default useDidMount;
