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

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement , displayText ,sayhello} = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{counter}</Text>
        <Text>{displayText}</Text>
        
        
        
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={sayhello} style={styles.button}>
          <Text>Say Hello</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



/*
This Component is used in counterApp.js which is the Component.
onPress will invoke methods which are redux methods
 




*/