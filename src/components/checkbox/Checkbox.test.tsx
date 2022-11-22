import { fireEvent, screen } from '@testing-library/react';

import Checkbox from './Checkbox';
import CheckboxWithText from './CheckboxWithText';

import customRender from '@/test/customRender';

const CHECKBOX_TEXT = 'test';

describe('checkbox', () => {
  it('클릭시마다 onToggle이 작동한다.', () => {
    const onToggleMock = jest.fn();
    customRender(<Checkbox onToggle={onToggleMock} />);

    fireEvent.click(screen.getByTestId('checkbox'));
    fireEvent.click(screen.getByTestId('checkbox'));
    expect(onToggleMock).toHaveBeenCalledTimes(2);
  });

  it('children을 렌더링한다.', () => {
    customRender(<CheckboxWithText>test</CheckboxWithText>);
    expect(screen.getByText(CHECKBOX_TEXT)).toBeInTheDocument();
  });
});
