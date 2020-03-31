import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { Button } from "native-base";
import { FontAwesome } from '@expo/vector-icons';

var itemArray = new Array(25).fill('empty');

export default class ScratchWin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        randomNumber: ""
      };
    }
  
  componentDidMount()
  {
    this.setState({randomNumber: this.generateRandomNumber()})
  };

  generateRandomNumber = () =>
  {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({ randomNumber, isScratched: true});
    return randomNumber;
  };

  scratchItem = (itemNumber) => {
    if (this.state.randomNumber == itemNumber)
    {
      itemArray[itemArray] == 'Lucky';
    }
    else
    {
      itemArray[itemArray] == "Unlucky";
    }
    this.forceUpdate;
  };

  itemIcon = (itemNumber) => {
    if (itemArray[itemNumber] == 'Lucky')
    {
      return 'dollar'
    }
    else if (itemArray[itemNumber] == 'Unlucky')
    {
      return 'frown-o'
    }
    else
      return 'circle'
  };

  itemColor = (itemNumber) => { 
    if (itemArray[itemNumber] == "Lucky") {
      return "green";
    } else if (itemArray[itemNumber] == "Unlucky") {
      return "red";
    } else return "gray";
  };
  
  showAllItem = () => {
    itemArray.fill('Unlucky');
    itemArray[this.state.randomNumber].fill('Lucky');
    this.forceUpdate();
  };

  resetGame = () => {
    this.setState({ randomNumber: this.generateRandomNumber() }, () =>
    {
      itemArray.fill('empty');
      this.forceUpdate;
    })
   };

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
