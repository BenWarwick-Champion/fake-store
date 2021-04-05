import { CartItemType } from "../../types";

export interface CartItemProps {
    item: CartItemType,
    addToCart: (clickedItem: CartItemType) => void,
    removeFromCart: (id: number) => void
}