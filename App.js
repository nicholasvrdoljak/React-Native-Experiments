import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: '#ffffff' }
  }
  onPress() {
    let colors = '0123456789abcdef';
    let random = '#';
    for (let i = 0; i < 6; i++) random += colors[Math.floor(Math.random() * colors.length)];
    this.setState({ backgroundColor: random });
  }

  render() {
    return (
      <View style={ [styles.container, this.state] }>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
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
