import { FC, Fragment, PropsWithChildren, ReactNode, useId } from 'react';
import { AnimatePresence } from 'framer-motion';

interface Props {
  isLoading: boolean;
  fallback: ReactNode;
}

/**
 * @example
 * ```tsx
 * const {data, isLoading} = useQuery();
 * 
 * return (
 *  <LoadingHandler isLoading={isLoading} fallback={<SomeSpinner />}>
 *    {data}
 *  </LoadingHandler>
 * )
   ```
 */
const LoadingHandler: FC<PropsWithChildren<Props>> = ({ children, isLoading, fallback }) => {
  const id = useId();

  return (
    <AnimatePresence mode="wait">{isLoading ? <Fragment key={id}>{fallback}</Fragment> : children}</AnimatePresence>
  );
};

export default LoadingHandler;
