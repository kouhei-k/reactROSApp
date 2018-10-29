import React from 'react';
import { createDrawerNavigator, createStackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';

import Call from '../views/Call';
import TopicDetail from '../views/Connect';

const TopicDrawerItem = createStackNavigator({
    TopicDetail: {
        screen: Call,
        navigationOptions: ({ props, navigation }) => ({
          title: 'Connect',
          /*
          headerLeft: (
            <Icon
              name="menu"
              size={30}
              type="entypo"
              iconStyle={{ paddingLeft: 10 }}
              onPress={() => {
                  //Object.keys(props);
                  navigation.openDrawer();
                  }}
            />
          ),
          */
        }),
    },
});



TopicDrawerItem.navigationOptions = {
    drawerLabel: 'Connect',
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

export default TopicDrawerItem;