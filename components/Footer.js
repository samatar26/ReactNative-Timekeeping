import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class Footer extends Component {
  render() {
    const { filter } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity style={[styles.menuItem, filter === "Klant" && styles.selected]} onPress={() => this.props.onFilter("Klant")}>
            <Text style={styles.text}>{this.props.filter==='Klant' ? 'Home' : 'Klant'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem, filter === "Project" && styles.selected]} onPress={() => this.props.onFilter("Project")}>
            <Text style={styles.text}>{this.props.filter==='Project' ? 'Home' : 'Project'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem, filter === "Tijdsduur" && styles.selected]} onPress={() => this.props.onFilter("Tijdsduur")}>
            <Text style={styles.text}>{this.props.filter==='Tijdsduur' ? 'Home' : 'Tijdsduur'}</Text>
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
    borderColor: "rgba(24, 60, 18, .4 )",
  },
  text: {
    fontSize: 20,
    fontWeight: "800"
  },
  selected: {
    borderColor: "rgb(0, 0, 0)"
  }
});
