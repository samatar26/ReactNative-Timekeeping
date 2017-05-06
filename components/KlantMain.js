import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

export const KlantMain = (props) => {
  return (
    <View style={styles.header}>
        <Link
          style={styles.button}
          to='/addKlant'>
          <Text style={styles.text}>Add Project</Text>
        </Link>
        <Link
          style={styles.button}
          to='/viewKlant'>
          <Text style={styles.text}>View Clients</Text>
        </Link>

    </View>

  );
};


const styles = StyleSheet.create({
  button:{
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(24, 60, 18, .4 )",

  },
  text: {
    fontSize: 50,
    fontWeight: "800"
  },

  header: {
    height: "80%",
    justifyContent: "space-around",
    alignItems: "center",
  },

});
