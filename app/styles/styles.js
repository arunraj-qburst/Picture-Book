//.................................Global Styles............................
import { MediaQueryStyleSheet } from "react-native-responsive";
import {

ipadPro,

// colors
textInputBG,
fontColor,
buttonColor,
buttonTxtColor,

// font size
textInputFontSizeIpadAir,
buttonTextFontSizeIpadAir,
textInputFontSizeIpadPro,
buttonTextFontSizeIpadPro



} from './variables';



export default  MediaQueryStyleSheet.create({

  input:{
  height:40,
  marginBottom:20,
  paddingHorizontal:20,
  backgroundColor:textInputBG,
  color:fontColor
  },

  button:{
  backgroundColor:buttonColor,
  paddingVertical:15,
  borderRadius: 30
  },


  buttonTxt:{
  color:buttonTxtColor,
  textAlign:'center',
  fontWeight:'700',
  fontSize:20
  }

},
// Media Query
{
//..................Ipad Air 1,2 Media Query........................
"@media (min-device-width: 320) and (max-device-height: 480)":{
          input:{

            fontSize:textInputFontSizeIpadAir,
            height:20,
            marginBottom:5,
            paddingHorizontal:10

          },
          button:{
            paddingVertical:5
          },
          buttonTxt:{
            fontSize:buttonTextFontSizeIpadAir
          }

},
//..................Ipad Pro Media Query.........................

"@media (min-device-width: 375) and (max-device-height: 677)":{

  input:{

    fontSize:textInputFontSizeIpadPro,
    height:15,
    marginBottom:5,
    paddingHorizontal:10

  },
  button:{
    paddingVertical:5
  },
  buttonTxt:{
    fontSize:buttonTextFontSizeIpadPro
  }
}



}
);
