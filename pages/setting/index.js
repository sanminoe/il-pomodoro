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

	let saveConfigurationHandler = () => {
		ConfigCtx.setTime(+focusInput, +shortBreakInput, +longBreakInput);
		router.push('/');
	};
	return (
		<motion.main
			variants={Variants}
			initial="hidden"
			animate="enter"
			exit="exit"
			className="flex flex-col items-center w-9/12 mt-7 bg-white border-2 rounded-xl"
		>
			<div className="mt-6">
				<h1 className="text-3xl">Settings</h1>
			</div>
			<div className=" w-6/12">
				<form className="w-full flex flex-col mt-4 items-center">
					<RangeInput
						name="focus"
						title="Focus Time"
						value={focusInput}
						onChange={(e) => setFocusInput(e.target.value)}
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
					/>
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
