import { Tab } from '@headlessui/react';

import Product from './Product';

interface Props {
	categories: Category[];
	products: Product[];
}

const Promos = ({ categories, products }: Props) => {
	const showProducts = (_id: string) => {
		return products
			.filter((product: Product) => product.category._ref === _id)
			.map((product: Product) => <Product product={product} key={product._id} />);
	};
	return (
		<div className="container">
			<Tab.Group>
				<Tab.List className=" flex justify-center">
					{categories.map((category: Category) => (
						<Tab
							key={category._id}
							id={category._id}
							className={({ selected }) =>
								`whitespace-nowrap rounded-t-lg py-2 px-5 outline-none md:px-6 transition hover:opacity-75
									${selected ? 'border-amber-500 bg-primary-d text-secondary' : 'border-b-2 border-primary-l text-[#747474]'}`}
						>
							{category.title}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mx-auto pt-8">
					{categories.map((category: Category) => (
						<Tab.Panel className="tabPanel" key={category._id}>
							{showProducts(category._id)}
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

export default Promos;
