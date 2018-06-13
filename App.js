import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Screen2 from './components/screen2.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      backgroundColor: '#ffffff', 
      screen: 1,
    }
  }
  onPress() {
    let colors = '0123456789abcdef';
    let random = '#';
    for (let i = 0; i < 6; i++) random += colors[Math.floor(Math.random() * colors.length)];
    this.setState({ backgroundColor: random });
  }

  changeScreen() {
    if (this.state.screen === 1) {
      this.setState({ screen: 2 });
    } else {
      this.setState({ screen: 1 });
    }
  }

  render() {
    if (this.state.screen === 1) {
      return (
        <View style={[ styles.container, {backgroundColor: this.state.backgroundColor} ]}>
          <TouchableOpacity onPress={this.onPress.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Random Color</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={this.onPress.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Random Color</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.changeScreen.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Change to page 2</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <Screen2 
          style = {[ styles.container, {backgroundColor: this.state.backgroundColor }]} 
          changeScreen = {this.changeScreen.bind(this)}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    height: 100,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#666',
  }, 
  buttonText: {
    padding: 40,
    color: 'white', 
  }
});
