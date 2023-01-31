import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartButton from '../buttons/cart_button';
import PriceButton from '../buttons/price_button';
import styles from './item_card.module.css';
const ItemCard = (props) => {

    const navigate = useNavigate();

    const onClick = (event) => {
        event.preventDefault();

        //cartButton 누를 시 bookInfo 페이지 이동 방지
        if (event.target.name === 'cartButton') {
            return;
        }

        //bookInfo 페이지로 이동, 클릭한 아이템 bookInfo에 출력 위해 state로 전달
        navigate('/bookInfo', { state: { item: props.item } });
    }

    return (
        <li onClick={onClick} className={`${styles.itemCard} ${props.style}`}>
            <a className={styles.itemInner} href=" ">
                <img className={styles.itemImg} src={props.item.coverLargeUrl} alt="item_img" />
                <div className={styles.itemInfo}>
                    <h2 className={styles.title}>{props.item.title}</h2>
                    <p className={styles.author}>{props.item.author || 'BOOKSHOP'}</p>
                    <PriceButton price={props.item.priceSales} />

                    {/*마우스 hover시 cartButton 나타남  */}
                    <div className={styles.hover}>
                        <h2 className={styles.title}>{props.item.title}</h2>
                        <CartButton styles={styles.hoverEffect} item={props.item} />
                    </div>
                </div>
            </a>
        </li>
    );
};

export default ItemCard;