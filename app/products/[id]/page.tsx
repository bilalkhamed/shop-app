
import { notFound } from 'next/navigation';
import { Star, ShoppingCart } from 'lucide-react';
import { Chip } from '@heroui/chip';
import { Divider } from '@heroui/divider';
import { Button } from '@heroui/button';
import { getProductById } from '@/lib/data';
import useCart from '@/lib/useCart';
import ProductView from '@/components/products/product-view';

type Props = {
    params: { id: string };
};

export default async function ProductPage({ params }: Props) {
    const id = await parseInt(params.id);
    const product = getProductById(id);

    if (!product) return notFound();

    return (
        <ProductView product={product} />
    );
}
