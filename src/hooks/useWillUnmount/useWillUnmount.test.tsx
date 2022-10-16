import { useState } from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useWillUnmount from './useWillUnmount';

describe('useWillUnmount', () => {
  it('default export이어야 한다', () => {
    expect(useWillUnmount).toBeDefined();
  });

  it('첫 호출시 callback이 실행되면 안된다', () => {
    const mockCallback = jest.fn();
    renderHook(() => useWillUnmount(mockCallback));
    expect(mockCallback).not.toBeCalled();
  });

  describe('useWillUnmount Component', () => {
    const TOGGLE_BUTTON_TEXT = 'toggle';
    const mockCallback = jest.fn();

    const Child = () => {
      useWillUnmount(mockCallback);

      return <div />;
    };

    const App = () => {
      const [state, setState] = useState<boolean>(true);

      return (
        <div>
          <button type="button" onClick={() => setState((prev) => !prev)}>
            {TOGGLE_BUTTON_TEXT}
          </button>

          {state && <Child />}
        </div>
      );
    };

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it('마운트 시 callback이 실행되면 안된다', () => {
      render(<App />);
      expect(mockCallback).not.toBeCalled();
    });

    it('Child가 unmount시 callback이 실행된다', () => {
      render(<App />);
      const toggleButton = screen.getByText(TOGGLE_BUTTON_TEXT);
      fireEvent.click(toggleButton); // false
      expect(mockCallback).toBeCalledTimes(1);

      fireEvent.click(toggleButton); // true
      fireEvent.click(toggleButton); // false
      expect(mockCallback).toBeCalledTimes(2);
    });
  });
});
