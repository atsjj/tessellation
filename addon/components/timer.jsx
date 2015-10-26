import Component from 'react/component';
import DashboardStore from 'tessellation/stores/dashboard';
import ListenerMixin from 'reflux/listener-mixin';
import Timer from 'tessellation/components/timer';
import mixin from 'tessellation/utilities/mixin';

export default class extends mixin(Component, ListenerMixin) {
  getInitialState() {
    return {
      completion: 0
    };
  }

  componentWillMount() {
    this.listenTo(DashboardStore, this.onStoreUpdate);

    setInterval(() => {
      this.setState({
        completion: this.state.completion + 5
      });
    }, 5);
  }

  onStoreUpdate() {
    this.setState({
      completion: 0
    });
  }

  render() {
    let style = {
      width: (this.state.completion / 200 * 100) + '%'
    };

    return (
      <div className="hotboard__timeline">
        <div className="hotboard__timeline__progress" style={style} />
      </div>
    );
  }
});
