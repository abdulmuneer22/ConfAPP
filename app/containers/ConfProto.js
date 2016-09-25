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

import Dimensions from 'Dimensions'
const window  = Dimensions.get('window')

// @connect(state => ({
//   state: state.counter
// }))
class ConfProto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <View style={styles.container}>
      
      <TouchableHighlight style={{alignItems: 'flex-end'}} onPress={()=>{this.props.navigator.push({name:'mainScreen'})}}><Text style={{fontWeight : 'bold'}}>SKIP</Text></TouchableHighlight>
      
      <View style={{alignItems : 'center'}}>
      <Text style={{textAlign : 'center',marginBottom : 2,fontWeight : 'bold'}}>Connect to find friends</Text>
      <Text style={{textAlign : 'center'}}>Connect your social networks to build your {'\n'}profile and get recommendations for talks,{'\n'}speakers , startups and attenders</Text>
     
      <Image style = {{resizeMode : 'contain',width : window.width*0.7, height : 300,alignSelf :'center'}}
      source={require('../components/image.png')}/>

      </View>


      <View style={{alignItems : 'center'}}>
      
      <View style={{flexDirection : 'row',width : window.width*0.7}}>
      
      <Button ButtonText={"Connect Twitter"} ButtonColor = {'#4fabeb'}/>
      


      </View>
      
      <View style={{flexDirection : 'row',width : window.width*0.7}}>
      <View style={{marginRight : 5,flex : 1}}>
      <Button ButtonText={"Connect AngelList"} ButtonColor = {'#4f5b67'}/>
      </View>

      <View style={{ flex : 1}}>
      <Button ButtonText={"Connect Facebook"} ButtonColor = {'#395895'}/>
      </View>

      </View>

      <View style={{flexDirection : 'row',width : window.width*0.7}}>

      <View style={{marginRight : 5 , flex : 1}}>
      <Button ButtonText={"Connect GitHub"} ButtonColor = {'#3d83c1'}/>
      </View>

      <View style={{flex : 1}}>
      <Button ButtonText={"Connect LinkedIn"} ButtonColor = {'#0077b4'}/>
      </View>


      </View>
      </View>
      
      
      </View>

      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //margin : 10,
    padding : 10,
    //borderColor : 'red',
    //borderWidth : 1,
    backgroundColor : '#ffffff'
  },

  
  SkipButton:{
    backgroundColor : '#37474F',
    borderColor : '#37474F'
  },

  ButtonText:{
    fontSize : 14,
    color : 'white'
  }

});

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(ConfProto);
