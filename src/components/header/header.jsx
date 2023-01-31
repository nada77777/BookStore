import React from 'react';
import styles from './header.module.css';
import { ImBook } from 'react-icons/im';
import { BsCart } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import SearchForm from '../search_form/search_form';
const Header = (props) => {
    const navigate = useNavigate();

    const onClick = (event) => {
        event.preventDefault();

        if (event.target.name === 'home') {
            navigate('/', { state: { name: event.target.name } });
            return
        };
        navigate(`/bookList`, { state: { name: event.target.name } }); //bookList로 이동 시 불러올 데이터 경로 지정 위해 a태그 name 활용
    }
    return (
        <header>
            <div className={styles.headerTop}>
                <span className={styles.logo}><ImBook className={styles.logoIcon} /> BOOKSHOP</span>
                <SearchForm />
                <div className={styles.icons}>
                    <span onClick={() => navigate('/cartPage')}><BsCart /></span>
                    <span><AiOutlineUser /></span>
                </div>
            </div>
            <div className={styles.headerBottom}>
                <nav className={styles.nav}>
                    <li><a name='home' href=" " onClick={onClick}>Home</a></li>
                    <li><a name='books' onClick={onClick} href=" ">Books</a></li>
                    <li><a name='magazine' onClick={onClick} href=" ">Magazines</a></li>
                    <li><a name='album' onClick={onClick} href=" ">Album</a></li>
                    <li><a name='recommended' onClick={onClick} href=" ">Recommended</a></li>
                </nav>
            </div>
        </header>
    );
};

export default Header;