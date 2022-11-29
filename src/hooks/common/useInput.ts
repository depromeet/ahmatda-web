import { ChangeEvent, Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

interface Props<T> {
  /**
   * value, debouncedValue의 초기값이에요
   */
  initialValue: T;
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
  /**
   * onChange의 value의 타입을 변환해 setStating할 parser에요
   *
   * type이 string이 아닐 시 `required` 해요
   *
   * @example
   * ```tsx
   * const { value, onChange } = useInput({ initialValue: 1, parser: Number });
   * ```
   *
   */
  parser?: (value: string) => T;
}

type PropsWhenNotString<T> = WithRequired<Props<T>, 'parser'>;

interface Return<T> {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  debouncedValue: T;
  onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}

function useInput({ initialValue, useDebounce, debounceTimeout, parser }: Props<string>): Return<string>;

function useInput<T>({ initialValue, useDebounce, debounceTimeout, parser }: PropsWhenNotString<T>): Return<T>;

function useInput<T extends string | number | boolean>({
  initialValue,
  useDebounce = false,
  debounceTimeout = 150,
  parser,
}: Props<T>) {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  const handleDebounceValue = useMemo(
    () =>
      debounce((changedValue: T) => {
        setDebouncedValue(changedValue);
      }, debounceTimeout),
    [],
  );

  const handleChangedValue = useCallback((changedValue: T) => {
    setValue(changedValue);
    if (useDebounce) handleDebounceValue(changedValue);
  }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    if (parser) {
      handleChangedValue(parser(e.target.value));
      return;
    }

    handleChangedValue(e.target.value as T);
  }, []);

  return { value, setValue, debouncedValue, onChange };
}

export default useInput;
