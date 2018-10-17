import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,

} from 'react-native';

import {
  Text,
  Card,
  Icon,
  ListItem,
  Button,
} from 'react-native-elements';


export default class HomeScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            params: [],
        };
    }
    render(){

        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Check screenProps'
                onPress = {() => alert(Object.keys(this.props.screenProps))} />

                <Button
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Go Topic'
                onPress = {() => {
                    alert(Object.keys(this.props.navigation));
                    this.props.navigation.navigate({routeName: 'Topic', params:{title: "hoge"}});
                    }} />
            </View>
        );
    }
}