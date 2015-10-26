import Component from 'react/component';
import ComponentRegistry from 'tessellation/component-registry';
import clone from 'tessellation/utilities/clone-object';
import createElement from 'react/create-element';

export default class extends Component {
  render() {
    let { type, x, y, w, h } = this.props;
    let style = {
      top:    y,
      left:   x,
      width:  w,
      height: h
    };

    // Pass props to widget component without 'metadata'
    let childProps = clone(this.props);

    ['x', 'y', 'w', 'h', 'type'].forEach(key => delete childProps[key]);

    // Pick component from registry and instantiate with filtered props
    let widget = createElement(ComponentRegistry.get(type), childProps);

    // Set class according to component type
    let cssClass = `widget ${type.replace('_', '-').replace('.', '__')}`;

    return (
      <div className="widget__wrapper" style={style}>
        <div className={cssClass}>
            {widget}
        </div>
      </div>
    );
  }
}
