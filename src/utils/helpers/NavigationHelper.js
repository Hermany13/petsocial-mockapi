import history from '../services/history';

export const navigateTo = (url, props) => history.push(url, props);
