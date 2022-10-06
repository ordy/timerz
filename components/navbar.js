import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const Navbar = () => (
	<Appbar.Header style={styles.top}>
		<Appbar.Content title='Timerz' titleStyle={{ color: COLORS.pBG }} />
		<Appbar.Action icon='plus' onPress={() => {}} color={COLORS.pBG} />
		<Appbar.Action icon='dots-vertical' onPress={() => {}} color={COLORS.pBG} />
	</Appbar.Header>
);

const styles = StyleSheet.create({
	top: {
		backgroundColor: COLORS.primary,
	},
});

export default Navbar;
