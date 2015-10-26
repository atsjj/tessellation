/* jshint node: true */
'use strict';

module.exports = {
  name: 'tessellation',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/d3/d3.js');
    app.import(app.bowerDirectory + '/moment/moment.js');
    app.import(app.bowerDirectory + '/moment-timezone/builds/moment-timezone-with-data.js');
    app.import(app.bowerDirectory + '/reflux/dist/reflux.js');
    app.import(app.bowerDirectory + '/classnames/index.js');
    app.import(app.bowerDirectory + '/tessellation-shims/app-shims.js');
  }
};
