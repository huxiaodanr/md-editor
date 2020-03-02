/// <reference types="Cypress" />

describe('my first cypress test', () => {
  it('contains type', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    // 应该存在一个包含'/commands/actions'的新URL
    cy.url().should('include', '/commands/actions');
    cy.get('input.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});
