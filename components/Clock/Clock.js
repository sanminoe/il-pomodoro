import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import ConfigContext from '../../store/configStore';
import { formatTime } from '../../helpers/formatTime';

const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
	exit: { opacity: 0 }
};
const clockVariants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
	exit: {
		opacity: 0
	}
};

export default function Clock(props) {
	const configCtx = useContext(ConfigContext);

	let timerPercentage = props.timerValue / props.totalValueTimer;
	let strokeColor = configCtx.theme === 'dark' ? 'rgba(16, 185, 129,1)' : 'rgba(239,68,68,1)';
	if (timerPercentage * 100 < 30) {
		strokeColor = 'rgb(217, 119, 6)';
	}
	else if (props.isPlaying === false) {
		strokeColor = configCtx.theme === 'dark' ? `rgba(16, 185, 129,1)` : 'rgba(239,68,68,1)';
	}
	return (
		<motion.div
			key="clocke"
			variants={clockVariants}
			initial="hidden"
			animate="enter"
			exit="exit"
			className="w-72 h-72 relative mx-5 "
		>
			<div
				className={`w-full h-full border-4 ${configCtx.theme === 'dark'
					? 'border-white'
					: 'border-gray-900'} absolute top-0 rounded-full transform scale-95`}
			/>
			<CircularProgressbarWithChildren
				value={timerPercentage * 100}
				counterClockwise={false}
				styles={{
					path: {
						stroke: strokeColor,
						strokeLinecap: 'butt'
					},
					trail: {
						stroke: 'rgba(72,37,37,0)'
					}
				}}
				className="transition-all"
			>
				<div className={`text-center ${configCtx.theme === 'dark' ? 'text-white' : 'text-black'}`}>
					<div>
						<motion.p
							variants={variants}
							initial="hidden"
							animate="enter"
							exit="exit"
							transition={{ type: 'linear', delay: 0.6 }}
							className="text-2xl"
						>
							{props.phase}
						</motion.p>
					</div>
					<div>
						<motion.p
							variants={variants}
							initial="hidden"
							animate="enter"
							transition={{ type: 'linear', delay: 0.8 }}
							className="text-4xl"
						>
							{formatTime(props.timerValue)}
						</motion.p>
					</div>
				</div>
			</CircularProgressbarWithChildren>
		</motion.div>
	);
}
