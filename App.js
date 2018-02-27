/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import codePush from 'react-native-code-push';

const instructions = Platform.select( {
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
} );

export default class App extends Component<{}> {
	update() {
		codePush.sync( {
			updateDialog: {
        appendReleaseDescription: true,
        descriptionPrefix:'更新内容',
        title:'更新',
        mandatoryUpdateMessage:'',
        mandatoryContinueButtonLabel:'更新',
      },
      mandatoryInstallMode:codePush.InstallMode.IMMEDIATE
		})
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
        </Text>
				<Text style={styles.instructions}>
					To get started, edit App.js
        </Text>
				<Text style={styles.instructions}>
					{instructions}
				</Text>
				<TouchableOpacity activeOpacity={0.8} onPress={this.update}>
					<View>
						<Text>检查更新</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
} );
