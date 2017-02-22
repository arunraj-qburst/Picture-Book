'use strict';

 
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { ActionCreators } from '../../actions'
import { bindActionCreators } from 'redux'

import React, { Component, PropTypes } from 'react'; 
import PBGridItem from '../bookGridItem';
import { StyleSheet, Text, ListView, View } from 'react-native';

const styles = require('./styles.js');
const { array } = PropTypes;

class GridViewLayout extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataSource),
    };
  }
  onSelect= ()=>{
    console.log('on select prss')
    this.props.onBookDetail({ key: 'BookDetail',index:3})
  }

  renderGridItem = (book) => {
    console.log('In renderGridItem');
    const { title, author, type, price } = book;

    return <PBGridItem
              title={title}
              author={author}
              onPress={this.onSelect}
              type={type}
              price={price}
           />;
  }

  render() {

    return (<ListView contentContainerStyle={styles.gridWrapper}
              dataSource={this.state.dataSource}
              renderRow={(gridItem) => this.renderGridItem(gridItem) }
            >
            </ListView>);
  }
}

GridViewLayout.propTypes = {
  dataSource: array
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

export default connect(mapStateToProps, mapDispatchToProps)(GridViewLayout); 