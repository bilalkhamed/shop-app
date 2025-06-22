import { Metadata } from 'next';
import CategoriesList from '@/components/categories/categories-list';


export default function CategoriesPage() {
    return (
        <>
            <header className='text-center mb-4'>
                <h1 className='text-3xl font-bold tracking-tight'>Shop by Category</h1>
                <p className='text-default-500'>Choose a category to explore our products.</p>
            </header>

            <CategoriesList />
        </>
    );
}
