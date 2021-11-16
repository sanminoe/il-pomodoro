import React, { useState } from 'react';

const Button = (props) => {
	const [ isOver, setIsOver ] = useState(false);
	let showToolTipHandler = () => {
		setIsOver(!isOver);
	};
	return (
		<React.Fragment>
			<div
				className="relative flex flex-col items-center rounded-full"
				onMouseEnter={() => setIsOver(true)}
				onMouseLeave={() => setIsOver(false)}
			>
				<button
					onClick={props.onClick}
					className="flex items-center p-1 justify-center hover:bg-blue-500 hover:text-white rounded-full"
				>
					{props.children}
				</button>
				{isOver && (
					<div className="absolute border min-w-full rounded bg-blue-500 text-white text-sm top-10 text-center">
						<p className="p-1">{props.toolTip}</p>
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default Button;
