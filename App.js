import { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import TimeList from './components/timelist';
import Navbar from './components/navbar';
import { StatusBar } from 'expo-status-bar';

class App extends Component {
	render() {
		return (
			<PaperProvider>
				<Navbar />
				<TimeList />
				<StatusBar></StatusBar>
			</PaperProvider>
		);
	}
}

export default App;
