import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

var itemArray = new Array(25).fill('empty');

export default class ScratchWin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
