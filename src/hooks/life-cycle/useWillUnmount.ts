import { useEffect } from 'react';

const useWillUnmount = (callback: VoidFunction) => {
  useEffect(() => {
    return callback;
  }, []);
};

export default useWillUnmount;
