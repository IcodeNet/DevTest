import '@testing-library/cypress/add-commands';

import { SELECTORS, VIEW_PORTS } from './constants';

Cypress.Commands.add('setViewportIPad', () => {
  const { viewportWidth, viewportHeight } = VIEW_PORTS.IPAD;
  cy.viewport(viewportWidth, viewportHeight);
});

Cypress.Commands.add('setViewportMobile', () => {
  const { viewportWidth, viewportHeight } = VIEW_PORTS.SMALL_WIDE;
  cy.viewport(viewportWidth, viewportHeight);
});

Cypress.Commands.add('setViewportDesktop', () => {
  const { viewportWidth, viewportHeight } = VIEW_PORTS.DESKTOP;
  cy.viewport(viewportWidth, viewportHeight);
});

Cypress.Commands.add(
  'mockTime',
  (
    { year, month, date, hours, minutes, seconds } = {
      year: 2019,
      month: 7,
      date: 30,
      hours: 13,
      minutes: 50,
      seconds: 0,
    }
  ) => {
    let log = Cypress.log({
      name: 'mockTime',
      displayName: 'mockTime',
      message: `${year}, ${month}, ${date}, ${hours}, ${minutes}, ${seconds}`,
    });

    cy.clock(Date.UTC(year, month, date, hours, minutes, seconds), ['Date']);
  }
);

Cypress.Commands.add('clickJobAt', (index) => {
  return cy
    .get(SELECTORS.JOB_LIST.ITEM)
    .eq(index - 1)
    .scrollIntoView()
    .should('be.visible')
    .click();
});

Cypress.Commands.add('getJobAt', (index) => {
  cy.shouldNotExist(SELECTORS.SPINNER);
  return cy.get(SELECTORS.JOB_LIST.ITEM).eq(index - 1);
});

Cypress.Commands.add('shouldExist', (selector) => {
  return cy.get(selector).should('exist');
});

Cypress.Commands.add('shouldNotExist', (selector) => {
  return cy.get(selector).should('not.exist');
});
