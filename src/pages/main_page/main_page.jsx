import React, { useState } from 'react';
import styles from './main_page.module.css';
import BookItems from '../../components/book_items/book_items';

const MainPage = (props) => {

    return (
        <section className={styles.mainPage}>
            <BookItems title='CURRENT BESTSELLER' dataType='bestSeller' />
            <BookItems title='RECOMMEND' dataType='recommend' />
        </section>
    );
}

export default MainPage;
