const stagingVariables = {
  API_BASE_URL: 'url',
};

module.exports = {
  development: {
    API_BASE_URL: 'url',
  },

  staging: stagingVariables,

  production: {
    ...stagingVariables,
  },
};
