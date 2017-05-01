import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker
} from 'react-native';


export const PickerComponent = () => (
  <Picker style={styles.picker}>
    <Picker.Item label="Java" value="java" />
    <Picker.Item label="JavaScript" value="js" />
  </Picker>

);


const styles = StyleSheet.create({
  picker: {
    width: "100%",
  },
});
