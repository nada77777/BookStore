import React from 'react';
import styles from './footer.module.css';
import { ImBook } from 'react-icons/im';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const Footer = () => {
    return (
        <footer>
            <div className={styles.title}>
                <span className={styles.logo}><ImBook /> BOOKSHOP</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br></br>Nam atque, modi sunt, aliquam cumque hic dolorem delectus,
                    <br></br>fugit temporibus repellat reprehenderit molestias quasi id!
                </p>
            </div>
            <div className={styles.info}>
                <span><IoIosInformationCircleOutline />informations</span>
                <ul>
                    <li><a href=" ">About Us</a></li>
                    <li><a href=" ">Contact Us</a></li>
                    <li><a href=" ">My Account</a></li>
                    <li><a href=" ">FAQ</a></li>
                    <li><a href=" ">Blog</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;