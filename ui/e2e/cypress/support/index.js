// Import commands.js using ES2015 syntax:
import './commands';
import './defaults';
import './hooks/index';

// also import 3rd party assertions
// which will globally modify chai
// and make these accessible to all specs
import './assertions';

beforeEach(() => {
  //
});

afterEach(() => {
  cy.server({ enable: false });
});
