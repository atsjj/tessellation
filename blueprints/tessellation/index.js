'use strict';

var Promise = require('ember-cli/lib/ext/promise');

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    var app = this;

    return app.addAddonToProject('atsjj/ember-cli-react', '0.14.2')
      .then(function() {
        return app.addBowerPackageToProject('d3', '^3.5.6');
      })
      .then(function() {
        app.addBowerPackageToProject('moment', '^2.10.6');
      })
      .then(function() {
        app.addBowerPackageToProject('moment-timezone', '^0.4.1');
      })
      .then(function() {
        app.addBowerPackageToProject('reflux', '^0.3.0');
      })
      .then(function() {
        app.addBowerPackageToProject('tessellation-shims', 'atsjj/tessellation-shims#0.1.0');
      });
  }
};