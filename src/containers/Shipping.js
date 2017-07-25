import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Shipping from '../components/Shipping';
import { addToShipping, removeFromShipping } from '../actions';

const mapStateToProps = state => {
  return {
    robots: state.robots
  }
}

const mapDisplatchToProps = dispatch => {
  return bindActionCreators({ addToShipping, removeFromShipping }, dispatch);
};

export default connect(mapStateToProps, mapDisplatchToProps)(Shipping);
