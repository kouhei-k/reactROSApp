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

export default class TopicDetail extends Component{
    constructor(props) {
        super(props);

        this.state = {
            //ros: undefined,
            list: [],
        };
    }

    componentDidMount(){
        //alert(this.state.ros);
        const ros = this.props.navigation.state.params.drawerProps;
        ros.getNodes( (nodes) => {
            this.setState({list: nodes});
        });
        //alert(this.state.list);
    }

    render(){
        //const {num } = params.num;
        return(
            <ScrollView style = {{backgroundColor: 'white'}}>
                {
                    this.state.list.map((l, i) => (
                    <ListItem
                        key={i}
                        //leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l}
                        //subtitle={l.subtitle}
                        bottomDivider
                    />
                    ))
                }


                
                 <Card title="Skype Call">
                    <Text style={{marginBottom: 10}}>
                        Topic detail   
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='state.list' 
                        onPress = {() => {
                            /*
                            const ros = this.props.navigation.state.params.drawerProps;
                            ros.getNodes((list) => {
                                alert(list);
                            });
                            */
                           let url = 'skype:echo123?call';
                           //let url = 'skype:live46e1f638f9fbf640';
                           Linking.openURL(url).catch(err =>{
                               alert('An error occurred');
                           })
                            //alert(Object.keys(this.props.navigation.state.params.drawerProps));
                         //this.props.navigation.state.params.screenProps += 1;
                         //.drawerNavigation.state.params
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
    }
  });