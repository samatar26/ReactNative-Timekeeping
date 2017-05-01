import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";



export const Klant = () => (
  <View style={styles.header}>

    <Text>VoorNaam</Text>
    <TextInput style={styles.input}
      placeholder="What needs to be done?"
      blurOnSubmit={false}
      returnKeyType="next"
     />
    <Text>Achternaam</Text>
     <TextInput style={styles.input}
       placeholder="What needs to be next?"
       blurOnSubmit={false}
       returnKeyType="next"
      />
    <Text>Adres</Text>
      <TextInput style={styles.input}
        placeholder="What needs to be next?"
        blurOnSubmit={false}
        returnKeyType="next"
       />
     <Text>Huisnummer</Text>
       <TextInput style={styles.input}
         placeholder="What needs to be next?"
         blurOnSubmit={false}
         returnKeyType="next"
        />
      <Text>Postcode</Text>
          <TextInput style={styles.input}
            placeholder="What needs to be next?"
            blurOnSubmit={false}
            returnKeyType="next"
           />
      <Text>Woonplaats</Text>
     <TextInput style={styles.input}
               placeholder="What needs to be done?"
               blurOnSubmit={false}
               returnKeyType="next"
              />

  </View>
)

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 40,
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "yellow",

  },
  input: {
    // flex: 1,
    // backgroundColor: "blue",
    marginVertical: 10,
    height: 50,
    width: "100%"
  }

});
