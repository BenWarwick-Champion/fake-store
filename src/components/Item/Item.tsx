import Button from '@material-ui/core/Button';
import { CartItemType } from '../../types';
import Wrapper from './Item.styles';
import { ItemsProps } from './types';

const Item = ({item, handleAddToCart}: ItemsProps) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>£{item.price.toFixed(2)}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>
            Add To Cart
        </Button>
    </Wrapper>
)

export default Item;
