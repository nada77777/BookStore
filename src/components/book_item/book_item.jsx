import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartButton from '../../UI/buttons/cart_button';
import PriceButton from '../../UI/buttons/price_button';
import ItemCard from '../../UI/item_card/item_card';
import styles from './book_item.module.css';
const BookItem = (props) => {
    const navigate = useNavigate();
    // const onClick = (event) => {
    //     event.preventDefault();
    //     navigate('/bookInfo', { state: { item: props.item } });
    // }

    return (
        <li className={styles.bookItem}>
            {/* <a onClick={onClick} className={styles.bookItemInner} href=" ">
                <img className={styles.img} src={props.item.coverLargeUrl} alt="item_img" />
                <div>
                    <h2 className={styles.title}>{props.item.title}</h2>
                    <p className={styles.author}>{props.item.author}</p>
                </div>
                <PriceButton />
                <CartButton />

            </a> */}
        </li>

    );
};

export default BookItem;



// "title": "불편한 편의점(40만부 기념 벚꽃 에디션)",
// "description": "※ 인터넷 한정 특별판: 매장 구매, 바로드림 구매 시에는 다른 표지의 에디션으로 제공됩니다.\n\n원 플러스 원의 기쁨, 삼각김밥 모양의 슬픔, 만 원에 네 번의 폭소가 터지는 곳!\n힘겨운 시대를 살아가는 우리들에게 다가온 조금 특별한 편의점 이야기\n\n누적 판매 40만부 돌파, 2022년 가장 사랑받는 소설\n★★★전 서점 종합베스트 1위, 2021 올해의 책,\n★★★국립중앙도서관 사서추천도서, 해외 6개국 판권 수출\n\n김호연 작가의 장편소설 『불편한 편의점』이 누적 판매 40만부 돌파를 기념하여 벚꽃 에디션으로 새 단장 했습니다. 2021년 4월에 출간되어 전 연령층의 폭넓은 공감을 얻으며 소설 읽기 바람을 일으킨 『불편한 편의점』의 열기는 지금도 현재진행형입니다. “읽는 내내 마음이 따뜻하고 먹먹했다” “눈...",
// "pubDate": "20210420",
// "priceStandard": 14000,
// "priceSales": 12600,
// "discountRate": "10",
// "saleStatus": "판매중",
// "mileage": "700",
// "mileageRate": "6",
// "coverSmallUrl": "https://bimage.interpark.com/partner/goods_image/1/5/0/5/348921505h.jpg",
// "coverLargeUrl": "https://bimage.interpark.com/partner/goods_image/1/5/0/5/348921505s.jpg",
// "categoryId": "101",
// "categoryName": "국내도서",