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
    return(
        <View style={[ styles.container, {backgroundColor: this.state.backgroundColor} ]}>
            <TouchableOpacity onPress={this.onPress.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Random Color</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.changeScreen.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Other Page</Text>
              </View>
            </TouchableOpacity>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  button: {
    height: 100,
    width: 150,
    justifyContent: 'space-around', 
    backgroundColor: '#666',
  }, 
  buttonText: {
    padding: 30,
    color: 'white', 
  }
});
