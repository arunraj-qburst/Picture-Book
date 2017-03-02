import React from 'react';
import { MediaQueryStyleSheet } from "react-native-responsive";
import globalStyles from '../../styles/styles';

var loginFormStyle = MediaQueryStyleSheet.create ({

    container:{
    paddingLeft:60,
    paddingRight:60
    } 
},
//...............Ipad Air 1,2 ... .........................
{

  "@media (min-device-width: 320) and (max-device-height: 480)":{

  },

  //....................Ipad Pro...............................
  "@media (min-device-width: 375) and (max-device-height: 677)":{

      container:{
        paddingLeft:90,
        paddingRight:90 
      } 
  } 
} 

);

export default {...loginFormStyle,...globalStyles};