import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';


export default class Klant extends Component {
  render() {
    return (
      <View style={styles.header}>

        <Text>Voornaam</Text>
        <TextInput style={styles.input}
          placeholder="What needs to be done?"
          onChangeText={(voornaam)=>this.props.updateForm(voornaam, 'voornaam')}
          blurOnSubmit={false}
          returnKeyType="next"
         />
        <Text>Achternaam</Text>
         <TextInput style={styles.input}
           placeholder="What needs to be next?"
           onChangeText={(achternaam)=> this.props.updateForm(achternaam, 'achternaam')}
           blurOnSubmit={false}
           returnKeyType="next"
          />
        <Text>Adres</Text>
          <TextInput style={styles.input}
            placeholder="What needs to be next?"
            onChangeText={(adres)=> this.props.updateForm(adres, 'adres')}
            blurOnSubmit={false}
            returnKeyType="next"
           />
         <Text>Huisnummer</Text>
           <TextInput style={styles.input}
             placeholder="What needs to be next?"
             onChangeText={(huisnummer)=> this.props.updateForm(huisnummer, 'huisnummer')}
             blurOnSubmit={false}
             returnKeyType="next"
            />
          <Text>Postcode</Text>
              <TextInput style={styles.input}
                placeholder="What needs to be next?"
                onChangeText={(postcode)=> this.props.updateForm(postcode, 'postcode')}
                blurOnSubmit={false}
                returnKeyType="next"
               />
          <Text>Woonplaats</Text>
         <TextInput style={styles.input}
                   placeholder="What needs to be done?"
                   onChangeText={(woonplaats)=>this.props.updateForm(woonplaats, 'woonplaats')}
                   blurOnSubmit={false}
                   returnKeyType="next"
                  />
                <TouchableOpacity
                   style={styles.button}
                   onPress={()=>{this.props.realmDatabase(this.props.form)}}
                    >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

      </View>
    );
  }
}

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

Klant.propTypes = {
  updateForm: PropTypes.func,
  realmDatabase: PropTypes.func
};
