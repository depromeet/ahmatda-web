import { fireEvent, screen } from '@testing-library/react';

import RecommendationTemplateCard from './RecommendationTemplateCard';

import { RecTemplate } from '@/hooks/api/template/type';
import customRender from '@/test/customRender';

describe('추천 템플릿 카드', () => {
  it('추천 템플릿 카드가 올바르게 작동한다.', () => {
    customRender(<RecommendationTemplateCard data={MOCK} />);
    const checkAllBtn = screen.getByLabelText('전체 선택');
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

const MOCK: RecTemplate = {
  id: 100,
  templateName: '일상에서 중요한거',
  categoryId: 1,
  items: [
    {
      id: 1,
      templateId: 2,
      categoryId: 1,
      name: '노트북',
    },
    {
      id: 2,
      templateId: 2,
      categoryId: 1,
      name: '핸드폰',
    },
    {
      id: 3,
      templateId: 2,
      categoryId: 1,
      name: '에어팟',
    },
  ],
};
