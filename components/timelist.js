import { Component } from 'react';
import Timer from './timer';
import Context from '../context/context';

class TimeList extends Component {
	static contextType = Context;

	render = () => {
		const timers = this.context.savedEvents.map(el => {
			return <Timer key={el.id} event={el} />;
		});
		return <>{timers}</>;
	};
}
export default TimeList;
