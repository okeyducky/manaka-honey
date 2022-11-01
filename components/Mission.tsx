import Image from 'next/image';
import Button from './Button';

const Mission = () => {
	return (
		<div className="container  pb-[60px] sm:pb-[150px] grid gap-16 bg-stone-100 md:grid-cols-[65%,35%] md:gap-0 items-center md:bg-transparent">
			<div className="bg-stone-100 order-2 md:order-1 md:shadow md:py-[10%] md:px-[15%]">
				<h3> What We Do</h3>
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
			<div className="image-container order-1 md:order-2 m-auto max-w-md md:ml-[-10%]">
				<Image src="/beekeeping.jpg" layout="fill" objectFit="contain" className="image rounded-3xl" />
			</div>
		</div>
	);
};

export default Mission;
