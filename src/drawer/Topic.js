import React from 'react';
import { createDrawerNavigator, createStackNavigator,DrawerActions} from 'react-navigation';
import { Icon } from 'react-native-elements';

import TopicList from '../views/TopicList';
import Call from '../views/Call';
import Connect from '../views/Connect';



const TopicDrawerItem = createStackNavigator({
    Call: {
        screen: Call,
        
/*         ({props, navigation}) => {
         return(
            <TopicDetail
                {...props}
                screenProps={{drawerNavigation:navigation}}
            />
         );},
*/     
/*
        navigationOptions: ({navigation}) => ({
          title: 'Call',
          headerLeft: (
            <Icon
              name="menu"
              size={30}
              type="entypo"
              iconStyle={{ paddingLeft: 10 }}
              onPress={() =>{ 
                  navigation.openDrawer();
                  //navigation.dispatch(DrawerActions.openDrawer());
                  //props.screenProps.drawerProps.openDrawer();
                  }}
            />
          ),
        }),
        */
    },
    Connect:{
        screen: Connect,
    },
    TopicHome: {
        screen: TopicList,
    },
},{
    initialRouteName: 'Connect',
});



TopicDrawerItem.navigationOptions = {
    drawerLabel: 'Topic',
    drawerIcon: ({ tintColor }) => (
    <Icon
        name="list"
        size={30}
        iconStyle={{
            width: 30,
            height: 30
        }}
        type="material"
        color={tintColor}
    />
    ),

  };


const TopicStack = ({screenProps}) => 
    (<TopicDrawerItem screenProps = {screenProps} />);

export default TopicStack;
//export default TopicDrawerItem;