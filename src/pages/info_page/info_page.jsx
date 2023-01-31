import React from 'react';
import styles from './info_page.module.css';
import { useLocation } from 'react-router-dom';
import InfoItem from '../../components/info_item/info_item';
import InfoTable from '../../components/info_table/info_table';

const InfoPage = (props) => {
    const item = useLocation().state.item;

    return (
        <section>
            <h1 className={styles.title}>Info</h1>
            <InfoItem item={item} />
            <InfoTable item={item} />
        </section>
    );
};

export default InfoPage;
