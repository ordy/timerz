import { Component } from 'react';
import { Text, View } from 'react-native';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: props.date,
			ticker: this.dateConversion(props.date),
		};
	}

	componentDidMount = () => (this.TimerID = setInterval(() => this.tick(), 1000));

	componentWillUnmount = () => clearInterval(this.timerID);

	tick = () => {
		this.setState({ ticker: this.incrementTimer('seconds') });
	};

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

	dateConversion(date) {
		const currentDate = new Date();
		const diffTime = Math.abs(currentDate - date);
		console.log(currentDate - date);
		const timeMap = new Map();
		const second = 1000;
		const minute = second * 60;
		const hour = minute * 60;
		const day = hour * 24;
		const month = day * 30;
		const year = day * 365;

		timeMap.set('seconds', Math.round(diffTime / second) % 60);
		timeMap.set('minutes', Math.round(diffTime / minute) % 60);
		//		console.log(timeMap.get('minutes'));
		//		console.log(timeMap.get('seconds'));

		timeMap.set('hours', Math.round(diffTime / hour) % 24);
		timeMap.set('days', Math.round(diffTime / day) % 30);
		timeMap.set('months', Math.round(diffTime / month) % 12);
		timeMap.set('years', Math.round(diffTime / year));
		return timeMap;
	}

	render = () => {
		return (
			<View>
				<Text>Date: {this.state.date}</Text>
				<Text>Ticker value: {this.state.ticker.get('seconds')} for seconds</Text>
				<Text>Ticker value: {this.state.ticker.get('minutes')} for minutes</Text>
				<Text>Ticker value: {this.state.ticker.get('hours')} for hours</Text>
				<Text>Ticker value: {this.state.ticker.get('days')} for days</Text>
				<Text>Ticker value: {this.state.ticker.get('months')} for months</Text>
				<Text>Ticker value: {this.state.ticker.get('years')} for years</Text>
			</View>
		);
	};
}
export default Timer;