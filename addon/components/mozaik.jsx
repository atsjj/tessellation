import Component from 'react/component';
import ConfigStore from 'tessellation/stores/config';
import Dashboard from 'tessellation/components/dashboard';
import ListenerMixin from 'reflux/listener-mixin';
import Timer from 'tessellation/components/timer';
import mixin from 'tessellation/utilities/mixin';

export default class extends mixin(Component, ListenerMixin) {
  getInitialState() {
    return {
      config: null
    };
  }

  componentWillMount() {
    this.listenTo(ConfigStore, this.onConfigStoreUpdate);
  }

  onConfigStoreUpdate(config) {
    this.setState({
      config: config
    });
  }

  render() {
    if (this.state.config === null) {
      return null;
    }

    let dashboardNodes = this.state.config.dashboards.map((dashboard, index) => {
      return <Dashboard key={index} dashboard={dashboard} />;
    });

    let timerNode = null;
    if (this.state.config.dashboards.length > 1) {
      timerNode = <Timer />;
    }

    return (
      <div className="dashboard">
        {dashboardNodes}
      </div>
    );
  }
}
