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
                ExistingItem.quantity += 1;
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
            const id = action.payload
            const ExistingItem = state.itemsList.find((item) => item.id === id)
            if (ExistingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalQuantity--
            } else {
                ExistingItem.quantity--;
                ExistingItem.totalPrice -= ExistingItem.price
            }

        },
        setShowCart(state) {
            state.showCart = !state.showCart
        }
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice