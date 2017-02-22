'use strict';

 
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { ActionCreators } from '../../actions'
import { bindActionCreators } from 'redux'

import React, { Component, PropTypes } from 'react';
import BookDetailViewStatusBar from '../../components/BookDetailViewStatusBar'
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

const styles = require('./styles.js');
const { string, number, oneOf, bool } = PropTypes;

class BookDetailVeiw extends Component {
 
  render() {
     console.log('this.props.bookData'+this.props.navigationState);
    const {
      title,
      author,
      coverImageUrl,
      titleImageUrl,
      price
    } = this.props.bookData;

    return (
      <ScrollView>
        <BookDetailViewStatusBar
          title={title}
          author={author}
          coverImageUrl={coverImageUrl}
          titleImageUrl={titleImageUrl}
          price={price}
          purchased={false}
        />
        <View style={styles.description}>
          <Text>
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
            Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,
            when an unknown printer took a galley of
            type and scrambled it to make a type specimen
            book. It has survived not only five centuries,
            but also the leap into electronic typesetting,
            remaining essentially unchanged.
            It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing
            software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

BookDetailVeiw.propTypes = {
  title: string,
  author: string,
  coverImageUrl: string,
  titleImageUrl: string,
  price: number,
  purchased: bool
};

// Redux part //
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
 
function mapStateToProps(state) {
  return { 
     navigationState: state.navigationState, 
  };
} 

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailVeiw); 