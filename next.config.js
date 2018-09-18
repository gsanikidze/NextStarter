const withSass = require('@zeit/next-sass');
const alias = require('./alias');

module.exports = withSass({
  webpack: (config) => {
    const updatedConfig = {
      ...config,
      resolve: {
        alias,
      },
    };
    return updatedConfig;
  },
});
