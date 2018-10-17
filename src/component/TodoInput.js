import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  textInput: {
    flex: 3,
    backgroundColor: '#FFF',
    marginRight: 5,
  },
  FormInput: {
    flex: 3,
    backgroundColor: '#FFF',
    marginRight: 5,
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  }
});

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
      this.state = {text:''};
  }

  _onPress = () => {
    this.props.onPress(this.state.text);
    //this.ref.setNativeProps({ text: '' });
    this.setState({text:''});

  }
  render() {
    const {
      onPress,
    } = this.props;

    const {
      text,
    } = this.state;
    return (
        <View style={styles.container}>
          <Input 
            style={styles.FormInput}
            containerStyle={{ width: '60%' ,marginTop: 20}}
            inputStyle = {{height: 45,backgroundColor:"rgba(200,200,200,1)"}}
            placeholder='BASIC INPUT'
            onChangeText={text => this.setState({text: text})}
            value= {text}/>
          <Button
              title="追加"
              titleStyle={{ fontWeight: "700" }}
              containerViewStyle={{borderRadius: 5, marginTop: 20, marginLeft: 5 }}
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 80,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              borderRadius={5} 
              raised
              containerStyle={{ marginTop: 20, marginLeft: 5}}
              onPress={this._onPress}
          />
        </View>
    );
  }
}


/*
        <TouchableOpacity 
          style={styles.button}
          onPress={this._onPress}>
          <Text style={styles.buttonText}>追加</Text>
        </TouchableOpacity>


        <TextInput 
            style={styles.textInput}
            ref={(ref) => { this.ref = ref; }}/>
          <View style = {styles.button}>
            <Button
              title="追加"
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 200,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              raised
              containerStyle={{ marginTop: 20 }}
              onPress={this._onPress}
            />
          </View>
*/