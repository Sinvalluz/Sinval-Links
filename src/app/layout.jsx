import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata = {
	title: 'Sinval-Links',
	description: 'Site de links De SinvalDev',
};

export default function RootLayout({ children }) {
	return (
		<html lang='pt-br'>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
