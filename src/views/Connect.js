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
  Input,
} from 'react-native-elements';

import roslib from 'roslib';

import { NavigationActions } from 'react-navigation';


export default class TopicDetail extends Component{
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            ros_ip : ''
        };
    }

    render(){
        return(
            <ScrollView style = {{backgroundColor: 'white'}}>
                <Card 
                    title="Connect">
                    <View style = {styles.form}>
                        <Text
                            style = {styles.form_text}>
                        ws://
                        </Text>
                        <Input
                            style = {styles.input}
                            placeholder='ROSBRIDGE ADDRESS'
                            shake={true}
                            onChangeText ={ros_ip => this.setState({ros_ip})}
                            
                        />
                    </View>
                    <Button
                        //icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Connect to rosbridge server' 
                        onPress = {() => {
                            const ros = new roslib.Ros({
                                url: 'ws://' + this.state.ros_ip
                            });
                            ros.on('connection',() => {
                                alert('Connected to rosbridge server');
                                this.props.navigation.navigate(
                                    {
                                        routeName: 'TopicDetail', 
                                        params: {drawerProps: ros}
                                    });
                            })
                            ros.on('error', error => {
                                alert('Error connecting to rosbridge server');
                            })

                            ros.on('close', () => {
                                alert('Connection to rosbridge server was closed');
                                this.props.navigation.navigate(
                                    {
                                        routeName: 'Connect'
                                    });
                            })
                        }} />
                </Card>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    form: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 15,
    },
    input: {
        flex: 5,
    },
    form_text: {
        marginTop: 8,
        flex: 1,
        fontSize: 16,
        fontFamily:'Roboto',
    }
  });