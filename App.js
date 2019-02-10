import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import HomeScreen from './HomeScreen';
import Product from './Product';
export default class App extends Component {
  render(){
    return(
      <NativeRouter>
        <View>
            <Switch>
              <Route exact path="/" component={HomeScreen}></Route>
              <Route path="/products" component={Product}></Route>
            </Switch>
        </View>
      </NativeRouter>
    );
  } 
}


// export default class App extends Component<Props> {
//   state = {
//     pessoas :[],
//     nome: "",
//     text : "",
//     loading: true
//   };

//   componentDidMount (){
//     fetch("https://reqres.in/api/users?page=2" )
//     .then(response => response.json())
//     .then(data => {
//       this.setState({pessoas:data.data});
//       this.setState({loading:false});
//     });
//   }

//   render() {
//     if(this.state.loading){
//       return (
//         <View >
//           <Text style={{color: 'red'}}>
//           Loading ...
//           </Text>
//         </View>
//       );
//     }else{
//       return (
//         <View >
//           <FlatList data={this.state.pessoas} renderItem={({item}) => <Text>{item.last_name}</Text>}  keyExtractor={item=>item.last_name} />
//         </View>
//       );
//     }
//   }
// }