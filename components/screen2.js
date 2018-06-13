import React, { Component } from 'React';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default class Screen2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ this.props.style }>
                <Button title={'this works'} onPress={this.props.changeScreen}/>
            </View>
        )
    }
}