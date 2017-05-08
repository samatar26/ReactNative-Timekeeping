import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';

export default class HeaderHome extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.handleTimings(); this.props.changeButtonText();}}>
          <Text style={styles.text}>{this.props.ButtonText}</Text>
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
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

});

HeaderHome.propTypes = {
  ButtonText: PropTypes.string,
  handleTimings: PropTypes.func,
  changeButtonText: PropTypes.func
};
