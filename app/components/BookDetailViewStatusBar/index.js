'use strict';
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Button from 'react-native-button';

const styles = require('./styles.js');
const { string, number, bool} = PropTypes;

export default class PBDetailViewStatusBar extends Component {
  render() {
    const { title,
            author,
            titleImageUrl,
            coverImageUrl,
            price,
            purchased
          } = this.props;
    const buttonProps = {
      containerStyle: styles.titleButtonContainer,
      style: styles.titleButton,
    };
    const buttonRail = purchased ? <View style={styles.titleButtonWrapper}>
                                      <Button {...buttonProps}>Read</Button>
                                   </View>
                                 : <View style={styles.titleButtonWrapper}>
                                      <Button {...buttonProps}>Buy</Button>
                                      <Button {...buttonProps}>Preview</Button>
                                   </View>;
    const priceText = purchased ? null
                                : <Text style={styles.bookPrice}>E {price}</Text>;

    return(
      <View>
        <Image
          source={require('../../../sample1.png')}
          style={styles.coverImage}
        />
        <Image
          source={require('../../../noddy.jpg')}
          style={styles.titleImage}
        />
        <View style={styles.titleBar}>
          <Text style={styles.bookTitle}>{title}</Text>
          <Text style={styles.bookAuthor}>by {author}</Text>
          { priceText }
        </View>
        { buttonRail }
      </View>
    );
  }
}

PBDetailViewStatusBar.propTypes = {
  title: string,
  author: string,
  titleImageUrl: string,
  coverImageUrl: string,
  price: number,
  purchased: bool,
};
