import { render, screen } from '@testing-library/react';

import Item from './Item';

import theme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

const ITEM_LABEL = 'label';
const ITEM_EMOJI = '&#x1F4BC;';

describe('Item', () => {
  const renderItem = () =>
    render(<Item type="checkbox" label={given.label} emjCode={given.emjCode} labelSize={given.labelSize} />, {
      wrapper: MockTheme,
    });

  describe('label', () => {
    context('label이 주어지면', () => {
      given('label', () => ITEM_LABEL);

      it('label을 렌더링해야 한다.', () => {
        renderItem();

        expect(screen.getByText(ITEM_LABEL)).toBeInTheDocument();
      });
    });
  });

  describe('emjCode', () => {
    context('emjCode가 있으면', () => {
      given('emjCode', () => ITEM_EMOJI);

      it('이모지가 들어간다.', () => {
        renderItem();

        expect(screen.getByTestId('item-emoji')).toBeInTheDocument();
      });
    });

    context('emjCode가 없으면', () => {
      given('emjCode', () => null);

      it('이모지가 들어가지 않는다.', () => {
        renderItem();

        expect(screen.queryByTestId('item-emoji')).toBeNull();
      });
    });
  });

  describe('labelSize', () => {
    context('labelSize가 small이면', () => {
      given('labelSize', () => 'small');

      it('label의 typography가 button2이다.', () => {
        renderItem();

        expect(screen.getByTestId('item-label')).toHaveStyle({
          ...theme.typographies.button2,
        });
      });
    });

    context('labelSize가 large이면', () => {
      given('labelSize', () => 'large');

      it('label의 typography가 button1이다.', () => {
        renderItem();

        expect(screen.getByTestId('item-label')).toHaveStyle({
          ...theme.typographies.button1,
        });
      });
    });
  });
});
