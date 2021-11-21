import Header from '../Header/Header';
import ConfigContext from '../../store/configStore';
import { useContext } from 'react';
import style from './style.module.css';
export default ({ children, page, redirectTo }) => {
	const configCtx = useContext(ConfigContext);
	return (
		<div
			className={`flex h-[100vh] flex-col items-center ${configCtx.theme === 'dark'
				? 'bg-gray-900'
				: 'bg-white'}`}
		>
			<Header page={page} redirectTo={redirectTo} />
			<div className={style.wavesContainer + ' overflow-hidden'}>
				<div className={style.wave + ' top-3/4'}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill={`${configCtx.theme === 'dark' ? 'rgb(239,68,68)' : 'rgb(16, 185, 129)'}`}
							fillOpacity="1"
							d="M0,64L40,69.3C80,75,160,85,240,101.3C320,117,400,139,480,154.7C560,171,640,181,720,186.7C800,192,880,192,960,165.3C1040,139,1120,85,1200,80C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
						/>
					</svg>
				</div>
			</div>
			<div className="w-5/6 z-10 h-[fit-content] overflow-hidden">{children}</div>
		</div>
	);
};
