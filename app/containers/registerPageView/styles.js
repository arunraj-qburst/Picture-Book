import React from 'react';
import {StyleSheet} from 'react-native';

var signUpStyles = StyleSheet.create ({
  
input:{
paddingTop:10
},

logoWrapper:{

flex:2,
backgroundColor:'#ffc299'

},

logo:{

 fontSize:40,
 textAlign:'center',
 paddingTop:80,
 paddingBottom:80 

},

 bodyWrapper:{

 flex:3, 
  paddingRight:40,
  paddingLeft:40,

  },

  defaultButton: {
    color: '#fff',
    backgroundColor: '#ff694d',
    marginTop:40,
    padding:10
  },
   signInWrapper:{
     
        flexDirection: 'row',
        justifyContent: 'space-around',
  },
 smallLinkTextsRight: { 
      paddingTop:50, 
      textAlign:'right',
      paddingBottom:20
  },
   smallLinkTextsLeft: { 
      paddingTop:50, 
      textAlign:'left',
      paddingBottom:20
  },

});

export default signUpStyles;