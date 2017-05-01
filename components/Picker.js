import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker
} from 'react-native';
import Realm from 'realm';
export const PickerComponent = (props) => (
  <Picker style={styles.picker} o={()=>{ let realm = new Realm({schema: ['Klant']});

      let klanten = realm.objects('Klant');

      console.log(Array.from(klanten));
}}>
    <Picker.Item label="Java" value="java" />
    <Picker.Item label="JavaScript" value="js" />
  </Picker>

);



const styles = StyleSheet.create({
  picker: {
    width: "100%",
  },
});
