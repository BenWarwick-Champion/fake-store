import { CartItemType } from "../types";

export const getProducts = async (): Promise<CartItemType[]> => {
    return await (await fetch('https://fakestoreapi.com/products')).json();
}