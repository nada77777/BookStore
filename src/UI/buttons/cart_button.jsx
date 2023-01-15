import React from 'react';
import styles from './cart_button.module.css';

const CartButton = (props) => {
    return (
        <button className={`${styles.cartButton} ${props.styles}`}>ADD TO CART</button>
    )
}

export default CartButton;