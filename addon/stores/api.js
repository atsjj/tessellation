import ApiActions from 'tessellation/actions/api';
import ConfigStore from 'tessellation/stores/config';
import createStore from 'reflux/create-store';

let buffer = [];
let ws     = null;

export default createStore({
  init() {
    this.listenTo(ConfigStore, this.initWs);
  },

  initWs(config) {
    let proto = 'ws';
    if (config.useWssConnection === true) {
      proto = 'wss';
    }

    ws = new WebSocket(`${ proto }://${ window.document.location.host }`);
    ws.onmessage = event => {
      ApiStore.trigger(JSON.parse(event.data));
    };

    ws.onopen = () => {
      buffer.forEach(request => {
        ws.send(JSON.stringify(request));
      });
    };

    this.listenTo(ApiActions.get, this.get);
  },

  get(id, params) {
    if (ws === null || ws.readyState !== WebSocket.OPEN) {
      buffer.push({
        id:     id,
        params: params || {}
      });

      return;
    }

    ws.send(JSON.stringify({
      id:     id,
      params: params || {}
    }));
  }
});
