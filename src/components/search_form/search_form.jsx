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
    const inputRef = useRef(); // input에서 검색 키워드 읽기 위해 useRef 사용
    const getData = new GetData();// GetData 클래스의 searchBookItems 사용해 data 가져오기

    const onSubmit = (event) => {
        event.preventDefault();
        if (keyword === '') { //검색 키워드 공백 시 함수 종료
            return
        }
        getData.searchBookItems(keyword)//
            .then(item => navigate('/bookList', { state: { name: 'search result', item: item } }));
        setKeyword(''); //검색 키워드 초기화
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