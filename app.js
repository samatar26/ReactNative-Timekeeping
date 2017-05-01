import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import realm from './database/Realm';

import HeaderHome from "./components/HeaderHome";
import {Tijdsduur } from "./components/index";
import Klant from './components/Klant.js';
import Project from './components/Project.js';


export default class App extends Component {

  state = {
    filter: 'home',
    value: '',
    items: [],
    time: 0,
    timerStart: true,
    timerButtonText: 'Start',
    form:{
      voornaam:'',
      achternaam: '',
      adres: '',
      huisnummer: '',
      postcode: '',
      woonplaats: '',
    },
    id:1,



  };


  handleFormUpdate = (formValue, state) => {
    console.log(this.state);
    const form = this.state.form;
    form[state] = formValue;
    this.setState({form});
  }

  getRealmData = () => {

  }

  ClientToDatabase = (form) => {
    const {achternaam, voornaam, adres,
    woonplaats, huisnummer, postcode} = form;
    realm.write(()=>{
      let mijnKlant = realm.create('Klant', { id:this.state.id, voornaam, achternaam, adres, woonplaats, huisnummer, postcode});
    });
    let klanten = realm.objects('Klant');
    console.log(Array.from(klanten));

  }

  handleFilter = (filter) => {
    console.log(this.state);
    this.setState({filter});
  };

  handleTimings = () => {
    console.log(this.state.time);

    if (this.state.timerStart){
      let startTime = this.state.time;
      var myInterval = setInterval(function () {
        this.setState({
          time: startTime+=1
        });
      }.bind(this), 1000);

      this.setState({timerStart: false, intervalId: myInterval});

    } else {
      clearInterval(this.state.intervalId);
      this.setState({timerStart: true});
    }
  }

  handleButtonText = () => {
    let buttonText = this.state.timerButtonText;
    this.setState({timerButtonText: buttonText = buttonText === 'Start' ? 'Stop' : 'Start' });
  }


  handleAddItem = () => {
    console.log(this.state);
    if(!this.state.value) return;
    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false
      }
    ];
    this.setState({
      items: newItems,
      value: ''
    });
  };


  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/"  render={()=><HeaderHome handleTimings={this.handleTimings} startTime={this.state.time} ButtonText={this.state.timerButtonText} changeButtonText={this.handleButtonText}/>}/>
            <Route path="/tijdsduur" component={Tijdsduur}/>

        <ScrollView style={styles.content}>
          <Route path="/project" render={()=><Project                 realmDatabase={this.ClientToDatabase}
 />}/>

            <Route path="/klant" render={()=><Klant
                form={this.state.form}
                realmDatabase={this.ClientToDatabase}
               updateForm={this.handleFormUpdate}/>}/>

          </ScrollView>
          <View style={styles.nav}>
            <Link
              style={styles.navItem}
              to="/klant"
              >
              <Text style={styles.navText}>Klant</Text>
            </Link>

            <Link
              style={styles.navItem}
              to="/project"
              >
              <Text style={styles.navText}>Project</Text>
            </Link>

            <Link
              style={styles.navItem}
              to="/tijdsduur"
              >
              <Text style={styles.navText}>tijdsduur</Text>
            </Link>
          </View>


        </View>



      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(65, 213, 80)",
  },
  nav:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    width:"100%",
    padding: 12,
    paddingHorizontal: 14
  },

  navItem: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(24, 60, 18, .4 )",
  },
  navText: {
    fontSize: 20,
    fontWeight: "800"
  },

  content: {
    flex: 1,
  }

});
