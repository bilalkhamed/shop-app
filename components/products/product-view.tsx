'use client';

import { Product } from "@/types";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { CheckIcon, ShoppingCart } from "lucide-react";
import useCart from "@/lib/useCart";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import TopAlert from "../top-alert";

type ProductViewProps = {
    product: Product;
};

export default function ProductView({ product }: ProductViewProps) {
    const { items, addItem } = useCart();
    const [showAlert, setShowAlert] = useState(false);
    const isInCart = items.some((item) => item.id === product.id);

    const handleAddToCart = () => {
        if (!isInCart) {
            addItem({ id: product.id });
            setShowAlert(true);
        }
    };


    return (
        <>
            <div className='flex flex-col lg:flex-row gap-8'>
                {/* Image */}
                <div className='w-full lg:w-1/2'>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className='rounded-xl object-cover w-full h-[400px] shadow-md'
                    />
                </div>

                {/* Info */}
                <div className='w-full lg:w-1/2 space-y-4'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-3xl font-bold'>{product.name}</h1>
                        <Chip
                            color={product.inStock ? 'success' : 'danger'}
                            variant='flat'
                            size='sm'
                        >
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </Chip>
                    </div>

                    <p className='text-default-500 font-medium'>by {product.brand}</p>

                    <div className='flex items-center gap-2'>
                        {[...Array(5)].map((_, i) => (
                            <StarIcon
                                key={i}
                                size={18}
                                className={
                                    i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                                }
                                fill={i < Math.round(product.rating) ? 'currentColor' : 'none'}
                            />
                        ))}
                        <span className='text-sm text-default-400'>({product.reviewCount})</span>
                    </div>

                    <p className='text-2xl font-bold text-primary'>
                        JD {Math.round(product.price)}
                    </p>

                    <Button
                        onClick={handleAddToCart}
                        color={isInCart ? 'default' : 'primary'}
                        variant={isInCart ? 'flat' : 'solid'}
                        isDisabled={!product.inStock || isInCart}
                        startContent={<ShoppingCart size={18} />}
                    >
                        {isInCart ? 'Already in Cart' : 'Add to Cart'}
                    </Button>

                    <Divider />

                    <div>
                        <h2 className='font-semibold text-lg mb-1'>About this product</h2>
                        <p className='text-default-600 leading-relaxed'>
                            {product.longDescription}
                        </p>
                    </div>

                    <Divider />

                    <div>
                        <h2 className='font-semibold text-lg mb-2'>Specifications</h2>
                        <div className='border rounded-md p-4 bg-default-50'>
                            <table className='w-full text-sm'>
                                <tbody>
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <tr key={key} className='border-b last:border-none'>
                                            <td className='py-2 font-medium capitalize'>{key}</td>
                                            <td className='py-2 text-right'>{value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
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
