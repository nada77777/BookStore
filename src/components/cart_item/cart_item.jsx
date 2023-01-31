import React from 'react';
import styles from './cart_item.module.css';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
const CartItem = (props) => {

    return (
        <div className={styles.cartItem}>
            <div className={styles.imgAndTitle}>
                <img src={props.item.coverSmallUrl} alt="cart_item_img" />
                <h5>{props.item.title}</h5>
                <h5>{props.item.author}</h5>
            </div>
            <div className={styles.counter}>
                <span onClick={() => props.addItem(props.item)}><BsChevronUp /></span>
                <span>{props.item.count}</span>
                <span onClick={() => props.deleteItem(props.item)}><BsChevronDown /></span>
            </div>
            <span className={styles.price}>{props.item.priceSales}</span>
            <span className={styles.deleteBtn} onClick={() => props.deleteItem(props.item, 'deleteAll')}><MdClose /></span>
        </div>
    );
};

export default CartItem;