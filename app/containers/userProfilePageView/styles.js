import React from 'react'; 
import {StyleSheet} from 'react-native'; 
const userProfileStyles = StyleSheet.create(

{
 mainWrapper:{
    flexDirection:'column',
    backgroundColor: '#ffe0cc',
    flex:1
  },

profileImage:{
	width:200,
	height:200,
	borderColor:'white',
	borderRadius:100,
	borderWidth:3
},


profileImageWrapper:{
	borderColor:'#ff6933',
	borderWidth:3,
	borderRadius:100,
	 
	alignItems: 'center'
},

profileWrapper:{
	paddingBottom:10,
	paddingTop:20,
	flex:1,	
	backgroundColor: '#ffc299',
	alignItems: 'center'
}


}


);


     

export default userProfileStyles