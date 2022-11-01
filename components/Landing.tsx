import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Landing = () => {
	return (
		<div className="container pt-0 grid gap-16 lg:grid-cols-[45%,55%] lg:gap-4 items-center justify-center">
			<div className="order-2 lg:order-1">
				<h1 className="title">
					100% Natural <br /> Bee Honey
				</h1>
				<h4>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard.
				</h4>
					<Button title="Buy Now" />
			</div>

			<div className="image-container order-1 lg:order-2">
				<Image src="/landing.png" layout="fill" className="image" />
			</div>
		</div>
	);
};

export default Landing;
