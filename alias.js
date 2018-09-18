/* If You Want Create Global Aliases Add Here
*  It`s Will Be Automatically Passed in webpack and next config files
* */
const path = require('path');

module.exports = {
  PAGES: path.resolve(__dirname, 'pages/'),
  COMPONENTS: path.resolve(__dirname, 'components/'),
  HOCS: path.resolve(__dirname, 'hocs/'),
  SERVICES: path.resolve(__dirname, 'services/'),
  STYLES: path.resolve(__dirname, 'styles/'),
  STORE: path.resolve(__dirname, 'store/'),
  REDUCERS: path.resolve(__dirname, 'reducers/'),
  ACTIONS: path.resolve(__dirname, 'actions/'),
  ROUTES: path.resolve(__dirname, 'routes.js'),
};
