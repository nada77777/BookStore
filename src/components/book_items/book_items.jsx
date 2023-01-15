import React from 'react';
import ItemCard from '../../UI/item_card/item_card';
import BookItem from '../book_item/book_item';
import styles from './book_items.module.css';

const BookItems = ({ title, items }) => {
    return (
        <>
            <h1>{title}</h1>
            <div className={styles.bookItemsContainer}>
                <ul className={styles.bookItems}>
                    {/* {items.map((item) => <BookItem key={item.itemId} display='main' item={item} />)} */}
                    {items.map((item) => <ItemCard key={item.itemId} style={styles.mainItem} display='main' item={item} />)}
                </ul>
            </div>
        </>
    );
};

export default BookItems;