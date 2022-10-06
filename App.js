import { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class App extends Component {
	render = () => {
		return <View style={styles.container}></View>;
	};
}
export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#232323',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
