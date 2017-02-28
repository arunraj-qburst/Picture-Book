import React from 'react';
import {StyleSheet} from 'react-native';
import * as GlobalStyles from '../../styles'

var signUpFormStyle = StyleSheet.create ({
 
container:{
padding:30,
flex:1,
justifyContent:'space-between'
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
},
buttonLogin:{
paddingVertical:7,
backgroundColor:'rgba(255,117,26,0.3)',
marginTop:5

},
loginContainer:{
marginTop:5,
paddingLeft:50,
paddingRight:50
},
loginText:{
 textAlign:'center'
}


 

});

signUpFormStyle =  { ...signUpFormStyle,GlobalStyles} 

export default signUpFormStyle ;