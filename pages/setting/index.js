import NumberInput from '../../components/NumberInput/NumberInput';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import ConfigContext from '../../store/configStore';
import style from './style.module.css';
const Variants = {
	hidden: { opacity: 0, x: 200 },
	enter: { opacity: 1, x: 0 },
	exit: {
		opacity: 0,
		x: 200
	}
};
export default function Createsession(props) {
	const configCtx = useContext(ConfigContext);
	const router = useRouter();
	const [ focusInput, setFocusInput ] = useState(configCtx.timing.focusTime);
	const [ shortBreakInput, setShortBreakInput ] = useState(configCtx.timing.shortBreakTime);
	const [ longBreakInput, setLongBreakInput ] = useState(configCtx.timing.longBreakTime);

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
		configCtx.setTime(+focusInput, +shortBreakInput, +longBreakInput);
		router.push('/');
	};

	let changeAmountClickHandler = (e, valueType, type) => {
		e.preventDefault();

		let val;

		if (valueType === 'focus') {
			if (+focusInput >= 1) {
				val = type === '+' ? +focusInput + 1 : +focusInput - 1;
				setFocusInput(val === 0 ? 1 : val < 60 ? val : 59);
			}
		}
		else if (valueType === 'sbreak') {
			if (+shortBreakInput >= 1) {
				val = type === '+' ? +shortBreakInput + 1 : +shortBreakInput - 1;
				setShortBreakInput(val === 0 ? 1 : val < 60 ? val : 59);
			}
		}
		else {
			if (+longBreakInput >= 1) {
				val = type === '+' ? +longBreakInput + 1 : +longBreakInput - 1;

				setLongBreakInput(val === 0 ? 1 : val < 60 ? val : 59);
			}
		}
	};
	let onWriteAmount = (e, type) => {
		let val = e.target.value;
		if (type === 'focus') {
			setFocusInput(val);
		}
		else if (type === 'sbreak') {
			setShortBreakInput(val);
		}
		else {
			setLongBreakInput(val);
		}
	};
	let checkValueHandler = (e, field) => {
		let val = +e.target.value;
		if (field === 'focus') {
			if (val > 59) setFocusInput(59);
			if (val < 1) setFocusInput(1);
		}
		else if (field === 'sbreak') {
			if (val > 59) setShortBreakInput(59);
			if (val < 1) setShortBreakInput(1);
		}
		else {
			if (val > 59) setLongBreakInput(59);
			if (val < 1) setLongBreakInput(1);
		}
	};
	let theme = configCtx.theme;
	let inputsElements = inputs.map((i) => (
		<NumberInput
			name={i.name}
			inputName={i.name}
			key={i.id}
			value={i.value}
			title={i.title}
			onChange={(e) => onWriteAmount(e, i.name)}
			onPlusClick={(e) => changeAmountClickHandler(e, i.name, '+')}
			onMinusClick={(e) => changeAmountClickHandler(e, i.name, '-')}
			theme={theme}
			onBlur={(e) => checkValueHandler(e, i.name)}
		/>
	));

	return (
		<motion.main
			variants={Variants}
			initial="hidden"
			animate="enter"
			exit="exit"
			className={`flex flex-col items-center w-full my-4 ${theme === 'light'
				? 'bg-white text-black'
				: 'bg-gray-900 text-white'} rounded-xl w-full ${style.setting}}`}
		>
			<div className="mt-4">
				<h1 className="text-3xl">Settings</h1>
			</div>
			<div className=" w-full">
				<form className="w-full flex flex-col mt-4 items-center">{inputsElements}</form>
			</div>
			<div className="w-5/6 flex justify-between my-4">
				<button
					className={` w-24 h-10 rounded hover:border ${theme === 'dark'
						? 'border-white text-white'
						: 'border-gray-900 text-black'}`}
					onClick={() => router.push('/')}
				>
					<span>Cancel</span>
				</button>
				<button
					className="bg-red-700 text-white w-24 h-10 rounded hover:bg-red-600"
					onClick={saveConfigurationHandler}
				>
					<span>Start</span>
				</button>
			</div>
		</motion.main>
	);
}
