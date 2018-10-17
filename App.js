import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions
} from 'react-native';
import TodoInput from './src/component/TodoInput';
import TodoItem from './src/component/TodoItem';
import Topic from './src/drawer/Topic';
import Connect from './src/drawer/Connect';
import HomeScreen from './src/drawer/Home';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Header, Button} from 'react-native-elements';
import {createDrawerNavigator, DrawerItems, createSwitchNavigator, createStackNavigator} from 'react-navigation';


const SCREEN_WIDTH = Dimensions.get('window').width;

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
        <Button
      backgroundColor='#03A9F4'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='Check screenProps'
      onPress = {() => alert(Object.keys(this.props.navigation))} />
  </View>
);

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerItems {...props} />
    </View>
  </View>
);

const Drawer = createDrawerNavigator({
  
    Home: {
      screen: HomeScreen//({navigation}) => <HomeScreen screenProps={{drawerNavigation:navigation}}/>
    },
    
    Topic: {
      screen:Topic
      //({screenProps}) => <Topic 
      //  {...props}
      //  screenProps={{drawerNavigation:navigation}}/>
      //  screenProps = {screenProps} />
    },
    Profile: {
      screen:ProfileScreen//({navigation}) => <ProfileScreen screenProps={{drawerNavigation:navigation}}/>
    },
  },
  {
    initialRouteName: 'Topic',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.6,
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

Drawer.navigationOptions = ({ navigation }) => {
  return {
    
    headerLeft: 
        { icon: 'menu', 
          color: '#fff',
        }
          //onPress: () => navigation.navigate('DrawerToggle')
    }
};

const RootNavigator = createSwitchNavigator({
    Connect: {screen: Connect},
    Connected: {screen: Drawer},
  },
  {
    initialRouteName: 'Connect',
  }
);


export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }
  
  _delete = (index) => () => {
    const list = [].concat(this.state.list);
    list.splice(index, 1);

    this.setState({
      list,
    });
  }

  _done = (index) => () => {
    const list = [].concat(this.state.list);
    list[index].done = !list[index].done;

    this.setState({
      list,
    });
  }

  _onPress = (text) => {
    const list = [].concat(this.state.list);

    list.push({
      key: Date.now(),
      text: text,
      done: false,
    });

    this.setState({
      list,
    });
  }
  render() {
    const {
      list,
    } = this.state;
    return (
      /*
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Todo List', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          outerContainerStyles={{height: 53}}
        />
        <View style={styles.main}>
          <TodoInput onPress={this._onPress} />
          <View style={styles.todoListContainer}>
            <FlatList
              style={styles.todoList}
              data={list}
              renderItem={({ item, index }) => (
                <TodoItem 
                  onDone={this._done(index)}
                  onDelete={this._delete(index)}
                  {...item}
                />
              )}
            />
          </View>
        </View>
      </View>
      */
     <Drawer screenProps={5}/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    //alignItems: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  },
  todoListContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  todoList: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Title:{
    fontSize: 30,
    //fontFamily:'Roboto',
    margin: 20,
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});