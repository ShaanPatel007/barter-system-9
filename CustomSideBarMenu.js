import React , {Component} from 'react';
import {View , StyleSheet , Text , TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
  render(){
    return(
      <View style = {{flex:1}}>
      <View stlye = {styles.drawersItemsContainer}>
      <DrawerItems {...this.props}/>
      </View>
      <View style = {styles.logOutContainer}>
      <TouchableOpacity style = {styles.logOutButton} 
      onPress = {() =>{this.props.navigation.navigate("UserLoginAndSignupScreen")
      firebase.auth().signOut()}}>
      <Text style = {styles.logOutText}>Log Out</Text>
      </TouchableOpacity>
      </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
   drawersItemsContainer:{ flex:0.8 },
   logOutContainer : { flex:0.2, justifyContent:'flex-end', paddingBottom:30 }, 
   logOutButton : { height:30, width:'100%', justifyContent:'center', padding:10 }, 
   logOutText:{ fontSize: 30, fontWeight:'bold' }
   })