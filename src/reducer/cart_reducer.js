export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addItem': {
            const cartItemIndex = state.items.findIndex((item) => item.itemId === action.item.itemId);
            const cartItem = state.items[cartItemIndex];

            if (cartItem) {
                const updatedCartItem = action.itemCount ? { ...cartItem, count: cartItem.count + action.itemCount } : { ...cartItem, count: cartItem.count + 1 };
                const updatedCartItems = [...state.items];
                updatedCartItems[cartItemIndex] = updatedCartItem;
                return { items: updatedCartItems, totalPrice: state.totalPrice + updatedCartItem.priceSales };
            }
            return action.itemCount ? { items: [...state.items, { ...action.item, count: action.itemCount }], totalPrice: state.totalPrice + action.item.priceSales * action.item.count } : { items: [...state.items, { ...action.item, count: 1 }], totalPrice: state.totalPrice + action.item.priceSales };

        };

        case 'deleteItem': {
            const cartItemIndex = state.items.findIndex((item) => item.itemId === action.item.itemId);
            const cartItem = state.items[cartItemIndex];
            console.log(cartItem);
            console.log(state);
            if (cartItem.count > 1 && !action.deleteType) {
                const updatedCartItem = { ...cartItem, count: cartItem.count - 1 };
                const updatedCartItems = [...state.items];
                updatedCartItems[cartItemIndex] = updatedCartItem;
                console.log(action.deleteType);
                return { items: updatedCartItems, totalPrice: 0 };
            } else {
                const updatedCartItems = state.items.filter((item) => item.itemId !== cartItem.itemId);
                return { items: updatedCartItems, totalPrice: 0 };
            }
            // return { items: [...state.items, { ...action.item, count: 1 }], totalPrice: 0 };

        };

        default: {
            throw new Error('error');
        }

    };
};