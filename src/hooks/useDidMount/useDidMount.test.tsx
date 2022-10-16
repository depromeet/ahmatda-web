import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useDidMount from './useDidMount';

describe('useDidMount', () => {
  it('default export이여야 한다', () => {
    expect(useDidMount).toBeDefined();
  });

  it('effectCallback이 실행되어야 한다', () => {
    const effectCallback = jest.fn();
    renderHook(() => useDidMount(effectCallback));
    expect(effectCallback).toBeCalled();
  });

  it('rerender 시 1번 실행되어야 한다', () => {
    const effectCallback = jest.fn();
    const { rerender } = renderHook(() => useDidMount(effectCallback));
    rerender();
    expect(effectCallback).toBeCalledTimes(1);
  });

  describe('useDidMount Component', () => {
    const STATE_CHANGE_BUTTON_TEXT = 'change';
    const mockCallback = jest.fn();

    const App = () => {
      const [_, setState] = useState(false);

      useDidMount(mockCallback);
      return (
        <div>
          <button type="button" onClick={() => setState((prev) => !prev)}>
            {STATE_CHANGE_BUTTON_TEXT}
          </button>
        </div>
      );
    };

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('mockCallback이 실행되어야 한다', () => {
      render(<App />);
      expect(mockCallback).toBeCalledTimes(1);
    });

    it('mockCallback은 상태가 변해도 1번 실행되어야 한다', () => {
      render(<App />);
      expect(mockCallback).toBeCalledTimes(1);
      const setStateButton = screen.getByText(STATE_CHANGE_BUTTON_TEXT);
      fireEvent.click(setStateButton);
      expect(mockCallback).toBeCalledTimes(1);
    });
  });
});
