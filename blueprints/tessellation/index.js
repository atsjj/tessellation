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
      this.addAddonToProject('d3', '^3.5.6'),
      this.addAddonToProject('moment', '^2.10.6'),
      this.addAddonToProject('moment-timezone', '^0.4.1'),
      this.addAddonToProject('reflux', '^0.3.0'),
      this.addAddonToProject('tessellation-shims', 'atsjj/tessellation-shims#0.1.0')
    ]);
  }
};