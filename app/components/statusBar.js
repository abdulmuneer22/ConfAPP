import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class StatusBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { statusBardisplayText, toggleStatus} = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>User Status : {statusBardisplayText}</Text>
      </View>
    );
  }
}



/*
This Component is used in counterApp.js which is the Component.
onPress will invoke methods which are redux methods
 




*/