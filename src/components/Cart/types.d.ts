import { CartItemType } from "../../types";

export interface CartProps {
    cartItems: CartItemType[],
    addToCart: (clickedItem: CartItemType) => void,
    removeFromCart: (id: number) => void
};