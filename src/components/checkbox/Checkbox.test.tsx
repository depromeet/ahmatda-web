import { fireEvent, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

import customRender from '@/test/customRender';

describe('checkbox', () => {
  it('onCheck가 정상적으로 동작해야 한다', () => {
    const onCheckMock = jest.fn();
    customRender(<Checkbox onCheck={onCheckMock} />);

    fireEvent.click(screen.getByTestId('checkbox'));
    expect(onCheckMock).toBeCalledTimes(1);
  });
});
