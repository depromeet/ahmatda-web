import { render, screen } from '@testing-library/react';

import TextField from './TextField';

import MockTheme from '@/test/MockTheme';

describe('TextField', () => {
  const renderTextField = () =>
    render(<TextField placeholder="placeholder" error={given.error} />, { wrapper: MockTheme });

  describe('error', () => {
    context('error가 있으면', () => {
      given('error', () => '에러 메시지');

      it('error message가 보인다.', () => {
        const { container } = renderTextField();

        expect(container).toHaveTextContent('에러 메시지');
        expect(screen.queryByTestId('error-message')).not.toBeNull();
      });
    });

    context('error가 없으면', () => {
      given('error', () => undefined);

      it('error message가 보이지 않는다.', () => {
        renderTextField();

        expect(screen.queryByTestId('error-message')).toBeNull();
      });
    });
  });
});
