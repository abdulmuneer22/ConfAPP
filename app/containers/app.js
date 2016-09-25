import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import CounterApp from './counterApp';
import ConfProto from './ConfProto';
import Entry from './entry';



const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Entry/>
      </Provider>
    );
  }
}


export default Main; 