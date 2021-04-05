import { CartItemType } from '../../types';
import CartItem from '../CartItem/CartItem';
import Wrapper from './Cart.styles';
import { CartProps } from './types';

const Cart = ({cartItems, addToCart, removeFromCart}: CartProps) => {
    const calculateTotal = (items: CartItemType[]) => (
        items.reduce((acc: number, item) => acc + item.amount * item.price, 0)
    );

    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 && <p>No items in cart.</p>}
            {cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: £{calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart;
