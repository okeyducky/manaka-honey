import Image from 'next/image';
import Link from 'next/link';

const NavLogo = () => {
	return (
		<Link href="/">
			<div className="relative h-10 w-32 cursor-pointer transition hover:opacity-75">
				<Image src="/logo.png" layout="fill" className="image" />
			</div>
		</Link>
	);
};

export default NavLogo;
