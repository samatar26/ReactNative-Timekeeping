import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";



export const Klant = () => (
  <View style={styles.header}>
    <TextInput style={styles.input}
      placeholder="What needs to be done?"
      blurOnSubmit={false}
      returnKeyType="done"
     />

  </View>
)

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "blackrr"
  },
  input: {
    flex: 1,
    height: 50
  }

});
