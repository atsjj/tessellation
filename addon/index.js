import ComponentRegistry from 'tessellation/component-registry';
import ApiConsumerMixin from 'tessellation/mixins/api-consumer';
import ApiStore from 'tessellation/stores/api';
import ApiActions from 'tessellation/actions/api';
import ConfigActions from 'tessellation/actions/config';
import MozaikComponent from 'tessellation/components/mozaik';

export default {
  Registry:       ComponentRegistry,
  Mixin: {
    ApiConsumer:  ApiConsumerMixin
  },
  Store: {
    Api:          ApiStore
  },
  Actions:   {
    Api:          ApiActions,
    Config:       ConfigActions
  },
  Component: {
    Mozaik:       MozaikComponent
  }
};
