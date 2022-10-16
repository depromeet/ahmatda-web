import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useDidUpdate from './useDidUpdate';

describe('useDidUpdate', () => {
  it('default export이여야 한다', () => {
    expect(useDidUpdate).toBeDefined();
  });

  it('첫 호출시 effectCallback이 실행되면 안된다', () => {
    const mockCallback = jest.fn();
    renderHook(() => useDidUpdate(mockCallback, []));
    expect(mockCallback).not.toBeCalled();
  });

  describe('useDidUpdate Component', () => {
    const STATE_CHANGE_BUTTON_TEXT = 'change';
    const mockCallback = jest.fn();

    const App = () => {
      const [state, setState] = useState<number>(0);

      useDidUpdate(mockCallback, [state]);

      return (
        <div>
          <button type="button" onClick={() => setState((prev) => prev + 1)}>
            {STATE_CHANGE_BUTTON_TEXT}
          </button>
        </div>
      );
    };

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('마운트 시 effectCallback이 실행되면 안된다', () => {
      render(<App />);
      expect(mockCallback).not.toBeCalled();
    });

    it('dependency list 업데이트 시 effectCallback이 실행되어야 한다', () => {
      render(<App />);
      const setStateButton = screen.getByText(STATE_CHANGE_BUTTON_TEXT);
      fireEvent.click(setStateButton);
      expect(mockCallback).toBeCalledTimes(1);
      fireEvent.click(setStateButton);
      expect(mockCallback).toBeCalledTimes(2);
    });
  });
});
