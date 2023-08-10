import { configureStore } from '@redux/reduxToolkit';
import cartSlice from './shopping-cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
export default store;
