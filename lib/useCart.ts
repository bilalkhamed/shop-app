import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types';

type CartItem = {
    id: number;
    quantity: number
}

type CartState = {
    items: CartItem[];
    addItem: (item: { id: number }) => void;
    removeItem: (itemId: number) => void;
    clearCart: () => void;
    decreaseItem: (itemId: number) => void;
};

const useCart = create(persist<CartState>((set) => ({
    items: [],
    addItem: (newItem) => set((state) => {
        const existing = state.items.find(item => item.id === newItem.id);

        if (existing) {
            return {
                items: state.items.map(item =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        }

        return {
            items: [...state.items, { ...newItem, quantity: 1 }]
        };
    }),



    removeItem: (itemId) => set((state) => ({
        items: state.items.filter(item => item.id !== itemId),
    })),

    decreaseItem: (itemId) => set((state) => {
        const existing = state.items.find(item => item.id === itemId);
        if (!existing) return { items: state.items };

        if (existing.quantity === 1) return state;
        return {
            items: state.items.map(item =>
                item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
            )
        };
    }),


    clearCart: () => set({ items: [] })

}), {
    name: 'cart'
}));

export default useCart;