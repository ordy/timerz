import { Component } from 'react';
import Timer from './timer';

class TimeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			savedEvents: [
				{ title: 'Task 1', date: '1665064414620' },
				{ title: 'Task 2', date: '1664978400000' },
				{ title: 'Task 3', date: '1664868400000' },
			],
		};
	}

	render = () => {
		return this.state.savedEvents.map((date, index) => {
			return <Timer key={index} event={date} />;
		});
	};
}
export default TimeList;
