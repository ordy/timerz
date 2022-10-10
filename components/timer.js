import * as React from 'react';
import { Component } from 'react';
import { Button, Card, Dialog, Portal, Paragraph } from 'react-native-paper';
import { COLORS } from '../constants/colors';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resetVisible: false,
			deleteVisible: false,
			id: props.event.id,
			title: props.event.title,
			date: props.event.date,
			delete: props.delete,
			ticker: this.dateConversion(props.event.date),
		};
	}

	componentDidMount = () => {
		this.TimerID = setInterval(() => this.tick(), 1000);
	};

	componentWillUnmount = () => clearInterval(this.timerID);

	tick = () => this.setState({ ticker: this.incrementTimer('seconds') });

	incrementTimer(timeType) {
		let timeMap = this.state.ticker;
		const timeUnit = timeMap.get(timeType);
		switch (timeType) {
			case 'seconds':
				if (timeUnit == 59) {
					timeMap = this.incrementTimer('minutes');
					timeMap.set('seconds', 0);
				} else timeMap.set('seconds', timeUnit + 1);
				break;
			case 'minutes':
				if (timeUnit == 59) {
					timeMap = this.incrementTimer('hours');
					timeMap.set('minutes', 0);
				} else timeMap.set('minutes', timeUnit + 1);
				break;
			case 'hours':
				if (timeUnit == 23) {
					timeMap = this.incrementTimer('days');
					timeMap.set('hours', 0);
				} else timeMap.set('hours', timeUnit + 1);
				break;
			case 'days':
				if (timeUnit == 30) {
					timeMap = this.incrementTimer('months');
					timeMap.set('days', 0);
				} else timeMap.set('days', timeUnit + 1);
				break;
			case 'months':
				if (timeUnit == 12) {
					timeMap = this.incrementTimer('years');
					timeMap.set('months', 0);
				} else timeMap.set('months', timeUnit + 1);
				break;
			case 'years':
				timeMap.set('years', timeUnit + 1);
				break;
		}
		return timeMap;
	}

	showDialog = (e, dialogType) => {
		if (dialogType == 'delete') this.setState({ deleteVisible: true });
		else this.setState({ resetVisible: true });
	};

	hideDialog = (e, name) => {
		if (name == 'delete') this.setState({ deleteVisible: false });
		else this.setState({ resetVisible: false });
	};

	resetTimer = () => {
		const date = new Date();
		this.setState({ ticker: this.dateConversion(date) });
		this.setState({ visible: false });
	};

	deleteTimer = () => {
		this.state.delete(this.state.id);
	};

	dateConversion(date) {
		const currentDate = new Date();
		const diffTime = Math.abs(currentDate - date);
		const timeMap = new Map();
		const second = 1000;
		const minute = second * 60;
		const hour = minute * 60;
		const day = hour * 24;
		const month = day * 30;
		const year = day * 365;

		timeMap.set('seconds', Math.round(diffTime / second) % 60);
		timeMap.set('minutes', Math.round(diffTime / minute) % 60);

		timeMap.set('hours', Math.round(diffTime / hour) % 24);
		timeMap.set('days', Math.round(diffTime / day) % 30);
		timeMap.set('months', Math.round(diffTime / month) % 12);
		timeMap.set('years', Math.round(diffTime / year));
		return timeMap;
	}

	render = () => {
		const s = this.state.ticker.get('seconds');
		const m = this.state.ticker.get('minutes');
		const h = this.state.ticker.get('hours');
		const d = this.state.ticker.get('days');
		const M = this.state.ticker.get('months');
		const y = this.state.ticker.get('years');

		return (
			<Card elevation={1} style={{ margin: 7, backgroundColor: COLORS.sBG }}>
				<Card.Title title={this.state.title} />
				<Card.Content>
					<Paragraph>
						{y} Years, {M} Months, {d} Days, {h}h {m}m {s}s
					</Paragraph>
				</Card.Content>
				<Card.Actions>
					<Button onPress={e => this.showDialog(e, 'delete')}>Delete</Button>
					<Portal>
						<Dialog visible={this.state.deleteVisible} onDismiss={e => this.hideDialog(e, 'delete')}>
							<Dialog.Title>Delete</Dialog.Title>
							<Dialog.Content>
								<Paragraph>Are you sure you want to delete this timer?</Paragraph>
							</Dialog.Content>
							<Dialog.Actions>
								<Button onPress={this.deleteTimer}>Yes</Button>
								<Button onPress={e => this.hideDialog(e, 'detele')}>No</Button>
							</Dialog.Actions>
						</Dialog>
					</Portal>

					<Button onPress={e => this.showDialog(e, 'reset')}>Reset</Button>
					<Portal>
						<Dialog visible={this.state.resetVisible} onDismiss={() => this.hideDialog('reset')}>
							<Dialog.Title>Reset</Dialog.Title>
							<Dialog.Content>
								<Paragraph>Are you sure you want to reset this timer?</Paragraph>
							</Dialog.Content>
							<Dialog.Actions>
								<Button onPress={this.resetTimer}>Yes</Button>
								<Button onPress={e => this.hideDialog(e, 'reset')}>No</Button>
							</Dialog.Actions>
						</Dialog>
					</Portal>
				</Card.Actions>
			</Card>
		);
	};
}
export default Timer;
