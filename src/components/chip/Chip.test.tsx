import { fireEvent, render, screen } from '@testing-library/react';

import Chip from './Chip';

import theme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

describe('Chip', () => {
  const onClick = jest.fn();

  const renderChip = () =>
    render(<Chip onClick={onClick} color={given.color} label="label" icon={given.icon} />, {
      wrapper: MockTheme,
    });

  describe('onClick', () => {
    context('chip을 클릭하면', () => {
      it('onClick이 호출된다.', () => {
        renderChip();

        fireEvent.click(screen.getByTestId('chip-wrapper'));

        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('color', () => {
    context('color가 default면', () => {
      given('color', () => 'default');

      it('배경색이 white이고, 글자색이 gray4이다.', () => {
        renderChip();

        expect(screen.getByTestId('chip-wrapper')).toHaveStyle({
          backgroundColor: theme.colors.white,
          color: theme.colors.gray4,
        });
      });
    });

    context('color가 black면', () => {
      given('color', () => 'black');

      it('배경색이 black이고, 글자색이 white이다.', () => {
        renderChip();

        expect(screen.getByTestId('chip-wrapper')).toHaveStyle({
          backgroundColor: theme.colors.black,
          color: theme.colors.white,
        });
      });
    });
  });

  describe('icon', () => {
    context('icon이 주어지면', () => {
      given('icon', () => <div data-testid="icon" />);

      it('icon이 보인다.', () => {
        renderChip();

        expect(screen.getByTestId('icon')).toBeInTheDocument();
      });
    });

    context('icon이 주어지지 않으면', () => {
      given('icon', () => null);

      it('IconInfo가 보인다.', () => {
        renderChip();

        expect(screen.getByTestId('icon-info')).toBeInTheDocument();
      });
    });
  });
});
