import React from 'react';
import CartButton from '../../UI/buttons/cart_button';
import PriceButton from '../../UI/buttons/price_button';
import styles from './info_item.module.css';
const InfoItem = (props) => {


    return (
        <div className={styles.infoItem}>
            <div className={styles.infoItemImg}>
                <img src={props.item.coverLargeUrl} alt="info_img" />
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>{props.item.title}</h1>
                <p className={styles.author}>Author: {props.item.author}</p>
                <div className={styles.price}>
                    <span className={styles.priceStandard}>{props.item.priceStandard}</span>
                    <PriceButton price={props.item.priceSales} styles={styles.infoPriceButton} />
                </div>
                <pre className={styles.description}>
                    {props.item.description}
                </pre>
                <div className={styles.buttons}>
                    <button className={styles.minus}>-</button>
                    <button className={styles.number}>number</button>
                    <button className={styles.plus}>+</button>
                    <CartButton styles={styles.infoCartButton} />
                </div>
            </div>

        </div>
    );
};

export default InfoItem;