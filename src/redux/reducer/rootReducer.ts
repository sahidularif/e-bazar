import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlices";
import cartSlice from "./cartSlice";
import messages from "./messages";
import { productSlice } from "./productSlice";

const RootReducer = combineReducers({
    product: productSlice.reducer,
    cart: cartSlice,
    auth: authSlice,
    message: messages
})
export default RootReducer