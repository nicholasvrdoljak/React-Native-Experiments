import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Education from './components/education.js';
import Projects from './components/projects.js';
import Skills from './components/skills.js';

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

  changeScreen(screen) {
    this.setState({screen})
  }

  render() {
    return(
      <View style={{flex: 1, backgroundColor: this.state.backgroundColor}}>

        <View style={styles.home}>
          <TouchableOpacity onPress={this.changeScreen.bind(this, 'home')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onPress.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Rndm Clr</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        {
          this.state.screen==='education' ? (
            <View style={styles.text}>
              <Education/>
            </View>
          ) : 
          this.state.screen==='skills' ? (
            <View style={styles.text}>
              <Skills/>
            </View>
          ) : 
          this.state.screen==='projects' ? (
            <View style={styles.text}>
              <Projects/>
            </View>
          ) : null
        }

        <View style={styles.container}>
          <TouchableOpacity onPress={this.changeScreen.bind(this, 'skills')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sklz</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.changeScreen.bind(this, 'projects')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Prjct</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.changeScreen.bind(this, 'education')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Edu</Text>
            </View>
          </TouchableOpacity>


        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'flex-start'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  button: {
    height: 100,
    width: 100,
    justifyContent: 'space-around', 
    backgroundColor: '#666',
  }, 
  buttonText: {
    padding: 10,
    color: 'white', 
  }, 
  text: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
  }
});
