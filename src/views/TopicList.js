import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  FlatList,

} from 'react-native';

import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  Icon,
  ListItem,
} from 'react-native-elements';

renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      badge={{ value: 0, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
    />
  )

const TopicList = ({navigation, topicProps})=>(
            <View style={styles.container}>
                <FlatList
                    data = {rosProps.topic}
                    renderItem = {this.renderItem}
                />
            </View>
);


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF'
    }
  });

  export default TopicList;