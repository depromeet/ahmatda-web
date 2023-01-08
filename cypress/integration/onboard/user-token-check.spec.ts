describe('Onboard 진입', () => {
  it('사용자 토큰이 저장되어 있지 않을 시 onboard route로 이동해야 한다.', () => {
    cy.clearLocalStorage();
    cy.visit('/');

    cy.url().should('contain', '/onboard/step1');
  });

  // TODO: 테스트 유저 토큰 발급 받은 이후 route 변경 안되는 지 테스트
});
