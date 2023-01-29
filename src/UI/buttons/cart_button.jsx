import React from 'react';
import { UseCartContext } from '../../context/cart_context';
import styles from './cart_button.module.css';

const CartButton = (props) => {
    const { addItem } = UseCartContext();

    return (
        <button onClick={() => addItem(props.item, props.itemCount)} className={`${styles.cartButton} ${props.styles}`}>ADD TO CART</button>
    )
}

export default CartButton;