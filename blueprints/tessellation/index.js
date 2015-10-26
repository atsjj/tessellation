'use strict';

var Promise = require('ember-cli/lib/ext/promise');

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    return Promise.all([
      this.addAddonToProject('atsjj/ember-cli-react', '0.14.1'),
      this.addBowerPackageToProject('d3', '^3.5.6'),
      this.addBowerPackageToProject('moment', '^2.10.6'),
      this.addBowerPackageToProject('moment-timezone', '^0.4.1'),
      this.addBowerPackageToProject('reflux', '^0.3.0'),
      this.addBowerPackageToProject('tessellation-shims', 'atsjj/tessellation-shims#0.1.0')
    ]);
  }
};