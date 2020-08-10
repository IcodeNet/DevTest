import { SELECTORS } from '../../support/constants';
import { hexToRgb } from '../../support/utils/hexTorgb';

context('Home', () => {
  context('desktop view', () => {
    beforeEach(() => {
      cy.setViewportDesktop();
    });

    context('home page', () => {
      it('should show the welcome message correctly', () => {
        cy.visit('/');

        cy.get(SELECTORS.APP_ROOT.NAV.SELF)
          .should('exist')
          .should(
            'have.css',
            'background-color',
            hexToRgb('#002987').toString()
          );

        cy.get(SELECTORS.APP_ROOT.NAV.HOME_LINK).should('exist');

        cy.get(SELECTORS.APP_ROOT.NAV.JOBS_LINK).should('exist');

        cy.get(SELECTORS.HOME.WELCOME_MSG)
          .should('be.visible')
          .should('have.text', 'Welcome to ServiceSight');
      });
    });
  });
});
