import { CartItemType } from "../../types";

export interface ItemsProps {
    item: CartItemType,
    handleAddToCart: (clickedItem: CartItemType) => void,
}