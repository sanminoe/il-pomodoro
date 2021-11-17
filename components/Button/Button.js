import React, { useState } from 'react';

const Button = (props) => {
	const [ isOver, setIsOver ] = useState(false);

	return (
		<React.Fragment>
			<div
				className="relative flex flex-col items-center rounded-full"
				onMouseEnter={() => setIsOver(true)}
				onMouseLeave={() => setIsOver(false)}
			>
				<button onClick={props.onClick} className="flex items-center p-1 justify-center rounded-full">
					{props.children}
				</button>
				{isOver && (
					<div
						className={`absolute ${props.theme === 'dark'
							? 'text-white border-white bg-gray-900'
							: 'text-black border-black bg-white'} text-xs flex top-7 h-7 text-center border rounded z-50`}
					>
						<p className="p-1 w-24 z-50">{props.toolTip}</p>
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default Button;
