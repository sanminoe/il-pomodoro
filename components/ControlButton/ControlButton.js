const ControlButton = (props) => {
	const theme = props.theme;
	return (
		<button
			className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} ${props.controlType === 'stop'
				? 'text-red-500'
				: 'text-green-500'} flex justify-center items-center rounded-full hover:cursor-pointer ${props.theme ===
			'dark'
				? 'hover:bg-light-dark'
				: 'hover:bg-lighter-dark'}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default ControlButton;
