import Component from 'react/component';
import DashboardStore from 'tessellation/stores/dashboard';
import ListenerMixin from 'reflux/listener-mixin'
import Widget from 'tessellation/components/widget';
import clone from 'tessellation/utilities/clone-object';
import createElement from 'react/create-element';
import mixin from 'tessellation/utilities/mixin';

class Dashboard extends mixin(Component, ListenerMixin) {
  getInitialState() {
    return {
      isCurrent: false
    };
  }

  componentWillMount() {
    this.listenTo(DashboardStore, this.onDashboardStoreUpdate);
  }

  onDashboardStoreUpdate(index) {
    this.setState({
      isCurrent: index === this.props.dashboard.index
    });
  }

  render() {
    let columns = this.props.dashboard.columns;
    let rows    = this.props.dashboard.rows;

    let widgetNodes = this.props.dashboard.widgets.map((widget, index) => {
      let props = clone(widget);

      delete props['columns'];
      delete props['rows'];

      Object.assign(props, {
        key:  index,
        type: widget.type,
        w:    `${(widget.columns / columns * 100)}%`,
        h:    `${(widget.rows    / rows    * 100)}%`,
        x:    `${(widget.x       / columns * 100)}%`,
        y:    `${(widget.y       / rows    * 100)}%`
      });

      return createElement(Widget, props);
    });

    let cssClasses = 'dashboard__sheet';
    if (this.state.isCurrent) {
      cssClasses += ' _is-current';
    }

    return (
      <div className={cssClasses}>
        {widgetNodes}
      </div>
    );
  }
});

export default Dashboard;
