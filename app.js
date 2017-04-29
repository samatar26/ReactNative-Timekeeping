import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default class App extends Component {

  state = {
    value: '',
    items: [],
  };


  handleAddItem = () => {
    console.log(this.state);
    if(!this.state.value) return;
    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false
      }
    ];
    this.setState({
      items: newItems,
      value: ''
    });
  };


  render() {
    return (
      <View style={styles.container}>
        <Header
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={(value) => this.setState({value})}
         />
        <View style={styles.content}>

        </View>
        <Footer />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(65, 213, 80)",
  },

  content: {
    flex: 1,
  }

});
