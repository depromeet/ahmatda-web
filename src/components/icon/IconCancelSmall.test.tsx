import { render } from '@testing-library/react';

import IconCancelSmall from './IconCancelSmall';

describe('IconCancelSmall', () => {
  const renderIconCancelSmall = () => render(<IconCancelSmall stroke={given.stroke} strokeWidth={given.strokeWidth} />);

  describe('stroke', () => {
    context('stroke가 주어지면', () => {
      given('stroke', () => 'red');

      it('stroke가 적용된다.', () => {
        const { container } = renderIconCancelSmall();

        expect(container.querySelector('path')).toHaveAttribute('stroke', 'red');
      });
    });

    context('stroke가 주어지지 않으면', () => {
      given('stroke', () => undefined);

      it('기본 stroke가 적용된다.', () => {
        const { container } = renderIconCancelSmall();

        expect(container.querySelector('path')).toHaveAttribute('stroke', '#9090A0');
      });
    });
  });

  describe('strokeWidth', () => {
    context('strokeWidth가 주어지면', () => {
      given('strokeWidth', () => '2');

      it('strokeWidth가 적용된다.', () => {
        const { container } = renderIconCancelSmall();

        expect(container.querySelector('path')).toHaveAttribute('stroke-width', '2');
      });
    });

    context('strokeWidth가 주어지지 않으면', () => {
      given('strokeWidth', () => undefined);

      it('기본 strokeWidth가 적용된다.', () => {
        const { container } = renderIconCancelSmall();

        expect(container.querySelector('path')).toHaveAttribute('stroke-width', '1.5');
      });
    });
  });
});
