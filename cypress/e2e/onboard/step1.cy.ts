describe('Onboard step 1', () => {
  it('다음 버튼을 누르면 step 2로 이동해야 한다.', () => {
    cy.clearLocalStorage();
    cy.visit('/onboard/step1');
  });
});
