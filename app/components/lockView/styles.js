import React from 'react';
import {StyleSheet} from 'react-native';
import {
  MediaQueryStyleSheet
} from "react-native-responsive";
const lockview = MediaQueryStyleSheet.create(
{

      locked:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
      },
      lockIcon:{
         width:150,
         height:150
        },
        wrapper:{
          alignItems:'center',
          backgroundColor:'#ffc299',
          paddingTop:20,
          paddingBottom:20

        }

     
  
}

);



export default lockview;