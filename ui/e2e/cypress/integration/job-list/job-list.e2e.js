import { SELECTORS } from '../../support/constants';

context('JobList', () => {
  context('desktop view', () => {
    beforeEach(() => {
      cy.setViewportDesktop();
    });

    context('home page', () => {
      it('should show correctly', () => {
        cy.visit('/jobs');

        cy.get(SELECTORS.JOB_LIST.SELF).should('be.visible');
      });
    });
  });
});
