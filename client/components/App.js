import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state, action) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

// no need to manually run dispatch, instead this passes us action creators via props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// gets all of our state data to props and all action creators and dispatch to props and puts it into Main component so it has access to all data and dispatch actions through props and the rest of the child components can access the data and actionCreators.

// all of our actionCreators all of our data is now available to our Main component because we used connect
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
