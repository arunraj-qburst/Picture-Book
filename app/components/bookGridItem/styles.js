'use strict';
var React = require('react-native');
import { Dimensions } from 'react-native';
import { MediaQueryStyleSheet } from 'react-native-responsive';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

console.log(Dimensions.get('window'));
var styles = MediaQueryStyleSheet.create({
    itemWrapper: {
      height:205,
      flexGrow: 1,
      margin: 5,
    },
    itemContainer: {
      flexGrow: 1,
      alignItems: 'center',
      width:160,
      backgroundColor: '#F6F6F6',
      borderWidth: 1,
      borderColor: '#BEBEBE',
    },
    badge:{
      position: 'absolute',
      left: 0,
      top: 0,
      fontWeight:'bold',
      fontSize:20,
    },
    bookTitle:{
      fontSize: 15,
      fontWeight:'bold',
      paddingBottom: 5,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
    },
    bookAuthor: {
      paddingBottom: 5,
    },
    // titleAndAuthorWrapper: {
    //   textAlign: 'center',
    //   flexGrow: 1,
    // },
    thumbnail:{
      width: 100,
      height: 100,
    },
    bookPrice:{
      color: '#F05555',
      fontWeight:'bold',
      fontSize:20,
      paddingTop: 5,
    },
  },
  {
  "@media (min-device-width: 320) and (min-device-height: 533.33)": {
      itemContainer: {
        width:150,
      }
    },
  "@media (min-device-width: 360) and (min-device-height: 592)": {
    itemContainer: {
      width:170,
    }
  },
  "@media (min-device-width: 384) and (min-device-height: 592)": {
    itemContainer: {
      width:182,
    }
  }
});

module.exports = styles;
