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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

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
    marginVertical: 10,
    height: 50,
    width: "100%"
  },
  button: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(24, 60, 18, .4 )",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "800"
  },

});
