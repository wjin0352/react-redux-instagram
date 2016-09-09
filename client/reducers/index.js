import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// we include the routing to take care of the changing of routes on the site.
const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;
