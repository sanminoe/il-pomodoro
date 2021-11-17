import RangeInput from '../../components/RangeInput/RangeInput';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import ConfigContext from '../../store/configStore';

const Variants = {
	hidden: { opacity: 0, x: 200 },
	enter: { opacity: 1, x: 0 },
	exit: {
		opacity: 0,
		x: 200
	}
};
export default function Createsession(props) {
	const ConfigCtx = useContext(ConfigContext);
	const router = useRouter();
	const [ focusInput, setFocusInput ] = useState(ConfigCtx.timing.focusTime);
	const [ shortBreakInput, setShortBreakInput ] = useState(ConfigCtx.timing.shortBreakTime);
	const [ longBreakInput, setLongBreakInput ] = useState(ConfigCtx.timing.longBreakTime);

	const inputs = [
		{
			id: '1',
			title: 'Focus Time',
			value: focusInput,
			name: 'focus'
		},
		{
			id: '2',
			title: 'Short break Time',
			value: shortBreakInput,
			name: 'sbreak'
		},
		{
			id: '3',
			title: 'Long break time',
			value: longBreakInput,
			name: 'lbreak'
		}
	];

	let saveConfigurationHandler = () => {
		ConfigCtx.setTime(+focusInput, +shortBreakInput, +longBreakInput);
		router.push('/');
	};

	let changeAmountClickHandler = (e, valueType, type) => {
		e.preventDefault();
		let val;
		if (valueType === 'focus') {
			val = type === '+' ? +focusInput + 1 : +focusInput - 1;
			setFocusInput(val);
		}
		else if (valueType === 'sbreak') {
			val = type === '+' ? +shortBreakInput + 1 : +shortBreakInput - 1;
			setShortBreakInput(val);
		}
		else {
			val = type === '+' ? +longBreakInput + 1 : +longBreakInput - 1;
			setLongBreakInput(val);
		}
	};
	let onWriteAmount = (e, type) => {
		let val = e.target.value;
		if (type === 'focus') {
			setFocusInput(val);
		}
		else if (valueType === 'sbreak') {
			setShortBreakInput(val);
		}
		else {
			setLongBreakInput(val);
		}
	};
	let inputsElements = inputs.map((i) => (
		<RangeInput
			name={i.name}
			inputName={i.name}
			key={i.id}
			value={i.value}
			onChange={(e) => onWriteAmount(e, i.name)}
			onPlusClick={(e) => changeAmountClickHandler(e, i.name, '+')}
			onMinusClick={(e) => changeAmountClickHandler(e, i.name, '-')}
		/>
	));

	return (
		<motion.main
			variants={Variants}
			initial="hidden"
			animate="enter"
			exit="exit"
			className="flex flex-col items-center w-6/12 mt-7 bg-white border-2 rounded-xl"
		>
			<div className="mt-6">
				<h1 className="text-3xl">Settings</h1>
			</div>
			<div className=" w-full">
				<form className="w-full flex flex-col mt-4 items-center">
					{inputsElements}
					{/* <RangeInput
						name="focus"
						title="Focus Time"
						value={focusInput}
						onChange={(e) => setFocusInput(e.target.value)}
						onClick={()=> changeAmountHandler()}
					/>
					<RangeInput
						name="sbreak"
						title="Short break"
						value={shortBreakInput}
						onChange={(e) => setShortBreakInput(e.target.value)}
					/>
					<RangeInput
						name="lbreak"
						title="Long break"
						value={longBreakInput}
						onChange={(e) => setLongBreakInput(e.target.value)}
					/> */}
				</form>
			</div>
			<div className="w-1/2 flex justify-center my-4">
				<button className="bg-red-700 text-white w-full h-10" onClick={saveConfigurationHandler}>
					<span>Start</span>
				</button>
			</div>
		</motion.main>
	);
}
