import { render, screen } from '@testing-library/react';

import Svg from './Svg';

const CHILDREN_TEXT = 'foo bar';

describe('Svg', () => {
  it('children을 렌더링해야 한다', () => {
    render(<Svg>{CHILDREN_TEXT}</Svg>);
    expect(screen.getByText(CHILDREN_TEXT)).toBeInTheDocument();
  });

  it('size가 width, height에 적용되어야 한다', () => {
    const correctSize = 30;
    render(<Svg size={correctSize}>{CHILDREN_TEXT}</Svg>);
    expect(screen.getByText(CHILDREN_TEXT).getAttribute('width')).toEqual(correctSize.toString());
    expect(screen.getByText(CHILDREN_TEXT).getAttribute('height')).toEqual(correctSize.toString());
  });

  it('width, height가 size보다 우선 순위를 갖는다', () => {
    const correctSize = 30;
    const incorrectSize = 26;
    render(
      <Svg size={incorrectSize} width={correctSize} height={correctSize}>
        {CHILDREN_TEXT}
      </Svg>,
    );

    expect(screen.getByText(CHILDREN_TEXT).getAttribute('width')).toEqual(correctSize.toString());
    expect(screen.getByText(CHILDREN_TEXT).getAttribute('width')).not.toEqual(incorrectSize.toString());
    expect(screen.getByText(CHILDREN_TEXT).getAttribute('height')).toEqual(correctSize.toString());
    expect(screen.getByText(CHILDREN_TEXT).getAttribute('height')).not.toEqual(incorrectSize.toString());
  });

  it('isUsingFill을 사용하지 않을 때 fill은 none이다', () => {
    render(<Svg>{CHILDREN_TEXT}</Svg>);
    expect(screen.getByText(CHILDREN_TEXT).getAttribute('fill')).toEqual('none');
  });

  it('isUsingFill을 사용하며 color을 사용하지 않을 때 fill은 currentColor이다', () => {
    render(<Svg isUsingFill>{CHILDREN_TEXT}</Svg>);
    expect(screen.getByText(CHILDREN_TEXT).getAttribute('fill')).toEqual('currentColor');
  });

  it('isUsingFill을 사용하며 color를 사용할 때 fill은 주입한 color이다', () => {
    const correctColor = 'red';
    render(
      <Svg isUsingFill color={correctColor}>
        {CHILDREN_TEXT}
      </Svg>,
    );
    expect(screen.getByText(CHILDREN_TEXT).getAttribute('fill')).toEqual(correctColor);
  });
});
