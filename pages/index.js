import { useState, useEffect, useContext } from 'react';
import { BsPlayFill, BsVolumeUp, BsPauseFill, BsStopFill, BsVolumeMute } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';
import { IoIosInformationCircleOutline, IoIosColorWand } from 'react-icons/io';
import 'react-circular-progressbar/dist/styles.css';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import Clock from '../components/Clock/Clock';
import { useRouter } from 'next/router';
import ConfigContext from '../store/configStore';
import Button from '../components/Button/Button';
import ControlButton from '../components/ControlButton/ControlButton';

export default function Home(props) {
	const router = useRouter();
	let configCtx = useContext(ConfigContext);
	const [ currentRound, setCurrentRound ] = useState(0);
	const phases = [ 'Focus', 'Short break', 'Break' ];
	const [ timerValue, setTimerValue ] = useState(configCtx.timing.focusTime * 60);
	const [ phase, setPhase ] = useState(0);
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ isClockVisible, setIsClockVisible ] = useState(true);
	const [ totalValueTimer, setTotalValueTimer ] = useState(configCtx.timing.focusTime);
	const [ timerId, setTimerId ] = useState();
	const [ isMuted, setIsMuted ] = useState(false);
	const [ pauseTimerId, setPauseTimerId ] = useState();

	const startTimer = () => {
		const newCurrent = timerValue;
		newCurrent -= 1;
		if (isPlaying) {
			setTimerValue(newCurrent);
		}
	};

	let handleStartStop = (type) => {
		clearInterval(timerId);
		clearTimeout(pauseTimerId);
		if (type === 'play') {
			setIsPlaying(!isPlaying);
		}
		else if (type === 'stop') {
			setIsPlaying(false);
			if (phase === 0) {
				setTimerValue(totalValueTimer);
			}
			else if (phase === 1) {
				setTimerValue(totalValueTimer);
			}
			else {
				setTimerValue(totalValueTimer);
			}
		}
	};

	let resetPomodoroHandler = () => {
		setTimerValue(totalValueTimer);
		setCurrentRound(0);
		setPhase(0);
		clearInterval(timerId);
		setIsPlaying(false);
		clearTimeout(pauseTimerId);
	};
	let soundVolumeHandler = () => {
		setIsMuted(!isMuted);
	};

	useEffect(() => {
		setTimerValue(configCtx.timing.focusTime * 60);
		setTotalValueTimer(configCtx.timing.focusTime * 60);
		setCurrentRound(0);
		setPhase(0);
	}, []);
	let switchThemeHandler = () => {
		configCtx.changeTheme('light');
	};
	useEffect(
		() => {
			if (timerValue < 0) {
				setIsPlaying(false);
				setPauseTimerId(
					setTimeout(() => {
						setIsPlaying(true);
					}, 2000)
				);

				if (phase === 0) {
					// Break phase
					if (currentRound !== 3) {
						setPhase(1);
						setTimerValue(configCtx.timing.shortBreakTime * 60);
						setTotalValueTimer(configCtx.timing.shortBreakTime * 60);
						setCurrentRound(currentRound + 1);
					}
					else {
						setPhase(2);
						setTimerValue(configCtx.timing.longBreakTime * 60);
						setTotalValueTimer(configCtx.timing.longBreakTime * 60);
					}
				}
				else if (phase === 1) {
					setPhase(0);
					setTimerValue(configCtx.timing.focusTime * 60);
					setTotalValueTimer(configCtx.timing.focusTime * 60);
				}
				else {
					setPhase(0);
					setTimerValue(configCtx.timing.focusTime * 60);
					setTotalValueTimer(configCtx.timing.focusTime * 60);
					setCurrentRound(0);
				}

				clearInterval(timerId);
				return () => clearInterval(timerId);
			}
			if (isPlaying) {
				let timerid = setInterval(startTimer, 1000);
				setTimerId(timerid);
			}
			return () => {
				clearInterval(timerId);
				clearTimeout(pauseTimerId);
			};
		},
		[ timerValue, isPlaying ]
	);
	const theme = configCtx.theme;
	// current time / total time for each phase * 100
	return (
		<motion.main
			initial={{ opacity: 0, x: -200 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -200 }}
			className="my-6"
		>
			{/* Timer */}
			<div
				className={[
					styles.timerWrapper,
					theme === 'dark' ? 'bg-gray-900' : 'bg-white',
					theme === 'dark' ? 'text-white' : 'text-black'
				].join(' ')}
			>
				<div className="w-full flex justify-center">
					<div className="flex justify-between w-10/12 my-4 text-2xl">
						<Button toolTip={'Information'}>
							<IoIosInformationCircleOutline />
						</Button>
						<Button toolTip={'Reset'} onClick={resetPomodoroHandler}>
							<BiRefresh />
						</Button>
					</div>
				</div>
				<Clock
					timerValue={timerValue}
					totalValueTimer={totalValueTimer}
					phase={phases[phase]}
					currentRound={currentRound}
					isVisible={isClockVisible}
					isPlaying={isPlaying}
					key="clock"
				/>

				<div className="w-full flex justify-center">
					<div className="flex justify-between w-10/12 my-4 text-2xl">
						<Button toolTip={'Switch Theme'} onClick={switchThemeHandler}>
							<IoIosColorWand />
						</Button>
						<Button toolTip={'Sound'} onClick={soundVolumeHandler}>
							{isMuted ? <BsVolumeMute /> : <BsVolumeUp />}
						</Button>
					</div>
				</div>

				<section className="flex justify-evenly h-20 my-2">
					<ControlButton onClick={() => handleStartStop('play')} theme={theme} controlType="play">
						{isPlaying ? (
							<BsPauseFill className="h-full w-7/12" />
						) : (
							<BsPlayFill className="h-full w-7/12" />
						)}
					</ControlButton>
					<ControlButton onClick={() => handleStartStop('stop')} theme={theme} controlType="stop">
						<BsStopFill className="h-full w-7/12" />
					</ControlButton>
				</section>
			</div>
		</motion.main>
	);
}
