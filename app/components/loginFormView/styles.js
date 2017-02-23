import React from 'react';
import {StyleSheet} from 'react-native';

var loginFormStyle = StyleSheet.create ({
 
container:{
padding:30
},

input:{
height:40,
marginBottom:20,
paddingHorizontal:20,
backgroundColor:'rgba(255,117,26,0.1)',
color:'rgba(65,26,0,1)'

},

button:{
backgroundColor:'rgba(255,117,26,0.3)',
paddingVertical:15
},


buttonTxt:{
color:'rgba(255,117,26,0.8)',
textAlign:'center',
fontWeight:'700',
fontSize:20
}


 

});

export default loginFormStyle;