import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ItemCard from '../../UI/item_card/item_card';
import styles from './list_page.module.css';
const ListPage = (props) => {
    const [bookItems, setBookItems] = useState([]);
    const pageTitle = useLocation().state.name;
    useEffect(() => {
        fetch('data/all/all.json')//
            .then(response => response.json())//
            .then(result => setBookItems(result.items));
    }, [])
    return (
        <section className={styles.listPage}>
            <h1>{pageTitle}</h1>
            <ul className={styles.bookItems}>
                {bookItems.map((item) => <ItemCard key={item.itemId} style={styles.listItem} item={item} />)}
            </ul>
        </section>
    );
};

export default ListPage;