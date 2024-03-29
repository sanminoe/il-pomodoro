import { useRouter } from 'next/router';
import Link from 'next/link';
import { useContext } from 'react';

import ConfigContext from '../../store/configStore';
import style from './style.module.css';
export default (props) => {
	const configCtx = useContext(ConfigContext);
	const router = useRouter();

	return (
		<header
			className={`flex justify-center ${configCtx.theme === 'dark'
				? 'text-white'
				: 'text-black'} h-12 w-10/12 z-20`}
		>
			<div className="flex justify-between items-center w-full h-full">
				<div>
					<h1 className="text-xl 2xl:text-5xl">Pomo</h1>
				</div>
				<div className="h-full">
					{router.route === '/' && (
						<button className={`${style.settingButton}`}>
							<Link href="/setting">
								<div className="flex w-12 h-full items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-full h-full transform hover:rotate-90 transition-transform"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
							</Link>
						</button>
					)}
				</div>
			</div>
		</header>
	);
};
