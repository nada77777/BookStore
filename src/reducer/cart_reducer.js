export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addItem': {
            const cartItemIndex = state.items.findIndex((item) => item.itemId === action.item.itemId); //카트에 이미 존재하는 item 식별 위해 findIndex 사용
            const cartItem = state.items[cartItemIndex];

            if (cartItem) {
                const updatedCartItem = action.itemCount ? { ...cartItem, count: cartItem.count + action.itemCount, price: cartItem.priceSales * action.itemCount } //infoItem 컴포넌트에서 'addItem' 사용 시
                    : { ...cartItem, count: cartItem.count + 1, price: cartItem.priceSales }; // cartPage 컴포넌트에서 사용 시
                const updatedCartItems = [...state.items];
                updatedCartItems[cartItemIndex] = updatedCartItem;
                return { items: updatedCartItems, totalPrice: state.totalPrice + updatedCartItem.price };
            }

            const updatedCartItem = action.itemCount ? { ...action.item, count: action.itemCount, price: action.item.priceSales * action.itemCount }
                : { ...action.item, count: 1, price: action.item.priceSales };
            return { items: [...state.items, updatedCartItem], totalPrice: state.totalPrice + updatedCartItem.price }
        };

        case 'deleteItem': {
            const cartItemIndex = state.items.findIndex((item) => item.itemId === action.item.itemId);
            const cartItem = state.items[cartItemIndex];

            if (cartItem.count > 1 && !action.deleteType) {
                const updatedCartItem = { ...cartItem, count: cartItem.count - 1 };
                const updatedCartItems = [...state.items];
                updatedCartItems[cartItemIndex] = updatedCartItem;
                console.log(action.deleteType);
                return { items: updatedCartItems, totalPrice: state.totalPrice - action.item.priceSales };
            } else {
                const updatedCartItems = state.items.filter((item) => item.itemId !== cartItem.itemId);
                return { items: updatedCartItems, totalPrice: state.totalPrice - action.item.count * action.item.priceSales };
            }
        };

        default: {
            throw new Error('error');
        }

    };
};