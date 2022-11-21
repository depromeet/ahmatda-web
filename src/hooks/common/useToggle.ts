import { Dispatch, SetStateAction, useCallback, useState } from 'react';

/**
 *
 * @param defaultValue
 * true | false
 *
 * @returns [value, setValue, toggle]
 *
 * @example
 * ```
 * const [value, _, toggle] = useToggle(false);
 * const [value, setValue, toggle] = useToggle(false);
 * ```
 */
const useToggle = (defaultValue: boolean): [boolean, Dispatch<SetStateAction<boolean>>, VoidFunction] => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, setValue, toggle];
};

export default useToggle;
