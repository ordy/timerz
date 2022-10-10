import React, { Component } from 'react';
import Context from './context';

class GlobalState extends Component {
	state = {
		savedEvents: [
			{ id: 1, title: 'Task 1', date: '1665064414620' },
			{ id: 2, title: 'Task 2', date: '1664978400000' },
			{ id: 3, title: 'Task 3', date: '1664868400000' },
		],
	};

	addNewTimer = timer => {
		events = [...this.state.savedEvents, timer];
		this.setState({ savedEvents: events });
	};

	deleteTimer = id => {
		console.log('delete called');
		const filteredList = this.state.savedEvents.filter(el => {
			return el.id != id;
		});
		this.setState({ savedEvents: filteredList });
	};

	render() {
		return (
			<Context.Provider
				value={{
					savedEvents: this.state.savedEvents,
					addNewTimer: this.addNewTimer,
					deleteTimer: this.deleteTimer,
				}}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default GlobalState;
