import { ChangeEvent, Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

interface DebounceOption {
  /**
   * debounce를 사용할 것인지 정의해요
   *
   * @default false
   */
  useDebounce?: boolean;
  /**
   * debounce가 갱신될 ms 단위 시간이에요
   *
   * @default 150
   */
  debounceTimeout?: number;
}

interface PropsWhenString extends DebounceOption {
  /**
   * value, debouncedValue의 초기값이에요
   */
  initialValue: string;
}

interface PropsWhenGeneric<T> extends DebounceOption {
  /**
   * value, debouncedValue의 초기값이에요
   */
  initialValue: T;
  /**
   * onChange의 value의 타입을 변환해 setStating할 parser에요
   *
   * @example
   * ```tsx
   * const { value, onChange } = useInput({ initialValue: 1, parser: Number });
   * ```
   *
   */
  parser?: (value: string) => T;
}

type Props<T> = PropsWhenString & PropsWhenGeneric<T>;

interface Return<T> {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  /**
   * debounce에 의해 갱신된 value에요
   *
   * `useDebounce`가 `true`로 설정되어 있어야 갱신돼요
   */
  debouncedValue: T;
  /**
   * input의 onChange 핸들러에요
   *
   * @example
   * ```tsx
   * <input value={value} onChange={onChange} />
   * ```
   */
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
