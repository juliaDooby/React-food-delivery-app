import { configureStore } from '@redux/reduxToolkit';
import cartSlice from './shopping-cart/cartSlice';
import cartUiSlice from './shopping-cart/cartUiSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});
export default store;
