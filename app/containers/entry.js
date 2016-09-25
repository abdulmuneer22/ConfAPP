import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import CounterApp from './counterApp';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Navigator
} from 'react-native';

import ConfProto from './ConfProto'
import MainScreen from './mainScreen'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class Entry extends Component {

configureScene(route){
    switch(route.name){

    case 'splashScreen':
    return Navigator.SceneConfigs.FloatFromBottom


    default :
    return Navigator.SceneConfigs.FloatFromLeft
  }}


  renderScene(route,navigator){

    switch(route.name){

    case 'confproto':
    return <ConfProto  navigator={navigator} />

    case 'mainScreen':
    return <MainScreen navigator={navigator}/>

    default :
    return <ConfProto  navigator={navigator} />



  }
}




  render() {
    return (
      

      <Navigator
      initialRoute={{name: 'confproto'}}
      renderScene={this.renderScene.bind(this)}
      configureScene={this.configureScene.bind(this)}
      
      />
      
    );
  }
}


export default Entry; 