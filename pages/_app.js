import 'tailwindcss/tailwind.css';
import '../style.css';
import { ConfigContextProvider } from '../store/configStore';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { useRouter } from 'next/router';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<ConfigContextProvider>
			<Head>
				<title>Pomo</title>
			</Head>
			<Layout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</ConfigContextProvider>
	);
}

export default MyApp;
