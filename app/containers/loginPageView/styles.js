import React from 'react';
import { MediaQueryStyleSheet } from "react-native-responsive";


var loginstyle = MediaQueryStyleSheet.create ({

container:{

backgroundColor: '#ffe0cc',
flex:1

},

logoContainer:{
flexGrow:1,
alignItems:'center',
justifyContent:'center'
},

logoImage:{

width:100,
height:100

},

logo:{

fontSize:40,
fontWeight:'400',
color:'rgba(255,117,26,0.8)'
},

inputContainer:{

}

},
// media query
{
// Ipad Air 1,2 Media Query......................................
  "@media (min-device-width: 320) and (max-device-height: 480)":{

    logo:{
    fontWeight:'400',
    fontSize:20,
    marginTop:30
  },
  logoImage:{

  width:50,
  height:50

},

inputContainer:{
flex:2
}

},


// Ipad pro Media Query....................................
  "@media (min-device-width: 375) and (max-device-height: 677)":{

    logoImage:{

    width:50,
    height:50

  },

logo:{

  fontSize:20,
  marginTop:10

},
inputContainer:{
flex:2
}


  }

}


);

export default loginstyle;
