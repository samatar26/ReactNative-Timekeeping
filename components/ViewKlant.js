import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import realm from './../database/Realm';

export const ViewKlant = () => (
  <View style={styles.picker}>
    {Array.from(realm.objects('Klant')).map((klant)=>{
      return <Text>{klant.voornaam}</Text>;
    })}
  </View>

);



const styles = StyleSheet.create({

});
