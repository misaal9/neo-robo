import axios from 'axios';

export const FETCH_ROBOTS = 'FETCH_ROBOTS';

export const ON_LOAD = 'onLoad';
export const QA_IN_PROGRESS = 'qaInProgress';
export const QA_COMPLETE = 'qaComplete';
export const CHANGE_APP_STATUS = 'changeAppStatus';

export const ADD_TO_RECYCLED = "ADD_TO_RECYCLED";
export const ADD_TO_EXTINGUISH = "ADD_TO_EXTINGUISH";
export const UPDATE_ROBOT_QA_CATEGORY = "UPDATE_ROBOT_QA_CATEGORY";
export const ADD_TO_FACTORY_SECOND = "ADD_TO_FACTORY_SECOND";
export const ADD_TO_QA_PASS = "ADD_TO_QA_PASS";

export const ADD_TO_SHIPPING = "ADD_TO_SHIPPING";
export const REMOVE_FROM_SHIPPING = "REMOVE_FROM_SHIPPING";

const url = 'http://localhost:8080/api/robots';

export const fetchRobots = () => {
  let request = axios.get(url);
  return {
    type: FETCH_ROBOTS,
    payload: request
  }
}

export const changeAppStatus = (newStatus) => {
  return {
    type: CHANGE_APP_STATUS,
    newStatus
  }
};

export const addToRecycle = (robot) => {
  return {
    type: ADD_TO_RECYCLED,
    payload: robot
  }
}

export const addToExtinguish = (robot) => {
  return {
    type: ADD_TO_EXTINGUISH,
    payload: robot
  }
}

export const updateRobotQaCategory = (id, category) => {
  return {
    type: UPDATE_ROBOT_QA_CATEGORY,
    payload: {
      id,
      category
    }
  }
}

export const addToShipping = (robot) => {
  return {
    type: ADD_TO_SHIPPING,
    robot
  }
};

export const removeFromShipping = (robot) => {
  return {
    type: REMOVE_FROM_SHIPPING,
    robot
  }
};
