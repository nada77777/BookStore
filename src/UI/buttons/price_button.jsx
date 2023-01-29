import React from 'react';
import styles from './price_button.module.css';

const PriceButton = (props) => {
    return (
        <button className={`${styles.priceButton} ${props.styles}`}>₩ {'11111원' | props.price}</button>
    );
}

export default PriceButton;