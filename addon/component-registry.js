let _components = {};

class ComponentRegistry {
  /**
   * Register multiple extensions components.
   *
   * @param {Object} extensions
   */
  static addExtensions(extensions) {
    let keys = Object.keys(extensions);

    keys.forEach(extensionId => {
      let components = extensions[extensionId];

      ComponentRegistry.addExtension(extensionId, components);
    });
  }

  /**
   * Register an extension components.
   *
   * @param {String} extensionId
   * @param {Object} components
   */
  static addExtension(extensionId, components) {
    let keys = Object.keys(components);

    keys.forEach(id => {
      let component = components[id];

      ComponentRegistry.add(`${ extensionId }.${ underscore(id) }`, component);
    });
  }

  static add(type, component) {
    _components[type] = component;

    return ComponentRegistry;
  }

  static get(type) {
    if (!_components[type]) {
      throw new Error('No component defined for type "' + type + '"');
    }

    return _components[type];
  }

  static list() {
    return _components;
  }
}

const STRING_UNDERSCORE_REGEXP_1 = (/([a-z\d])([A-Z]+)/g);
const STRING_UNDERSCORE_REGEXP_2 = (/\-|\s+/g);

function underscore(str) {
  return str.replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2').
    replace(STRING_UNDERSCORE_REGEXP_2, '_').toLowerCase();
}

export default ComponentRegistry;
