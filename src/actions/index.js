import axios from 'axios';

export const FETCH_ROBOTS = 'FETCH_ROBOTS';

export const ON_LOAD = 'onLoad';
export const QA_IN_PROGRESS = 'qaInProgress';
export const QA_COMPLETE = 'qaComplete';
export const CHANGE_APP_STATUS = 'changeAppStatus';

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
