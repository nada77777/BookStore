import React from 'react';

const CartItem = (props) => {
    return (
        <div>
            <div>
                <img src={props.item.coverSmallUrl} alt="cart_item_img" />
                <p>{props.item.title}</p>
                <p>{props.item.author}</p>
            </div>
            <div>
                <span>plus</span>
                <span>number</span>
                <span>minus</span>
            </div>
            <span>{props.item.priceSales}</span>
            <span>total</span>
        </div>
    );
};

export default CartItem;