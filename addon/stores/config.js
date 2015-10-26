import ConfigActions from 'tessellation/actions/config';
import DashboardActions from 'tessellation/actions/dashboard';
import createStore from 'reflux/create-store';

export default createStore({
  listenables: ConfigActions,

  loadConfig() {
    fetch('/api/config')
      .then(response => response.json())
      .then(config => {
        this.trigger(config);
        DashboardActions.setDashboards(config.dashboards);
      })
      .catch(error => {
        window.console.error('[Fetch] : Error!', error)
        window.console.trace(error.stack);
      });
  }
});
