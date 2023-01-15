import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartButton from '../buttons/cart_button';
import PriceButton from '../buttons/price_button';
import styles from './item_card.module.css';
const ItemCard = (props) => {

    const displayType = props.display === 'main';

    const navigate = useNavigate();
    const onClick = (event) => {
        event.preventDefault();
        navigate('/bookInfo', { state: { item: props.item } });
    }

    return (
        <li onClick={onClick} className={`${styles.itemCard} ${props.style}`}>
            <a className={styles.itemInner} href=" ">
                <img className={styles.itemImg} src={props.item.coverLargeUrl} alt="item_img" />
                <div className={styles.itemInfo}>
                    <h2 className={styles.title}>{props.item.title}</h2>
                    <p className={styles.author}>{props.item.author}</p>
                    {displayType && <PriceButton />}
                    {!displayType && <CartButton />}
                </div>
            </a>
        </li>
    );
};

export default ItemCard;