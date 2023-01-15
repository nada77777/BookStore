import React from 'react';
import styles from './header.module.css';
import { ImBook } from 'react-icons/im';
import { BsCart } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const Header = (props) => {
    const navigate = useNavigate();
    const onClick = (event) => {
        event.preventDefault();
        navigate('/bookList', { state: { name: event.target.name } });
        console.log(event.target.name);
    }
    return (
        <header>
            <div className={styles.headerTop}>
                <span className={styles.logo}><ImBook /> BOOKSHOP</span>
                <form className={styles.form}>
                    <span className={styles.searchIcon}><AiOutlineSearch /></span>
                    <input type="text" />
                </form>
                <div className={styles.icons}>
                    <span onClick={() => navigate('/cartPage')}><BsCart /></span>
                    <span><AiOutlineUser /></span>
                </div>
            </div>
            <div className={styles.headerBottom}>
                <nav className={styles.nav}>
                    <li><a href=" ">Home</a></li>
                    <li><a name='books' onClick={onClick} href=" ">Books</a></li>
                    <li><a name='magazines' onClick={onClick} href=" ">Magazines</a></li>
                    <li><a name='album' onClick={onClick} href=" ">Album</a></li>
                    <li><a name='recommended' onClick={onClick} href=" ">Recommended</a></li>
                </nav>
            </div>
        </header>
    );
};

export default Header;

{/* <h1>Home Books Magazines Album Recommended</h1> */ }