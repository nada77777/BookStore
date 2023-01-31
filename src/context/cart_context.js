import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cart_reducer";

const CartContext = createContext();

export function CartContextProvider({ children }) {

    const [cartItemsState, dispatch] = useReducer(cartReducer, {
        items: [],
        totalPrice: 0,
    });

    const addItem = (item, itemCount = false) => {
        console.log(item);
        dispatch({ type: 'addItem', item: item, itemCount: itemCount });
    };

    const deleteItem = (item, deleteType = false) => {
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