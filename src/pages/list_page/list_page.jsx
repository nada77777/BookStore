import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GetData } from '../../dataApi/getData';
import ItemCard from '../../UI/item_card/item_card';
import styles from './list_page.module.css';
const ListPage = (props) => {
    const [bookItems, setBookItems] = useState([]);

    const location = useLocation().state;
    const pageTitle = location.name;
    const getdata = new GetData();

    useEffect(() => {
        if (pageTitle === 'search result') {
            setBookItems(location.item);
            return
        }
        getdata.getBookItems(pageTitle)//
            .then(result => setBookItems(result.item));
    }, [pageTitle]);

    return (
        <section className={styles.listPage}>
            <h1 className={styles.title}>{pageTitle.toUpperCase()}</h1>
            <ul className={styles.bookItems}>
                {bookItems.length > 0 ? bookItems.map((item) => <ItemCard key={item.itemId} style={styles.listItem} item={item} />)
                    : <h1>결과가 없습니다</h1>}
            </ul>
        </section>
    );
};

export default ListPage;