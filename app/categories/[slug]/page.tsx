import { notFound } from 'next/navigation';
import categories from '@/data/categories';
import Link from 'next/link';
import { toSlug } from '@/lib/utils';
import ProductGrid from '@/components/products/products-grid';
import { findCategoryBySlug, getProductsByCategoryId } from '@/lib/data';
import { Badge } from '@heroui/badge';

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    const category = findCategoryBySlug(slug);

    if (!category) return notFound();

    const products = getProductsByCategoryId(category.id);
    console.log(products)

    return (
        <div className='max-w-6xl mx-auto px-4 py-10 space-y-6'>
            <header className='space-y-2 text-center'>
                <h1 className='text-3xl font-bold tracking-tight gap-2'>
                    <span className='px-2'>{category.emoji}</span>
                    {category.name}
                </h1>
                <p className='text-default-500'>{category.description}</p>
            </header>

            {/* Example: products filtered by this category */}
            <section className='text-center'>
                <ProductGrid
                    products={products} />
                <Link href='/categories' className='underline text-primary text-sm mt-4 inline-block'>
                    ← Back to all categories
                </Link>
            </section>
        </div>
    );
}
