let ROOT = Cypress.env('root');
let ROOT_SLASH = Cypress.env('root') + '/';
let BASE_URL = Cypress.env('host');
let API_BASE_URL = Cypress.env('api_server');

const URLs = {
  HOME: '/',
};

const ENDPOINTS = {
  BASE_JOBS_ENDPOINT: '/jobs',
};

const PAGE_TITLES = {};

const LINKS = {
  FOOTER: {},
};

const SELECTORS = {
  APP_ROOT: {
    NAV: {
      SELF: 'nav',
      HOME_LINK: 'a[href="/home"]',
      JOBS_LINK: 'a[href="/jobs"]',
    },
  },
  HOME: {
    WELCOME_MSG: '[data-testid="welcome"]',
  },
  JOB_LIST: {
    SELF: '[data-testid="JobList"]',
    ITEM: '[data-testid="JobListItem"]',
  },
};

const PATHS = {};

const VIEW_PORTS = {
  IPAD: { viewportWidth: parseInt(768), viewportHeight: parseInt(1024) },
  SMALL_WIDE: { viewportWidth: parseInt(375), viewportHeight: parseInt(667) },
  SMALL_SHORT: { viewportWidth: parseInt(360), viewportHeight: parseInt(640) },
  DESKTOP: { viewportWidth: parseInt(1366), viewportHeight: parseInt(768) },
  SMALL_LONG: { viewportWidth: parseInt(360), viewportHeight: parseInt(740) },
  SMALLEST: { viewportWidth: parseInt(320), viewportHeight: parseInt(568) },
};

// Export all required in the tests
export {
  API_BASE_URL,
  BASE_URL,
  ENDPOINTS,
  LINKS,
  PAGE_TITLES,
  PATHS,
  SELECTORS,
  SOCKET_UPDATES,
  URLs,
  VIEW_PORTS,
};
