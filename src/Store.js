import acoutTesting from "./features/acounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: acoutTesting,
    customer: customerReducer,
  },
});
//store.dispatch(createCustomer("Vanessa", "123Delta_46"));

export default store;
