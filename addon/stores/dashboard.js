import ConfigStore from 'tessellation/stores/config';
import DashboardActions from 'tessellation/actions/dashboard';
import createStore from 'reflux/create-store';

let _dashboards = [];
let _currentIndex = 0;
let _config = null;
let _timer = null;

export default createStore({
  init() {
    this.listenTo(DashboardActions.setDashboards,     this.setDashboards);
    this.listenTo(DashboardActions.previousDashboard, this.previousDashboard);
    this.listenTo(DashboardActions.nextDashboard,     this.nextDashboard);
    this.listenTo(ConfigStore,                        this.setConfig);
  },

  setConfig(config) {
    _config = {
      'rotationDuration': config['rotationDuration']
    };

    this.start();
  },

  start() {
    if (_config.rotationDuration && _dashboards.length > 1 && _timer === null) {
      _timer = setInterval(() => {
        this.nextDashboard();
      }, _config.rotationDuration);
    }
  },

  previousDashboard() {
    _currentIndex--;
    this.trigger(_currentIndex);
  },

  nextDashboard() {
    if (_currentIndex < _dashboards.length - 1) {
      _currentIndex++;
    } else {
      _currentIndex = 0;
    }

    this.trigger(_currentIndex);
  },

  setDashboards(dashboards) {
    dashboards.forEach((dashboard, index) => {
      dashboard.index = index;
    });

    _dashboards = dashboards;
    _currentIndex = 0;

    this.start();

    this.trigger(_currentIndex);
  },

  currentIndex() {
    return _currentIndex;
  }
});
