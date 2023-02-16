import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

function Header({}: Props) {
	const style = {
		wrapper: `sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center`,
		icons: `flex flex-row items-center`,
		mail: `flex flex-row items-center text-gray-300 cursor-pointer`,
		getintouch: `uppercase hidden md:inline-flex text-sm text-gray-400`,
	};

	return (
		<header className={style.wrapper}>
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.4 }}
				className={style.icons}>
				{/* Social Icons */}
				<SocialIcon
					url="https://www.linkedin.com/in/phamminhtan/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.facebook.com/TanPhamMinh2002/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/phamminhtan2002"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>

			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.4 }}
				className={style.mail}>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="gray"
					bgColor="transparent"
				/>
				<p className={style.getintouch}>Get In Touch</p>
			</motion.div>
		</header>
	);
}
export default Header;
