var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mongodb-seeder'
    },
    port: 3000,
    db: 'mongodb://idsl:idsl@ds031601.mongolab.com:31601/idsl'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mongodb-seeder'
    },
    port: 3000,
    db: 'mongodb://localhost/mongodb-seeder-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mongodb-seeder'
    },
    port: 3000,
    db: 'mongodb://localhost/mongodb-seeder-production'
  }
};

module.exports = config[env];
