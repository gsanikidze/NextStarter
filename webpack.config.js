/*
* This File Has Only One Reason - Read Aliases Inside TextEditor (WebStorm)
* If You Will Add Some Aliases Inside ./next.config.js, add Here To, if You Wont Path Intellisense
* */
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      PAGES: path.resolve(__dirname, 'pages/'),
      COMPONENTS: path.resolve(__dirname, 'components/'),
      HOCS: path.resolve(__dirname, 'hocs/'),
      SERVICES: path.resolve(__dirname, 'services/'),
      STYLES: path.resolve(__dirname, 'styles/'),
      STORE: path.resolve(__dirname, 'store/'),
      REDUCERS: path.resolve(__dirname, 'reducers/'),
      ACTIONS: path.resolve(__dirname, 'actions/'),
      ROUTES: path.resolve(__dirname, 'routes.js'),
    },
  },
};
