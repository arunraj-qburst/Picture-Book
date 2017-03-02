import React from 'react';
import { MediaQueryStyleSheet } from "react-native-responsive";
import globalStyles from '../../styles/styles';
import { buttonColor } from '../../styles/variables';

var signUpFormStyle = MediaQueryStyleSheet.create ({


container:{
padding:30,
flex:1,
justifyContent:'center'
},
buttonLogin:{
paddingVertical:7,
backgroundColor:buttonColor,
marginTop:5,
borderRadius: 30
},
loginContainer:{
paddingLeft:100,
paddingRight:100
},
loginText:{
 textAlign:'center',
 marginTop:20
},
Register:{
marginTop:10
}

},
//.................. Media Query............................

{
//..................Ipad Air 1,2 Media Query........................
  "@media (min-device-width: 320) and (max-device-height: 480)":{

    loginText:{
      marginTop:10,
      fontSize:8
    }


},

  //................ Ipad pro Media Query....................................
    "@media (min-device-width: 375) and (max-device-height: 677)":{
      inputContainer:{
        paddingLeft:40,
        paddingRight:40
      },

      loginText:{
        marginTop:10,
        fontSize:8
      },
      inputValidationText:{
        fontSize:7,
        margin:4

      }

    }

}


);

export default {...signUpFormStyle,...globalStyles} ;
