import React from 'react';
import _ from 'lodash';
import { ADD_TO_FACTORY_SECOND, ADD_TO_QA_PASS } from '../actions';

export default class QAComplete extends React.Component {
  renderRobotsList(category) {
    const factorySecondRobots = this.props.robots.filter(robot => {
      return _.indexOf(robot.qaCategory, category) > -1 && !robot.shipped;
    });

    return factorySecondRobots.map(robot => {
      return(
        <li key={robot.id}>
          <div>
            {robot.name}
            <input type="button" value="Add To Shipment" onClick={() => {this.props.addToShipping(robot)}} />
          </div>
        </li>
      );
    });
  }

  renderShippingList() {
    const shippedRobotsList = this.props.robots.filter(robot => robot.shipped);

    return shippedRobotsList.map(robot => {
      return(
        <li key={robot.id}>
          <div>
            {robot.name}
            <input type="button" value="Remove From Shipment" onClick={() => {this.props.removeFromShipping(robot)}} />
          </div>
        </li>
      );
    });
  }

  renderSendShipmentButton() {
    const shippedRobotsList = this.props.robots.filter(robot => robot.shipped);
    if (shippedRobotsList.length > 0) {
      return(
        <input type="button" value="Send Shipment" onClick={()=>{alert('Shipped!')}}/>
      );
    }
  }

  render() {
    return(
      <div>
        <h3>Factory Seconds</h3>
        <ul>
          { this.renderRobotsList(ADD_TO_FACTORY_SECOND) }
        </ul>

        <h3>QA Passed</h3>
        <ul>
          { this.renderRobotsList(ADD_TO_QA_PASS) }
        </ul>

        <h3>Ready To Ship</h3>
        <ul>
          { this.renderShippingList() }
        </ul>
        {this.renderSendShipmentButton()}
      </div>
    );
  }
}
