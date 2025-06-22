// import { Category, Product } from "@/types";
import categories from '@/data/categories';
import products from '@/data/products'
import { toSlug } from './utils';

export function findCategoryBySlug(slug: string) {
    return categories.find(c => toSlug(c.name) === slug);
};

export function getProductsByCategoryId(categoryId: number) {
    return products.filter(p => p.categoryId === categoryId);
}

export function getProductById(id: number) {
    console.log('getProductById called with id:', id, typeof id);
    return products.find(p => p.id === id);
}

export function getProductsByIds(ids: number[]) {
    console.log('getProductsById called with ids:', ids, typeof ids);
    return products.filter(p => ids.includes(p.id));
}
