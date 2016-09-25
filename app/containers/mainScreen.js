'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

import Button from '../components/Button'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';


var ScrollableTabView = require('react-native-scrollable-tab-view');
import TabOne from './TabOne'
import TabTwo from './TabTwo'


class MainScreen extends Component {
    render(){
        return(
            <View style={{flex : 1}}>
               
                <ScrollableTabView>
                <TabOne tabLabel="One" />
                <TabTwo tabLabel="Two" />
                <TabOne tabLabel="Three" />
                </ScrollableTabView>
            
            </View>


        );
    }
}

export default MainScreen