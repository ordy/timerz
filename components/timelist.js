import { Component } from 'react';
import Timer from './timer';

class TimeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			savedDates: ['1665064414620', '1664978400000'],
		};
	}

	render = () => {
		return <Timer date={this.state.savedDates[1]} />;
	};
}
export default TimeList;
