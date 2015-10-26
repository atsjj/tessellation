import createActions from 'reflux/create-actions';

const DashboardActions = createActions([
  'setDashboards',
  'previousDashboard',
  'nextDashboard',
  'startRotation'
]);

export default DashboardActions;
