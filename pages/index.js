import Head from 'next/head';
import { siteTitle } from '../components/layouts/main';
import withTransition from '../HOC/withTransition';
import AnimatedTitle from '../components/AnimatedTitle';
import Player from './player';
import WordCloud from '../components/WordCloud';

const Home = () => {
	return (
		<>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<AnimatedTitle />
			<WordCloud></WordCloud>
			{/*<Player />*/}
		</>
	);
};

export default withTransition(Home);
