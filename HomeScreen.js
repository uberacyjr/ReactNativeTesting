import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList,Button,Image} from 'react-native';

export default class HomeScreen extends React.Component {
  state ={
    pessoas : []
  };

  componentDidMount (){
    fetch("https://reqres.in/api/users?page=2" )
    .then(response => response.json())
    .then(data => {
      this.setState({pessoas:data.data});
      this.setState({loading:false});
    });
  }
  renderItem = ({item}) =>{
    return( 
      <View>
        <Image source={{uri:item.avatar}}  style={{width: 200, height: 200}} />
        <View>
          <Text>{item.last_name}</Text> 
        </View>
      </View>
  );
 }
  render() {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ height: 400, backgroundColor: 'steelblue'}}>
          <FlatList data={this.state.pessoas} renderItem={this.renderItem}  keyExtractor={item=>item.last_name} />
        </View>
        <View style={{ height: 200, backgroundColor: 'steelblue'}}>
          <Button title="Nevegar para produtos" style={{width:20}} onPress={()=>{this.props.history.push("/products")}}/>
        </View>
      </View>
      );
    }
  }