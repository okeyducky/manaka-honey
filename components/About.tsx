import Image from 'next/image';
import Button from './Button';

const About = () => {
	return (
		<div className="container grid gap-16 bg-stone-100 md:grid-cols-[35%,65%] md:gap-0 items-center md:bg-transparent">
			<div className="image-container m-auto max-w-md">
				<Image src="/beekeeping.jpg" layout="fill" objectFit="contain" className="image rounded-3xl" />
			</div>
			<div className="md:ml-[-10%] bg-stone-100 md:shadow md:py-[10%] md:px-[15%]">
				<h3> Who We Are</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non mi turpis. In ultricies, mi
					porta.
				</p>
				<p>
					Ut eleifend finibus odio, eget commodo ante facilisis viverra. Interdum et malesuada fames ac ante
					ipsum primis in faucibus.
				</p>
				<Button title="Learn More" />
			</div>
		</div>
	);
};

export default About;
