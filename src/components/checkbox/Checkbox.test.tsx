import { fireEvent, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

import customRender from '@/test/customRender';

describe('checkbox', () => {
  it('클릭시마다 onToggle이 작동한다.', () => {
    const onToggleMock = jest.fn();
    customRender(<Checkbox onToggle={onToggleMock} />);

    fireEvent.click(screen.getByTestId('checkbox'));
    fireEvent.click(screen.getByTestId('checkbox'));
    expect(onToggleMock).toHaveBeenCalledTimes(2);
  });
});
