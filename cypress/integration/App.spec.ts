/// <reference types="cypress" />

const editor = () => {
  return cy.get('#editor');
};

const previewer = () => {
  return cy.get('#previewer');
};
describe('The home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('shoudld show editor', () => {
    editor().should('be.visible');
  });
  it('should show previewer', () => {
    previewer().should('be.visible');
  });
  it('should show preview text basing on the editor', () => {
    editor()
      .get('.header-input')
      .type('hello cypress');
    previewer().should('have.text', 'hello cypress');
  });
});
