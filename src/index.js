import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './containers/LandingPage';
import QAComplete from './components/QAComplete';
import RootReducer from './reducers';

//let store = createStore(rootReducer);

const connectWithReduxMiddleWare = applyMiddleware(ReduxPromise)(createStore);

class Root extends React.Component {
  render() {
    return(
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/qaComplete" component={ QAComplete } />
              <Route path="/" component={ LandingPage } />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};

ReactDOM.render(
  <Root store={connectWithReduxMiddleWare(RootReducer)} />, document.getElementById('root'));
registerServiceWorker();
