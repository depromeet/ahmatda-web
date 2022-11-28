import { ChangeEvent, Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';
import { debounce } from 'lodash';

interface DebounceOption {
  useDebounce?: boolean;
  debounceTimeout?: number;
}

interface PropsWhenString extends DebounceOption {
  initialValue: string;
}

interface PropsWhenGeneric<T> extends DebounceOption {
  initialValue: T;
  parser?: (value: string) => T;
}

type Props<T> = PropsWhenString & PropsWhenGeneric<T>;

interface Return<T> {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  debouncedValue: T;
  onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}

function useInput({ initialValue, useDebounce, debounceTimeout }: PropsWhenString): Return<string>;

function useInput<T>({ initialValue, useDebounce, debounceTimeout, parser }: PropsWhenGeneric<T>): Return<T>;

function useInput<T>({ initialValue, useDebounce = false, debounceTimeout = 150, parser }: Props<T>) {
  const [value, setValue] = useState<string | T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<string | T>(initialValue);

  const handleDebounceValue = useMemo(
    () =>
      debounce((changedValue: string | T) => {
        setDebouncedValue(changedValue);
      }, debounceTimeout),
    [],
  );

  const handleChangedValue = useCallback((changedValue: string | T) => {
    setValue(changedValue);
    if (useDebounce) handleDebounceValue(changedValue);
  }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    if (parser) {
      handleChangedValue(parser(e.target.value));
      return;
    }

    handleChangedValue(e.target.value);
  }, []);

  return { value, setValue, debouncedValue, onChange };
}
// const useInput = <T>({
//   initialValue,
//   useDebounce = false,
//   debounceTimeout = 150,
//   parser,
// }: PropsWhenString & PropsWhenGeneric<T>) => {
//   const [value, setValue] = useState<string | T>(initialValue);
//   const [debouncedValue, setDebouncedValue] = useState<string | T>(initialValue);

//   const handleDebounceValue = useMemo(
//     () =>
//       debounce((changedValue: string | T) => {
//         setDebouncedValue(changedValue);
//       }, debounceTimeout),
//     [],
//   );

//   const handleChangedValue = useCallback((changedValue: string | T) => {
//     setValue(changedValue);
//     if (useDebounce) handleDebounceValue(changedValue);
//   }, []);

//   const onChange = useCallback((e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
//     if (parser) {
//       handleChangedValue(parser(e.target.value));
//       return;
//     }

//     handleChangedValue(e.target.value);
//   }, []);

//   return { value, setValue, debouncedValue, onChange };
// };

export default useInput;
