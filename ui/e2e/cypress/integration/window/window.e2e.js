/// <reference types="Cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top');
  });

  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Ui');
  });

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty');
  });

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', 'http://localhost:4200/');
  });

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq('http://localhost:4200/');
      expect(location.host).to.eq('localhost:4200');
      expect(location.hostname).to.eq('localhost');
      expect(location.origin).to.eq('http://localhost:4200');
      expect(location.pathname).to.eq('/');
      expect(location.port).to.eq('4200');
      expect(location.protocol).to.eq('http:');
      expect(location.search).to.be.empty;
    });
  });
});
