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
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)} />
    </Wrapper>
)

export default Item;
