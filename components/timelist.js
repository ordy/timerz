import { Component } from 'react';
import Timer from './timer';

class TimeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			savedEvents: [
				{ id: 1, title: 'Task 1', date: '1665064414620' },
				{ id: 2, title: 'Task 2', date: '1664978400000' },
				{ id: 3, title: 'Task 3', date: '1664868400000' },
			],
		};
	}

	deleteEvent = props => {
		const filteredList = this.state.savedEvents.filter(el => {
			return el.id != props;
		});
		this.setState({
			savedEvents: filteredList,
		});
	};

	render = () => {
		const timers = this.state.savedEvents.map(el => {
			return <Timer key={el.id} event={el} delete={this.deleteEvent} />;
		});
		return <>{timers}</>;
	};
}
export default TimeList;
