const ButtonPlusMinus = (props) => {
	return (
		<button
			className={`${props.theme === 'dark'
				? 'bg-gray-800'
				: 'bg-gray-300'} active:bg-gray-700 px-4 py-2 ${props.buttonType === '-'
				? 'rounded-l'
				: 'rounded-r'} ${props.theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
			onClick={props.onClick}
		>
			{props.buttonType === '-' ? '-' : '+'}
		</button>
	);
};

export default ButtonPlusMinus;
