import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.text}>Klant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.text}>Project</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.text}>Tijdsduur</Text>
          </TouchableOpacity>
        </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    width:"100%"
  },
  menuItem: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgb(24, 60, 18)",
  },
  text: {
    fontSize: 20,
    fontWeight: "800"
  }
});
