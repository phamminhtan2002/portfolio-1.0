import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};
function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			'Web Development',
			'CI/CD',
			'Cloud Computing',
			'React.js',
			'MySQL',
			'Nodejs',
			'Python',
			'Next.js',
			'WordPress',
			'Docker',
			'Microservices',
			'HTML',
			'CSS',
			'Tailwind',
			'JavaScript',
			'TypeScript',
			'Git',
			'Jenkins',
			'Linux',
			'AWS',
			'Windows Server',
			'Microservices',
			'Kubernetes',
		],
		loop: true,
		typeSpeed: 100,
		deleteSpeed: 69,
		delaySpeed: 2000,
	});

	const style = {
		wrapper: `h-screen flex flex-col space-y-8 items-ceter justify-center text-center overflow-hidden`,
		profileImg: `relative rounded-full mx-auto`,
		title: `text-sm uppercase text-gray-500 pb-2 tracking-[14px]`,
		subtitle: `text-xl lg:text-3xl font-semibold px-10`,
		subtitle__text: `text-5xl lg:text-6xl mr-2`,
		menu: `pt-5`,
		content: `z-20`,
	};

	return (
		<div className={style.wrapper}>
			<BackgroundCircles />
			<Image
				alt="Profile Image"
				src="https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.6435-9/83490279_2240932376212577_4557153166562426880_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=esrfrYl9tPMAX85k3Nl&_nc_ht=scontent.fyvr4-1.fna&oh=00_AfCYfyjdvRAux62UNcU8i5Do_BG8Zd36tMkw5EPdABx2lg&oe=6415E6BC"
				height={128}
				width={128}
				className={style.profileImg}
			/>
			<div className={style.content}>
				<h1 className={style.title}>Pham Minh Tan</h1>
				<h2 className={style.subtitle}>
					I'm proficient at&nbsp;
					<span className={style.subtitle__text}>{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h2>
				<div className={style.menu}>
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
export default Hero;
