const ControlButton = (props) => {
	const theme = props.theme;
	return (
		<button
			className={`${theme === 'dark'
				? 'bg-gray-900 hover:bg-light-dark'
				: 'bg-white hover:bg-lighter-dark'} ${props.controlType === 'stop'
				? 'text-red-500'
				: 'text-green-500'} flex justify-center items-center rounded-full hover:cursor-pointer w-2/12`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default ControlButton;
