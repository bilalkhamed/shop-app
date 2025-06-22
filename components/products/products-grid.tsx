import { Product } from '@/types';
import ProductCard from './product-card';

type Props = {
    products: Product[];
};

export default function ProductGrid({ products }: Props) {
    return (
        <div className='grid grid-cols-1 gap-6'>
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}
