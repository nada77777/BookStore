import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cart_reducer";

const CartContext = createContext();

export function CartContextProvider({ children }) {

    const [cartItemsState, dispatch] = useReducer(cartReducer, {
        items: [],  //초기 카트 아이템
        totalPrice: 0, //초기 카트 아이템 합산 가격
    });

    const addItem = (item, itemCount = false) => { //cartpage와 infoPage에서 addItem 재활용 위해 item = false 사용
        dispatch({ type: 'addItem', item: item, itemCount: itemCount });
    };

    const deleteItem = (item, deleteType = false) => { //delete = false시 item 수량 한개씩 감소 ture는 item 자체 삭제
        dispatch({ type: 'deleteItem', item: item, deleteType: deleteType });
    };

    const cartContext = {
        cartItems: cartItemsState.items,
        totalPrice: cartItemsState.totalPrice,
    };
    return (
        <CartContext.Provider value={{ cartContext, addItem, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};

export function UseCartContext() {
    return useContext(CartContext);
};