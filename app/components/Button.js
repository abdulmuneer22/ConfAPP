'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/Ionicons';



class Button extends Component{
constructor(props){
    super(props);


    this.state={
        ButtonColor : this.props.ButtonColor,
        tickMark : 'yes'
    }
}




render(){

    
    return(

        
        
        <TouchableHighlight style={
            {
                 flexDirection : 'column',
                    alignItems : 'center',
                    flex : 1,
                    backgroundColor : this.state.ButtonColor,
                    height : 45,
                    borderColor : this.props.ButtonColor,
                    borderWidth : 3,
                    borderRadius : 0.5,
                    justifyContent : 'center',
                    marginBottom :10,
                    marginTop : 10

            }
        
        }>
            <View style={{flexDirection :'row'}}>
            <Text style=
            {{
                    fontSize : 12,
                    color : 'white',
                    margin : 5,
                    fontWeight : 'bold'


            }} >
            {this.props.ButtonText} 
            </Text>

            {
                this.props.ButtonText === "Connect Twitter" ? 
                <Text style={{
                marginLeft : 5
                }}>

                <Icon name={'ios-checkmark'} size={30} color="white" />


                </Text>
                : null


            }


            
            </View>

            
            
        </TouchableHighlight>
        

    );
}

}


export default Button