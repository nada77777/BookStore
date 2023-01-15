import React from 'react';
import styles from './info_table.module.css';
const InfoTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Book Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Date Published</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.item.title}</td>
                    <td>{props.item.author}</td>
                    <td>{props.item.isbn}</td>
                    <td>{props.item.categoryName}</td>
                    <td>{props.item.priceStandard}</td>
                    <td>{props.item.pubDate}</td>
                </tr>

            </tbody>
        </table>
    );
}

export default InfoTable;


// title,
//     author,
//     isbn,
//     cate,
//     price,
//     date,