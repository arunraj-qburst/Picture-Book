import React from 'react';
import {StyleSheet} from 'react-native';
const userProfileInputrStyles = StyleSheet.create({

container:{
padding:30,
flex:1
},

input:{
height:40,
marginBottom:20,
paddingHorizontal:0,
color:'rgba(65,26,0,1)'

},


button:{
backgroundColor:'rgba(255,117,26,0.3)',
paddingVertical:10,
paddingHorizontal:25,
marginTop:15
},


buttonTxt:{
color:'rgba(255,117,26,0.8)',
textAlign:'center',
fontWeight:'700',
fontSize:20
},
//..........................................................
mainDetailContainer:{
backgroundColor:'rgba(249, 237, 227,1)',
marginLeft:20,
marginRight:20,
paddingLeft:8,
paddingRight:8,
paddingBottom:20,
paddingTop:20

},

detailContainer:{
marginTop:10,
alignItems:'flex-start'
},
detailsCaption:{
fontWeight:'bold',
color:'rgba(149,139,132,1)',
fontSize:14,
fontWeight:'700'
},
details:{
marginTop:5,
marginBottom:5,
fontSize:20,
color:'rgba(65,26,0,1)'
},
mainButtonContainer:{
backgroundColor:'rgba(249, 237, 227,1)',
marginLeft:20,
marginRight:20,
paddingLeft:8,
paddingRight:8,
marginTop:20,
height:120,
paddingTop:10,
paddingBottom:10,
justifyContent:'center'

}



});

export default  userProfileInputrStyles;
