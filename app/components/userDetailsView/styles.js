import React from 'react';
import {StyleSheet} from 'react-native';
const userDetailsStyles = StyleSheet.create({

container:{
flex:1,
paddingTop:40
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
detailContainer:{
marginTop:10,
alignItems:'flex-start'

},

mainDetailContainer:{
backgroundColor:'rgba(249, 237, 227,1)',
marginLeft:20,
marginRight:20,
paddingLeft:8,
paddingRight:8,
paddingBottom:20,
paddingTop:20

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
}



});
export default userDetailsStyles;



