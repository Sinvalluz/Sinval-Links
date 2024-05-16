import Image from 'next/image';

export default function Header() {
	return (
		<header className='flex flex-col justify-center items-center gap-4 mb-8'>
			<Image
				src='https://github.com/Sinvalluz.png'
				alt='Foto de perfil'
				width={200}
				height={200}
				className='rounded-full'
			/>
			<h1 className='text-4xl'>Sinval Luz</h1>
			<p className='text-lg sm:text-2xl text-wrap text-center w-4/5'>
				Bacharelado engenharia da computação 5/10, estudante de programação(HTML, CSS, JAVASCRIPT, REACT, PYTHON
				, SQL E AWS) e gamer(League of legends).
			</p>
		</header>
	);
}
