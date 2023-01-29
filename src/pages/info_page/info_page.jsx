import React from 'react';
import styles from './info_page.module.css';
import { useLocation } from 'react-router-dom';
import InfoItem from '../../components/info_item/info_item';
import InfoTable from '../../components/info_table/info_table';

const InfoPage = (props) => {
    const item = useLocation().state.item;
    console.log(item);
    return (
        <section>
            <h1 className={styles.title}>Book info</h1>
            <InfoItem item={item} />
            <InfoTable item={item} />
        </section>
    );
};

export default InfoPage;





// additionalLink
// :
// "http://book.interpark.com/gate/ippgw.jsp?goods_no=356354075&biz_cd="
// author
// :
// "탁현민"
// categoryId
// :
// "104"
// categoryName
// :
// "국내도서"
// coverLargeUrl
// :
// "https://bimage.interpark.com/partner/goods_image/4/0/7/5/356354075s.jpg"
// coverSmallUrl
// :
// "https://bimage.interpark.com/partner/goods_image/4/0/7/5/356354075h.jpg"
// customerReviewRank
// :
// 0
// description
// :
// "문재인 정부 의전비서관이었던 탁현민 전 비서관의 회고록이다. 국가 기념식과 해외 순방, 남북 행사 등 1,825일 동안 대중에게 감동을 준 행사 1,195개를 기획한 저자는, 각종 흥미로운 뒷이야기와 대통령에 관한 에피소드들을 이 책을 통해 풀어낸다. 대통령을 가까운 거리에서 보좌했던 비서관이 정부의 굵직한 사건들을 되돌아보는 책이니만큼 대통령직에 대한 의미는 물론, 프로젝트를 기획하고 추진하는 기획자의 각종 노하우도 살펴볼 수 있다."
// discountRate
// :
// "10"
// isbn
// :
// "9791157062805"
// itemId
// :
// 356354075
// link
// :
// "http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356354075&refererType=8305"
// mileage
// :
// "1100"
// mileageRate
// :
// "6"
// mobileLink
// :
// "http://m.book.interpark.com/view.html?PRD_NO=356354075&SHOP_NO=0000400000"
// priceSales
// :
// 19800
// priceStandard
// :
// 22000
// pubDate
// :
// "20230118"
// publisher
// :
// "메디치미디어"
// rank
// :
// 4
// reviewCount
// :
// 0
// saleStatus
// :
// "예약판매"
// title
// :
// "미스터 프레지던트"
// translator
// :
// ""