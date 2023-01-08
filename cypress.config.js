module.exports = {
  projectId: 'vapgkn',
  viewportWidth: 414,
  viewportHeight: 896,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(_on, _config) {
      // ...
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}',
  },
};
