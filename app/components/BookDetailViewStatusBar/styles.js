'use strict';
var React = require('react-native');

var styles = React.StyleSheet.create({
  coverImage: {
    height:180,
    opacity: 0.6
  },
  titleBar: {
    height: 100,
    backgroundColor: '#F05555',
    alignItems: 'flex-start'
  },
  titleImage: {
    position: 'absolute',
    left: 15,
    top: 135,
    height: 130,
    width: 120,
    zIndex: 2,
  },
  bookTitle: {
    paddingTop: 10,
    paddingLeft: 160,
    color: '#FDFDFD',
    fontWeight: 'bold',
    fontSize: 16
  },
  bookAuthor: {
    color: '#FDFDFD',
    paddingLeft: 160,
    fontSize: 12,
    paddingTop: 5,
  },
  bookPrice: {
    alignSelf:'flex-end',
    paddingRight: 20,
    fontSize: 22,
    color: '#FDFDFD',
    fontWeight: 'bold',
  },
  titleButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleButtonContainer: {
    backgroundColor: '#F05555',
    color: '#FDFDFD',
    height: 30,
    justifyContent: 'center',
    flex: 0.5,
    margin: 5,
  },
  titleButton: {
    fontSize: 15,
    color: '#FDFDFD'
  }
});

module.exports = styles;
