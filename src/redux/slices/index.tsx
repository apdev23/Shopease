import { combineReducers } from 'redux';
import authSlice from './authSlice';
import UserSlice from './UserSlice';
import ProductSlice from './ProductSlice';
import CartSlice from './CartSlice';


export default combineReducers({
    user: UserSlice,
    product: ProductSlice,
    cart: CartSlice,

});