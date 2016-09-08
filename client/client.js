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

const router = (
  <Router history={browserHistory} >
    <Route path='/' component={Main}>
      <IndexRoute component={AllPhotos}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('app'));

