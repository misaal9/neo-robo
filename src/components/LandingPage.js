import React from 'react';
import {
  ON_LOAD,
  QA_IN_PROGRESS,
  QA_COMPLETE,
  CHANGE_APP_STATUS
} from '../actions';

export const ROBOT_STATUS = {
  ON_FIRE: "on fire",
  RUSTY: "rusty",
  LOOSE_SCREWS: "loose screws",
  PAINT_SCRATHCED: "paint scratched"
}

class LandingPage extends React.Component {
  componentDidMount(){
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
    this.categorizeRobots(this.props.robots);
  }

  showButtonText() {
    switch (this.props.currentAppState) {
      case ON_LOAD:
        return "Start QA"
      case QA_IN_PROGRESS:
        return "Please wait..."
      case QA_COMPLETE:
        return "See Results"
    }
  }

  categorizeRobots(robots) {
    robots.forEach(robot => {


    });
  }

  render() {
    console.log(this.props.currentAppState);
    return (
      <div className="landing-page">
        <h3>Robot Factory</h3>
        <div>
          {this.props.currentAppState === ON_LOAD ? <span>App is loaded with batch of {this.props.robots.length} robots</span> : <span>QA Started...</span>}
        </div>
        <p></p>
        <div>
          <input type="button" value={this.showButtonText()} onClick={this.startQA.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default LandingPage;
