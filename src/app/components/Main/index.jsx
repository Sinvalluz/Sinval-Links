import Link from 'next/link';
import { FaInstagram, FaGithub, FaEnvelope, FaTwitch, FaGamepad, FaSquareXTwitter } from 'react-icons/fa6';

const links = [
	{
		id: 1,
		nome: 'Github',
		link: 'https://github.com/Sinvalluz',
		icone: <FaGithub />,
	},
	{
		id: 2,
		nome: 'Instagram',
		link: 'https://www.instagram.com/sinval_ls/',
		icone: <FaInstagram />,
	},
	{
		id: 3,
		nome: 'X',
		link: 'https://twitter.com/Sinval_Luzzz',
		icone: <FaSquareXTwitter />,
	},
	{
		id: 4,
		nome: 'Twitch',
		link: 'https://www.twitch.tv/kinglsss',
		icone: <FaTwitch />,
	},
	{
		id: 5,
		nome: 'Op.gg(Conta Lol)',
		link: 'https://www.op.gg/summoners/br/Kingls-1207',
		icone: <FaGamepad />,
	},
	{
		id: 6,
		nome: 'E-mail',
		link: 'mailto:contato.sinvalluz@gmail.com',
		icone: <FaEnvelope />,
	},
];

export default function Main() {
	return (
		<main className='w-full flex items-center justify-center'>
			<ul className=' flex flex-col gap-4 w-4/5'>
				{links.map((link) => (
					<li key={link.id}>
						<Link
							href={link.link}
							target='_blank'
							className='flex items-center justify-center relative w-full p-3 border-2 rounded-lg sm:text-lg text-base hover:scale-110 transition-all'
						>
							<span className='absolute left-4 sm:text-4xl text-2xl'>{link.icone}</span>

							{link.nome}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
