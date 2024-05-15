import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

export default function Home() {
	return (
		<div className='bg-gradient-to-r from-start to-mid'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
