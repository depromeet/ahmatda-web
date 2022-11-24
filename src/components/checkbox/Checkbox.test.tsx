import { fireEvent, screen } from '@testing-library/react';

import { mockCheckboxGroupOptions, mockCheckboxGroupTitle } from '../../mocks/checkboxGroup.mock';

import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
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
});

describe('checkbox with text', () => {
  it('children을 렌더링한다.', () => {
    customRender(<CheckboxWithText>test</CheckboxWithText>);
    expect(screen.getByText(CHECKBOX_TEXT)).toBeInTheDocument();
  });
});

describe('checkbox group', () => {
  it('checkbox group이 올바르게 작동한다.', () => {
    customRender(<CheckboxGroup title={mockCheckboxGroupTitle} options={mockCheckboxGroupOptions} />);
    const checkAllBtn = screen.getByTestId('check-all-btn');
    const checkBtns = screen.getAllByTestId('single-check-btn');

    // checkAllBtn의 기본 상태는 체크 해제이다.
    expect(checkAllBtn).not.toBeChecked();

    // checkAllBtn이 체크되면 모든 하위 요소들이 체크된다.
    fireEvent.click(checkAllBtn);
    checkBtns.forEach((btn) => {
      expect(btn).toBeChecked();
    });

    // checkAllBtn이 체크해제 되면 모든 하위 요소들이 체크 해제 된다.
    fireEvent.click(checkAllBtn);
    checkBtns.forEach((btn) => {
      expect(btn).not.toBeChecked();
    });

    // 모든 하위 요소가 체크되면 checkAllBtn이 체크된다.
    checkBtns.forEach((btn) => {
      fireEvent.click(btn);
    });
    expect(checkAllBtn).toBeChecked();

    // 하위 요소 한 개라도 체크 해제되면 checkAllBtn이 체크해제 된다.
    fireEvent.click(checkBtns[0]);
    expect(checkAllBtn).not.toBeChecked();
  });
});
