import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Sinval-Links',
	description: 'Site de links De SinvalDev',
};

export default function RootLayout({ children }) {
	return (
		<html lang='pt-br'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
