/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ON_LOAD,
  QA_IN_PROGRESS,
  QA_COMPLETE,
  CHANGE_APP_STATUS
} from '../actions';
import { categorizeRobots } from '../util/categorizeRobots';
import STORE from '../index';

export const ROBOT_STATUS = {
  ON_FIRE: "on fire",
  RUSTY: "rusty",
  LOOSE_SCREWS: "loose screws",
  PAINT_SCRATHCED: "paint scratched"
}

class LandingPage extends React.Component {
  componentDidMount(){
    // load robots from batch
    this.props.fetchRobots();
  }

  renderBatchLoadedRobots() {
    if (!this.props.robots.length) {
      return(
        <div>Loading robots from batch..</div>
      );
    }
    const robotsInBatch = this.props.robots[0].data;
    return (
      robotsInBatch.map(robot => <div key={robot.id}>{robot.id}</div>)
    );
  };

  startQA() {
    this.props.changeAppStatus(QA_IN_PROGRESS);
    categorizeRobots(this.props.robots, this.props.addToRecycle, this.props.addToExtinguish, this.props.updateRobotQaCategory);
    this.props.changeAppStatus(QA_COMPLETE);
  }

  renderButton() {
    let label = "Start QA";
    // switch (this.props.currentAppState) {
    //   case ON_LOAD:
    //     label = "Start QA";
    //   case QA_IN_PROGRESS:
    //     label = "Please wait...";
    //   case QA_COMPLETE:
    //     label = "Start Shipping";
    // }

    if (this.props.currentAppState !== QA_COMPLETE) {
      return (
        <input type="button" value={label} onClick={this.startQA.bind(this)} />
      );
    } else {
      return(
        <input type="button" value="Start Shipping" onClick={() => {this.props.history.push('/shipping')}}/>
      );
    }
  }

  renderMessage = () => {
    switch (this.props.currentAppState) {
      case ON_LOAD:
        return `Batch has been loaded with ${this.props.robots.length} robots.`
      case QA_IN_PROGRESS:
        return "Please wait. Your batch is being processed"
      case QA_COMPLETE:
        return "QA complete. Click button start shipping"
      default:
        return "App state out of sync"
    }
  }

  /*renderShippingButton = () => {
    if (this.props.currentAppState === QA_COMPLETE) {
      return(

      );
    }
  }*/

  render() {
    return (
      <div className="landing-page">
        <h3>Robot Factory</h3>
        <div>
          {this.renderMessage()}
        </div>
        <p></p>
        <div>
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default LandingPage;
