import ApiActions from 'tessellation/actions/api';
import ApiStore   from 'tessellation/stores/api';

const ApiConsumerMixin = {
  componentWillMount() {
    this.apiRequest = this.getApiRequest();
    this.listenTo(ApiStore, this._onApiData);
  },

  _onApiData(data) {
    if (data.id === this.apiRequest.id) {
      this.onApiData(data.body);
    }
  },

  componentDidMount() {
    ApiActions.get(this.apiRequest.id, this.apiRequest.params || {});
  }
};

export default ApiConsumerMixin;
