import React, { Component } from 'React';
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking, WebView } from 'react-native';


export default class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const uri = 'http://www.blockplanes.net';
        return (
            <View>
                <Text> Projects </Text>
                <WebView 
                    ref={(ref) => { this.webview = ref }}
                    source={{ uri }}
                    onNavigationStateChange={(event) => {
                        if (event.url !== uri) {
                            this.webview.stopLoading();
                            Linking.openURL(event.url);
                        }
                    }}
                />
            </View>
        );
    }
}