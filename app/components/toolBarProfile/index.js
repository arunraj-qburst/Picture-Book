
import React, { Component } from 'react';
import editImage from '../../images/iconedit.png';
import backImage from '../../images/arrow-back.png';
import style from './styles';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  ToolbarAndroid
} from 'react-native';


export default class Header extends Component {
constructor(props) {
  super(props);

  this.state = {
  	user:this.props.data.user
  };
}


render(){

	return(


 			
            <ToolbarAndroid
            navIcon= {backImage} 
             title="Profile"
             actions={toolBarActions} 
             style ={style.wrapper}
            onActionSelected={()=>{this.props.edit()}}/>



        );

      }
}


var toolBarActions =[ 
  {title: 'Edit', icon:editImage, show: 'always'}
];







         

