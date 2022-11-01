import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { urlFor } from '../sanity';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/basketSlice';
import toast from 'react-hot-toast';

interface Props {
	product: Product;
}

function Product({ product }: Props) {
	const dispatch = useDispatch();

	const addItemToBasket = () => {
		dispatch(addToBasket(product));

		toast.success(`${product.title} added to basket`, {
			position: 'bottom-center'
		});
	};

	return (
		<div className="product-card">
			<div className="relative w-full h-48 mb-3">
				<Image src={urlFor(product.image[0]).url()} layout="fill" objectFit="contain" />
			</div>

			<h4 className="font-medium">{product.title}</h4>
			<h4>${product.price} NZD</h4>

			<div className="product-cart-icon" onClick={addItemToBasket}>
				<ShoppingCartIcon className="h-6 w-6 text-white" />
			</div>
		</div>
	);
}

export default Product;
