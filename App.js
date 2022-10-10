import { Component } from 'react';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import TimeList from './components/timelist';
import Navbar from './components/navbar';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './constants/colors';
import GlobalState from './context/globalstate';

const theme = {
	...DefaultTheme,
	roundness: 2,
	version: 3,
	colors: {
		...DefaultTheme.colors,
		primary: COLORS.primary,
		secondary: COLORS.secondary,
		tertiary: COLORS.sLight,
	},
};

class App extends Component {
	render() {
		return (
			<PaperProvider theme={theme}>
				<GlobalState>
					<Navbar />
					<TimeList />
					<StatusBar></StatusBar>
				</GlobalState>
			</PaperProvider>
		);
	}
}

export default App;
