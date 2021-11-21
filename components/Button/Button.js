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
				{isOver && (
					<div
						className={`absolute ${props.theme === 'dark'
							? 'text-white border-white bg-gray-900'
							: 'text-black border-black bg-white'} text-xs flex bottom-full h-[fit-content] 2xl:h-20 text-center border rounded z-50 2xl:text-6xl`}
					>
						<p className="p-1 w-[fit-content] h-[fit-content] z-50">{props.toolTip}</p>
					</div>
				)}
				<button onClick={props.onClick} className="flex items-center p-1 justify-center rounded-full">
					{props.children}
				</button>
			</div>
		</React.Fragment>
	);
};

export default Button;
