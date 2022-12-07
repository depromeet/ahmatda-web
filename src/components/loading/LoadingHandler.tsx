import { FC, Fragment, PropsWithChildren, ReactNode, useId } from 'react';
import { AnimatePresence } from 'framer-motion';

interface Props {
  isLoading: boolean;
  loadingComponent: ReactNode;
}

/**
 * @example
 * ```tsx
 * const {data, isLoading} = useQuery();
 * 
 * return (
 *  <LoadingHandler isLoading={isLoading} loadingComponent={<SomeSpinner />}>
 *    {data}
 *  </LoadingHandler>
 * )
   ```
 */
const LoadingHandler: FC<PropsWithChildren<Props>> = ({ children, isLoading, loadingComponent }) => {
  const id = useId();

  return (
    <AnimatePresence mode="wait">
      {isLoading ? <Fragment key={id}>{loadingComponent}</Fragment> : children}
    </AnimatePresence>
  );
};

export default LoadingHandler;
