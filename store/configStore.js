import React, { useEffect, useState } from 'react';

const ConfigContext = React.createContext({
	theme: 'dark',
	changeTheme: (theme) => {},
	isClockVisible: false,
	changeIsClockVisible: (value) => {},
	timing: {
		focusTime: 25,
		shortBreakTime: 5,
		longBreakTime: 10
	},
	setTime: (focus, sBreak, lBreak) => {},
	information: {
		totalTime: 0
	},
	setInformationHandler: () => {}
});

export function ConfigContextProvider(props) {
	const [ theme, setTheme ] = useState('dark');
	const [ isClockVisible, setIsClockVisible ] = useState(true);
	const [ timing, setTiming ] = useState({
		focusTime: 25,
		shortBreakTime: 5,
		longBreakTime: 10
	});

	let changeTimingHandler = (focus, sBreak, lBreak) => {
		setTiming({
			focusTime: focus,
			shortBreakTime: sBreak,
			longBreakTime: lBreak
		});
	};
	let changeThemeHandler = () => {
		if (theme === 'light') {
			setTheme('dark');
		}
		else {
			setTheme('light');
		}
	};
	let changeClockVisibility = (v) => {
		setIsClockVisible(v);
	};

	useEffect(() => {
		let body = document.body;

		body.className = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
	}),
		[ theme ];

	const contextValue = {
		theme,
		isClockVisible,
		changeTheme: changeThemeHandler,
		changeIsClockVisible: changeClockVisibility,
		setTime: changeTimingHandler,
		timing
	};
	return <ConfigContext.Provider value={contextValue}>{props.children}</ConfigContext.Provider>;
}

export default ConfigContext;
