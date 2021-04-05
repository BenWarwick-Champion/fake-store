import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper, StyledButton } from './App.styles';
import { CartItemType } from './types';
import { getProducts } from './utils/utils'
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';

function App() {

  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);

  const getTotalItems = (items: CartItemType[]) => (
    items.reduce((sum: number, items: CartItemType) => sum + items.amount, 0)
  );

  const handleAddToCart = (clickedItem: CartItemType) => (
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)
      if (isItemInCart) {
        return prev.map(item => 
          item.id === clickedItem.id
          ? {...item, amount: item.amount + 1}
          : item
        );
      }
      // Otherwise, it's a new item being added
      return [...prev, {...clickedItem, amount: 1}];
    })
  )

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, {...item, amount: item.amount - 1}];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[]) // Add this to the reduce function to prevent TS from whining
    ))
  }

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Drawer anchor={'right'} open={cartIsOpen} onClose={() => setCartIsOpen(false)}>
        <Cart 
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartIsOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item: CartItemType) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
