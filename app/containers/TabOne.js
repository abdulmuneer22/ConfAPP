
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


//import Labels from '.app/labels';


class TabOne  extends Component {
  render() {
    return (
      <View style={{
        flex: 1, backgroundColor: 'blue'
      }}>
      <Text>{this.props.tabLabel}</Text>
      </View>
      
    );
  }
}

export default TabOne