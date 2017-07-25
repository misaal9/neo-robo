import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './containers/LandingPage';
import Shipping from './containers/Shipping';
import RootReducer from './reducers';

//let store = createStore(rootReducer);

const connectWithReduxMiddleWare = applyMiddleware(ReduxPromise)(createStore);
const store = connectWithReduxMiddleWare(RootReducer);
export default store; //TEST only.

class Root extends React.Component {
  render() {
    return(
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/shipping" component={ Shipping } />
              <Route path="/" component={ LandingPage } />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};

ReactDOM.render(
  <Root store={store} />, document.getElementById('root'));
registerServiceWorker();
