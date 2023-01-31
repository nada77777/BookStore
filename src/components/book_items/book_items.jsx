import React, { useEffect, useState } from 'react';
import { GetData } from '../../dataApi/getData';
import ItemCard from '../../UI/item_card/item_card';
import styles from './book_items.module.css';

const BookItems = ({ title, dataType }) => {
    const [items, setItems] = useState([]);

    const getdata = new GetData();

    useEffect(() => {
        getdata.getBookItems(dataType)//
            .then(result => setItems(result.item.slice(0, 15)));
    }, []);

    return (
        <section className={styles.bookItemsComponent}>
            <h1 className={styles.pageTitle}>{title}</h1>
            <div className={styles.bookItemsContainer}>
                <ul className={styles.bookItems}>
                    {items && items.map((item) => <ItemCard key={item.itemId} style={styles.mainItem} display='main' item={item} />)}
                </ul>
            </div>
        </section>
    );
};

export default BookItems;