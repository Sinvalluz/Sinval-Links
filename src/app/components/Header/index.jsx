import Image from 'next/image';

export default function Header() {
	return (
		<header className='flex flex-col justify-center items-center gap-4'>
			<Image
				src='https://github.com/Sinvalluz.png'
				alt='Foto de perfil'
				width={200}
				height={200}
			/>
			<h1>Sinval Luz</h1>
			<p>
				Bacharelado engenharia da computação 5/10, estudante de programação(HTML, CSS, JAVASCRIPT, REACT, PYTHON
				, SQL E AWS) e gamer(League of legends).
			</p>
		</header>
	);
}
