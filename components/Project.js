import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {PickerComponent} from './Picker';

export default class Project extends Component{
  render() {
    return(
      <View style={styles.header}>
        <Text>ProjectNaam</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter"
          blurOnSubmit={false}
          returnKeyType="next"
          />
        <PickerComponent realmData={this.props.realmDatabase} />
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{}}
          >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "yellow",
    alignItems: "center",

  },
  input: {
    marginTop: 20,
    height: 50,
    width: "100%",
  },
  picker: {
    width: '100%',
  },
  button: {
    marginTop: 40,
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
