const ButtonPlusMinus = (props) => {
	return (
		<button
			className={`${props.theme === 'dark'
				? 'bg-gray-800 hover:bg-gray-600'
				: 'bg-gray-300 hover:bg-gray-200'} active:bg-gray-700 px-4 py-2 ${props.buttonType === '-'
				? 'rounded-l'
				: 'rounded-r'}`}
			onClick={props.onClick}
		>
			{props.buttonType === '-' ? '-' : '+'}
		</button>
	);
};

export default ButtonPlusMinus;
