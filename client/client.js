import React from 'react';
import { render } from 'react-dom';

// import css through webpack
// import css from '../client/css/styles';

// import components
import Main from './components/Main';
import Single from './components/Single';
import AllPhotos from './components/AllPhotos';

//  import react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// history is from store.js where we synced the browserhistory with the store and exported it as history.
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history} >
      <Route path='/' component={Main}>
        <IndexRoute component={AllPhotos}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));

