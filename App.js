import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import {Header, Button} from 'react-native-elements';
import {createDrawerNavigator, DrawerItems, createSwitchNavigator, createStackNavigator} from 'react-navigation';
import roslib from 'roslib';
import BackgroundFetch from "react-native-background-fetch";

const SCREEN_WIDTH = Dimensions.get('window').width;



export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }
  
  componentDidMount(){
    const ros = new roslib.Ros({
      url: 'ws://192.168.4.93:9090' 
    });
    ros.on('connection',() => {
        alert('Connected to rosbridge server');
    });
    ros.on('error', error => {
        alert('Error connecting to rosbridge server');
    });
    ros.on('close', () => {
      alert('Connection to rosbridge server was closed');
    });
    
    const skype_server = new roslib.Service({
      ros: ros,
      name: 'skype_server',
      serviceType: "tms_rc_double/skype_srv",
    });
    //ROSのサービスを生成
    skype_server.advertise((req,res) => {
      try{
          let url = 'skype:' + req.id + '?call&amp;video=true';
          //IDから音声+ビデオ通話を発信するURLを生成
          alert(url);
          Linking.openURL(url);
          res.success = 1;
      }catch(e){
          alert(e);
          res.success = 0;
      }
    });
  
    // Optional: Query the authorization status.
    BackgroundFetch.status((status) => {
      switch(status) {
        case BackgroundFetch.STATUS_RESTRICTED:
          console.log("BackgroundFetch restricted");
          break;
        case BackgroundFetch.STATUS_DENIED:
          console.log("BackgroundFetch denied");
          break;
        case BackgroundFetch.STATUS_AVAILABLE:
          console.log("BackgroundFetch is enabled");
          break;
      }
    });
  }
  
  render() {
    const {
      list,
    } = this.state;
    return (

     <View style={styles.container}>
  </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
  },
});