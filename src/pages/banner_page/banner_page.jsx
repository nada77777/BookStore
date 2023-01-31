import React from 'react';
import styles from './banner_page.module.css';
const BannerPage = (props) => {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerColor}></div>
            <h1 className={styles.bannerTitle}>BOOKSHOP</h1>
        </section>
    );
};

export default BannerPage;