import React from 'react';

export default React.createContext({
	savedEvents: [],
	addNewTimer: timer => {},
	deleteTimer: id => {},
});
