import React, { useEffect, useState } from 'react';
import { GetData } from '../../dataApi/getData';
import ItemCard from '../../UI/item_card/item_card';
import styles from './book_items.module.css';

const BookItems = ({ title, dataURL }) => {
    const [items, setItems] = useState([]);

    const getdata = new GetData(); // GetData 클래스의 getBookItems 사용해 data 가져오기

    useEffect(() => {
        getdata.getBookItems(dataURL)//props로 전달받는 dataURL 따라 다른 경로에서 data 받아오기
            .then(result => setItems(result.item.slice(0, 15))); //data 15개만 받기 위해 slice 사용
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