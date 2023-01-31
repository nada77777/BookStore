import React from 'react';
import styles from './cart_page.module.css';
import CartItem from '../../components/cart_item/cart_item';
import { UseCartContext } from '../../context/cart_context';

const CartPage = (props) => {

    const { cartContext: { cartItems, totalPrice }, addItem, deleteItem } = UseCartContext();
    console.log(totalPrice);
    return (
        <section className={styles.cartPage}>
            <div className={styles.cartList}>
                {cartItems.length < 1 ?
                    <h1 className={styles.cartNotice}>현재 장바구니에 상품이 없습니다.</h1>
                    :
                    <>
                        <ul className={styles.itemContainer}>
                            <div className={styles.itemTitle}>
                                <h1>ITEMS</h1>
                                <h1>QUANTITY</h1>
                                <h1>PRICE</h1>
                                <h1>CLOSE</h1>
                            </div>
                            {cartItems && cartItems.map((item) => <CartItem key={item.itemId} item={item} addItem={addItem} deleteItem={deleteItem} />)}
                        </ul>

                    </>}
            </div>
            <div className={styles.priceContainer}>
                <div className={styles.subtotal}>
                    <h3>Subtotal</h3>
                    <h3>USD {totalPrice}</h3>
                </div>
                <div className={styles.total}>
                    <h1>Total</h1>
                    <h1>USD {totalPrice}</h1>
                </div>
            </div>
        </section>
    );
}

export default CartPage;