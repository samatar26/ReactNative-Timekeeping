import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker
} from 'react-native';
import realm from './../database/Realm';
import {generateId} from './../lib/utils';

export const PickerComponent = () => (
  <Picker style={styles.picker}>
    {Array.from(realm.objects('Klant')).map((klant)=>{
      console.log(klant);
      return <Picker.Item key={generateId()} label={klant.voornaam+' ' + klant.achternaam} value={'a'} />;
    })}
  </Picker>

);



const styles = StyleSheet.create({
  picker: {
    width: "100%",
  },
});
