'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';

const styles = require('./styles.js');
//import styles from './stylesb'
const { string, number, oneOf } = PropTypes;

export default class PBGridItem extends Component {

onSelect(){
    this.props.onPress( );
  }
  render() {
    const { title, author, type, price } = this.props;

    return (
          <View style={styles.itemWrapper}   >
            <TouchableHighlight onPress= {()=>{this.onSelect()}}   >
            <View style={styles.itemContainer}>
              { type=='bundle' ? <Text style={styles.badge}>B</Text> : null }
              <Text style={styles.bookTitle}>{title}</Text>
              <Text style={styles.bookAuthor}>{author}</Text>
              <Image 
                source={require('../../images/sample1.png')}
                style={styles.thumbnail}
              />
              <Text style={styles.bookPrice}>E{price}</Text>
            </View>
            </TouchableHighlight>
          </View>
        );
  }
}

PBGridItem.propTypes = {
  title: string,
  author: string,
  price: number,
  thumbnailImageUrl: string,
  type: oneOf(['book', 'bundle'])

};
