import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList,Button} from 'react-native';
const style = StyleSheet.create({
container : {
    flex :1,
    backgroundColor: 'white'
    }
});
export default ({history}) => (
    <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ height: 100, backgroundColor: 'skyblue'}}>
          <Text>Produtos</Text>
        </View>
        <View style={{ height: 200, backgroundColor: 'skyblue'}}>
          <Button title="Navegar para home" style={{width:20}} onPress={()=>{history.push("/")}}/>
        </View>
      </View>
);