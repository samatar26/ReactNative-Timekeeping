import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default class HeaderHome extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={()=>{console.log(this.props.startTime)}}>
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button:{
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(24, 60, 18, .4 )",
  },
  text: {
    fontSize: 55,
    fontWeight: "800"
  },

  header: {
    paddingHorizontal: 16,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },

});
