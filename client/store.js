import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// some sample data
import comments from './data/comments';
import posts from './data/posts';

// create object for default data
const defaultState = {
  posts: posts,
  comments: comments
};

const store = createStore(rootReducer, defaultState);

// stores the browserHistory into the syncHistory
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
