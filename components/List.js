import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class List extends Component {
    state = {  }
    render() { 
        return (
            <View style={{alignItems: 'center'}}>
            <Text>Hello {this.props.name}!</Text>
            </View>
          );
    }
}
 
export default List;