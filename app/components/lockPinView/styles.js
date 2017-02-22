import React from 'react';
import {StyleSheet} from 'react-native';
import {
  MediaQueryStyleSheet
} from "react-native-responsive";
const lockViewPin = MediaQueryStyleSheet.create(
{


  wrapper:{
    backgroundColor:'#ffe0cc',
    paddingLeft:40,
    paddingRight:40

  },

  btn:{

    color:'#ff4500',
    paddingTop:20,
    paddingBottom:20,
    marginTop:100
  } ,

  input:{

  fontSize:15,
  color:'black',
  borderTopColor:'#FFFFFF',
  paddingTop:30,
  marginBottom:30


  } 

     
  
}

);



export default lockViewPin;