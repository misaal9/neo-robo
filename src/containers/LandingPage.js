import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LandingPage from '../components/LandingPage';
import { fetchRobots, changeAppStatus } from '../actions';

const mapStateToProps = state => {
  return {
    robots: state.robots,
    currentAppState: state.currentAppState
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRobots, changeAppStatus }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
