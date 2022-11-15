import { fireEvent, screen } from '@testing-library/react';

import Button from './Button';

import customRender from '@/test/customRender';

const BUTTON_TEXT = 'foo bar';

describe('button', () => {
  it('children을 렌더링해야 한다', () => {
    customRender(<Button>{BUTTON_TEXT}</Button>);
    expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
  });

  it('onClick이 정상적으로 동작해야 한다', () => {
    const onClickMock = jest.fn();
    customRender(<Button onClick={onClickMock}>{BUTTON_TEXT}</Button>);

    fireEvent.click(screen.getByText(BUTTON_TEXT));
    expect(onClickMock).toBeCalledTimes(1);
  });
});
