import { Card, CardHeader } from '@heroui/card';
import categories from '@/data/categories';
import { Category } from '@/types';
import Link from 'next/link';
import { toSlug } from '@/lib/utils';

export default function CategoriesList() {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {categories.map((category) => (
                <CategoryCard key={category.id} {...category} />
            ))}
        </section>
    );
}

const CategoryCard = (category: Category) => {
    return (
        <Link href={`/categories/${toSlug(category.name)}`}>
            <Card shadow='sm' isHoverable>
                <CardHeader className='flex items-center flex-col gap-3'>
                    <div className='text-3xl'>{category.emoji}</div>
                    <div className='text-center'>
                        <h3 className='text-lg font-semibold'>{category.name}</h3>
                        <p className='text-sm text-default-500'>{category.description}</p>
                    </div>
                </CardHeader>
            </Card>
        </Link>
    );
}