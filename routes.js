const routes = require('next-routes');

module.exports = routes()
  .add('index', '/')
  .add('AboutRoute', '/about/:param', 'About');

