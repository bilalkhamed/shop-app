'use client';

import { Product } from '@/types';
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { BadgeCheckIcon, CheckIcon, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import useCart from '@/lib/useCart';
import clsx from 'clsx';
import TopAlert from '../top-alert';
import { useState } from 'react';

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const { addItem } = useCart();
    const [showAlert, setShowAlert] = useState(false);

    const handleCartOnClick = () => {
        if (!product.inStock) return;
        addItem({
            id: product.id,
            quantity: 1,
        });
        setShowAlert(true);

        // <TopAlert message={`Added ${product.name} to cart!`} />
        // Optionally, you can show a toast or notification here
    };

    return (
        <>
            <Card
                isHoverable
                shadow='lg'
                className='relative flex flex-col sm:flex-row overflow-hidden hover:shadow-2xl transition-all duration-300 group'
            >
                {/* Product Image */}
                <div className='relative w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden'>
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                </div>
                {/* Info */}
                <CardBody className='sm:w-2/3 p-5 flex flex-col justify-between space-y-3'>
                    <div className='flex justify-between items-start'>
                        <h3 className='text-xl font-bold line-clamp-1'>{product.name}</h3>
                        {product.inStock ? (
                            <Chip color='default' variant='flat'>In Stock</Chip>
                        ) : (
                            <Chip color='danger' variant='flat'>Out of Stock</Chip>
                        )}
                    </div>

                    {/* Rating */}
                    <div className='flex items-center gap-1 text-yellow-500'>
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                fill={i < product.rating ? 'currentColor' : 'none'}
                                strokeWidth={1.5}
                            />
                        ))}
                        <span className='text-sm text-default-500 ml-2'>
                            ({product.reviewCount})
                        </span>
                    </div>

                    {/* Description */}
                    <p className='text-sm text-default-600 line-clamp-2'>{product.shortDescription}</p>

                    {/* Price */}
                    <div className='flex justify-between items-center mt-auto'>
                        <p className='text-xl font-semibold text-primary'>{Math.round(product.price)} JOD</p>
                        <div className='flex items-center gap-2'>

                            <Button as={Link} size='sm' variant='flat' color='default' href={`/products/${product.id}`}>View</Button>
                            <Button
                                onPress={handleCartOnClick}
                                size='sm'
                                color='primary'
                                variant='flat'
                                disabled={!product.inStock}
                                className={
                                    clsx(
                                        product.inStock ? '' : 'cursor-not-allowed opacity-50 ',
                                    )
                                }
                            >
                                <ShoppingCart size={16} className='mr-1' />

                            </Button>

                        </div>
                    </div>
                </CardBody>
            </Card>
            {showAlert && (
                <TopAlert
                    message={`Added ${product.name} to cart!`}
                    color='success'
                    variant='flat'
                    icon={<CheckIcon size={16} />}
                    onClose={() => setShowAlert(false)}
                />
            )}
        </>

    );
}
