import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

import HeaderHome from "./components/HeaderHome";
import { Klant, Project, Tijdsduur } from "./components/index";

export default class App extends Component {

  state = {
    filter: 'home',
    value: '',
    items: [],
    time: 0,
  };


  handleFilter = (filter) => {
    console.log(this.state);
    this.setState({filter});
  };

  handleTimings = () => {
    let startTime = this.state.time;
    setInterval(function () {
      this.setState({
        time: startTime+=1
      });
    }.bind(this), 1000);
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
          <Route exact path="/"  render={()=><HeaderHome handleTimings={this.handleTimings} startTime={this.state.time}/>}/>
            <Route path="/project" component={Project}/>
            <Route path="/tijdsduur" component={Tijdsduur}/>

        <View style={styles.content}>
            <Route path="/klant" component={Klant}/>

          </View>
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
