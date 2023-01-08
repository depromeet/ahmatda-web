describe('Onboard step 1', () => {
  it('다음 버튼을 누르면 step 2로 이동해야 한다.', () => {
    cy.clearLocalStorage();
    cy.visit('/onboard/step1');

    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/onboard/step2');
  });

  it('선택한 값이 step 2에 반영되야 한다.', () => {
    const CATEGORY = '운동';

    cy.visit('/onboard/step1');

    cy.get(`label[for=${CATEGORY}]`).click();

    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/onboard/step2');
    cy.get('h2').should('contain.text', CATEGORY);
  });
});
