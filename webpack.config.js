const path = require('path');

module.exports = {
  // Other Webpack configurations...

  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
    },
  },

  // Other Webpack configurations...
};
