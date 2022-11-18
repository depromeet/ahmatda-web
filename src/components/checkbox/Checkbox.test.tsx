import { fireEvent, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

import customRender from '@/test/customRender';

describe('checkbox', () => {
  it('클릭할 때마다 onCheck와 onUncheck 번갈아 동작해야 한다', () => {
    const onCheckMock = jest.fn();
    const onUncheckMock = jest.fn();
    customRender(<Checkbox onCheck={onCheckMock} onUncheck={onUncheckMock} />);

    fireEvent.click(screen.getByTestId('checkbox'));
    expect(onCheckMock).toBeCalledTimes(1);
    onCheckMock.mockClear();

    fireEvent.click(screen.getByTestId('checkbox'));
    expect(onUncheckMock).toBeCalledTimes(1);

    fireEvent.click(screen.getByTestId('checkbox'));
    expect(onCheckMock).toBeCalledTimes(1);
  });
});
