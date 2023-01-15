import React from 'react';
import CartItem from '../../components/cart_item/cart_item';

const CartPage = (props) => {
    const items = [{
        "itemId": 353607384,
        "title": "1억 원대로 집 짓기: 건축탐구 집 - DVD",
        "description": "",
        "pubDate": "20210825",
        "priceStandard": 89100,
        "priceSales": 89100,
        "discountRate": "0",
        "saleStatus": "판매중",
        "mileage": "0",
        "mileageRate": "0",
        "coverSmallUrl": "http://bimage.interpark.com/goods_image/7/3/8/4/353607384h.jpg",
        "coverLargeUrl": "http://bimage.interpark.com/goods_image/7/3/8/4/353607384s.jpg",
        "categoryId": "411",
        "categoryName": "DVD>다큐멘터리",
        "publisher": "EBS교육방송",
        "customerReviewRank": 0,
        "author": "",
        "translator": "",
        "isbn": "0000000000000",
        "link": "http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=353607384&refererType=8304",
        "mobileLink": "http://m.book.interpark.com/view.html?PRD_NO=353607384&SHOP_NO=0000500000&SUB_CATE=2004",
        "additionalLink": "http://book.interpark.com/gate/ippgw.jsp?goods_no=353607384&biz_cd=",
        "reviewCount": 0
    },
    {
        "itemId": 352870422,
        "title": "배달, 시키는 사회 - DVD",
        "description": "",
        "pubDate": "20210805",
        "priceStandard": 29700,
        "priceSales": 29700,
        "discountRate": "0",
        "saleStatus": "판매중",
        "mileage": "0",
        "mileageRate": "0",
        "coverSmallUrl": "http://bimage.interpark.com/goods_image/0/4/2/2/352870422h.jpg",
        "coverLargeUrl": "http://bimage.interpark.com/goods_image/0/4/2/2/352870422s.jpg",
        "categoryId": "411",
        "categoryName": "DVD>다큐멘터리",
        "publisher": "EBS교육방송",
        "customerReviewRank": 0,
        "author": "",
        "translator": "",
        "isbn": "0000000000000",
        "link": "http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=352870422&refererType=8304",
        "mobileLink": "http://m.book.interpark.com/view.html?PRD_NO=352870422&SHOP_NO=0000500000&SUB_CATE=2004",
        "additionalLink": "http://book.interpark.com/gate/ippgw.jsp?goods_no=352870422&biz_cd=",
        "reviewCount": 0
    }]
    return (
        <section>
            <h1>cartPage</h1>
            <ul>
                <div>
                    <h1>ITEMS</h1>
                    <h1>QUANTITY</h1>
                    <h1>PRICE</h1>
                    <h1>TOTAL</h1>
                </div>
                {items.map((item) => <CartItem key={item.itemId} item={item} />)}

            </ul>
        </section>
    );
}

export default CartPage;