import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Wrapper from './App.styles';
import { CartItemType } from './types';
import { getProducts } from './utils/utils'
import Item from './components/Item/Item';

function App() {

  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);

  const getTotalItems = () => {
    return null;
  }

  const handleAddToCart = () => {
    return null;
  }

  const handleRemoveFromCart = () => {
    return null;
  }

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
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
