import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string
}

interface CartState {
    items: CartItem[];
    gstRate: number;
}

const initialState: CartState = {
    items: [],
    gstRate: 18,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload);
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, incrementQuantity, decrementQuantity, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
