const ButtonPlusMinus = (props) => {
	return (
		<button className="border px-4 py-2" onClick={props.onClick}>
			{props.buttonType === '-' ? '-' : '+'}
		</button>
	);
};

export default ButtonPlusMinus;
