import React from 'react';
import { MediaQueryStyleSheet } from "react-native-responsive";
import globalStyles from '../../styles/styles';
import {
fontColor,
lightColor,
formColor,
smallLabelColor
} from '../../styles/variables';

const userDetailsStyles = MediaQueryStyleSheet.create({

container:{
flex:1,
paddingTop:40,
justifyContent:'center',
marginLeft:20,
marginRight:20

},
detailsCaption:{
fontWeight:'bold',
color:smallLabelColor,
fontSize:14,
fontWeight:'700'
},
details:{
marginTop:5,
marginBottom:5,
fontSize:20,
color:fontColor
},

mainDetailContainer:{
backgroundColor:formColor,
paddingBottom:20,
paddingTop:20,
paddingHorizontal:10
},

mainButtonContainer:{
backgroundColor:formColor,
marginTop:20,
paddingTop:10,
paddingBottom:10,
justifyContent:'center',
paddingHorizontal:10

},
buttonRegister:{
  marginTop:15
},
changePassWord:{

}


},

//.................Media Query........................
{

//.........................Ipad Air 1,2

"@media (min-device-width: 320) and (max-device-height: 480)":{
detailsCaption:{
fontSize:10
},
details:{
  fontSize:12

},

changePassWord:{
  fontSize:10

}



},

//....................Ipad Pro...............

"@media (min-device-width: 375) and (max-device-height: 677)":{
  detailsCaption:{
  fontSize:8
  },
  details:{
    fontSize:9

  },

  changePassWord:{
    fontSize:8

  },
  buttonRegister:{
    marginTop:10
  }

}

}


);
export default {...userDetailsStyles,...globalStyles};