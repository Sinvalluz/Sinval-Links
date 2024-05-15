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
		<main>
			<ul>
				{links.map((link) => (
					<li key={link.id}>
						<Link
							href={link.link}
							target='_blank'
						>
							{link.icone}
							{link.nome}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
