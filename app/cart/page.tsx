'use client';

import { getProductsByIds } from '@/lib/data';
import useCart from '@/lib/useCart';
import Image from 'next/image';
import { Link } from '@heroui/link';
import clsx from 'clsx';
import { Button } from '@heroui/button';

export default function CartPage() {
    const { items, removeItem, clearCart, addItem, decreaseItem } = useCart();

    const itemsData = getProductsByIds(items.map(item => item.id)).map((product) => {
        const cartItem = items.find(item => item.id === product.id);
        return {
            ...product,
            quantity: cartItem?.quantity || 1,
        };
    });

    const getTotalPrice = () =>
        itemsData.reduce((total, item) => total + item.price * item.quantity, 0);

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
                <p className="text-gray-600">Add some products to your cart first:</p>
                <Link href="/categories" aria-label="Go to products page">
                    Browse Products by Categories
                </Link>
            </div>
        );
    }

    return (
        <main className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

            <ul className="space-y-6">
                {itemsData.map((item, i) => (
                    <li
                        key={item.id}
                        className={clsx(
                            "flex gap-4 items-center pb-4",
                            (items.length > 1 && i !== items.length - 1) && "border-b"

                        )
                        }
                    >
                        <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-md object-cover"
                        />

                        <div className="flex-1">
                            <Link
                                href={`/products/${item.id}`}
                                className="text-lg font-semibold hover:underline"
                            >
                                {item.name}
                            </Link>
                            <p className="text-sm text-gray-600">
                                Price: <span className="font-medium">${Math.round(item.price)}</span>
                            </p>
                            <div className="flex items-center gap-3 mt-1">
                                <button
                                    onClick={() => {
                                        decreaseItem(item.id);
                                    }}
                                    disabled={item.quantity <= 1}
                                    className={clsx(
                                        "bg-gray-200 px-2 py-1 rounded hover:bg-gray-300",
                                        item.quantity <= 1 && "opacity-50 cursor-not-allowed"
                                    )
                                    }
                                >
                                    -
                                </button>
                                <span className="text-sm font-medium">{item.quantity}</span>
                                <button
                                    onClick={() => addItem({ id: item.id })}
                                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                                Total: <span className="font-semibold">${Math.round(item.price * item.quantity)}</span>
                            </p>
                            {!item.inStock && (
                                <p className="text-red-500 text-sm mt-1 font-semibold">
                                    Out of stock
                                </p>
                            )}
                        </div>

                        <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-800 font-semibold"
                            aria-label={`Remove ${item.name} from cart`}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <div className="mt-8 flex justify-between items-center border-t pt-4">
                <Button
                    onPress={clearCart}
                    color='danger'
                    variant='flat'
                >
                    Clear Cart
                </Button>

                <p className="text-xl font-bold">
                    Total Price: ${Math.round(getTotalPrice())}
                </p>
            </div>
        </main>
    );
}
