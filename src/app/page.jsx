import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

export default function Home() {
	return (
		<div className='bg-gradient-to-br from-red-600 to-purple-800 min-h-screen w-full flex justify-center items-center'>
			<div className='sm:w-5/5 md:w-4/5 lg:w-3/5 text-white'>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
}
