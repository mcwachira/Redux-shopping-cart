import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalPrice: 0,
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload

            //function to check if item exist in cart 
            const ExistingItem = state.itemsList.find((item) => item.id === newItem.id)

            if (ExistingItem) {
                ExistingItem.quantity++;
                ExistingItem.totalPrice += newItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price
                })
                state.totalQuantity++;
            }

        },
        removeFromCart(state, action) {

        },
        setShowCart(state) {
            state.showCart = true
        }
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice