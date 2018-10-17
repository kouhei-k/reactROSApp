import React from 'react';
import { createDrawerNavigator, createStackNavigator,DrawerActions} from 'react-navigation';
import { Icon } from 'react-native-elements';

import TopicList from '../views/TopicList';
import TopicDetail from '../views/TopicDetail';
import Connect from '../views/Connect';



const TopicDrawerItem = createStackNavigator({
    TopicDetail: {
        screen: TopicDetail,
/*         ({props, navigation}) => {
         return(
            <TopicDetail
                {...props}
                screenProps={{drawerNavigation:navigation}}
            />
         );},
*/     
        navigationOptions: ({navigation}) => ({
          title: 'TopicDetail',
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