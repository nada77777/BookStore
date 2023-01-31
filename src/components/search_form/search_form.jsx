import React from 'react';
import styles from './search_form.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { GetData } from '../../dataApi/getData';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
const SearchForm = (props) => {
    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate();
    const inputRef = useRef();
    const getData = new GetData();

    const onSubmit = (event) => {
        event.preventDefault();
        if (keyword === '') {
            return
        }
        getData.searchBookItems(keyword)//
            .then(item => navigate('/bookList', { state: { name: 'search result', item: item } }));
        setKeyword('');
    };

    const onChange = () => {
        const keyword = inputRef.current.value;
        setKeyword(keyword);
    };


    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <span className={styles.searchIcon}><AiOutlineSearch /></span>
            <input ref={inputRef} onChange={onChange} value={keyword} type="text" />
        </form>
    )
}

export default SearchForm;