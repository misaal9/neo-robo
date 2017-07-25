import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LandingPage from '../components/LandingPage';
import { fetchRobots, changeAppStatus, addToRecycle, addToExtinguish, updateRobotQaCategory } from '../actions';

const mapStateToProps = state => {
  return {
    robots: state.robots,
    currentAppState: state.currentAppState,
    recycled: state.recycled,
    extinguished: state.extinguished
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRobots, changeAppStatus, addToRecycle, addToExtinguish, updateRobotQaCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
