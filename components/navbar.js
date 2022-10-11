import { Appbar } from 'react-native-paper';
import React, { useContext, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { COLORS } from '../constants/colors';
import Context from '../context/context';

const Navbar = () => {
	const timeContext = useContext(Context);
	const [modalVisible, setModalVisible] = useState(false);
	const [text, setText] = React.useState('');

	addTimer = () => {
		setModalVisible(!modalVisible);
		const currentDate = new Date();
		const id = Math.floor(Math.random() * currentDate);
		timeContext.addNewTimer({ id: id, title: text, date: currentDate });
	};

	cancelNewTimer = () => {
		setModalVisible(!modalVisible);
		setText('');
	};

	return (
		<>
			<Appbar.Header style={styles.top}>
				<Appbar.Content title='Timerz' titleStyle={{ color: COLORS.pBG }} />
				<Appbar.Action icon='plus' onPress={() => setModalVisible(true)} color={COLORS.pBG} />
				<Appbar.Action icon='dots-vertical' onPress={() => {}} color={COLORS.pBG} />
			</Appbar.Header>
			<View>
				<Modal
					animationType='fade'
					transparent={true}
					visible={modalVisible}
					onDismiss={() => setModalVisible(!modalVisible)}>
					<View style={styles.modalView}>
						<Text variant='titleLarge' style={styles.modalText}>
							New Timer
						</Text>
						<TextInput
							style={styles.inputField}
							label='Name'
							mode='outlined'
							value={text}
							onChangeText={text => setText(text)}
						/>
						<View style={styles.buttonsView}>
							<Button style={styles.buttonClose} mode='outlined' onPress={() => cancelNewTimer()}>
								Cancel
							</Button>
							<Button style={styles.buttonClose} mode='contained' onPress={() => addTimer()} disabled={!text}>
								Add
							</Button>
						</View>
					</View>
				</Modal>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	top: {
		backgroundColor: COLORS.primary,
	},
	modalView: {
		marginTop: 150,
		marginHorizontal: '5%',
		backgroundColor: 'white',
		borderRadius: 10,
		paddingVertical: 20,
		paddingHorizontal: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.33,
		shadowRadius: 5,
		elevation: 50,
	},
	buttonsView: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	buttonClose: {
		marginRight: 4,
		color: COLORS.pLight,
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'left',
	},
	inputField: {
		borderRadius: 10,
		marginBottom: 20,
	},
});

export default Navbar;
