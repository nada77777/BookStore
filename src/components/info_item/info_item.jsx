import React from 'react';
import { useState } from 'react';
import CartButton from '../../UI/buttons/cart_button';
import PriceButton from '../../UI/buttons/price_button';
import styles from './info_item.module.css';
const InfoItem = (props) => {
    const [count, setCount] = useState(0);
    const [cartItem, setCartItem] = useState({});

    const plusCount = () => {
        setCount((prev) => prev + 1);
        setCartItem({ ...props.item, count: count });
    };

    const minusCount = () => {
        if (count === 0) {
            return;
        }
        setCount((prev) => prev - 1);
        setCartItem({ ...props.item, count: count });
    };

    return (
        <div className={styles.infoItem}>
            <div className={styles.infoItemImg}>
                <img src={props.item.coverLargeUrl} alt="info_img" />
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>{props.item.title}</h1>
                <p className={styles.author}>Author: {props.item.author || '없음'}</p>
                <div className={styles.price}>
                    <span className={styles.priceStandard}>₩ {props.item.priceStandard}</span>
                    <PriceButton price={props.item.priceSales} styles={styles.infoPriceButton} />
                </div>
                <pre className={styles.description}>
                    {props.item.description}
                </pre>
                <div className={styles.buttons}>
                    <button onClick={minusCount} className={styles.minus}>-</button>
                    <button className={styles.number}>{count}</button>
                    <button onClick={plusCount} className={styles.plus}>+</button>
                    <CartButton cartItem={cartItem} item={props.item} itemCount={count} styles={styles.infoCartButton} />
                </div>
            </div>
        </div>
    );
};

export default InfoItem;