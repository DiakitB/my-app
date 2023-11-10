import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fullName: "",
  nationalId: "",
  creadetAt: "",
};
const custoreSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: { fullName, nationalId },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});
console.log(custoreSlice);
export const { createCustomer, updateName } = custoreSlice.actions;
export default custoreSlice.reducer;

// const initialCustomer = {
//   fullName: "",
//   nationalId: "",
//   creadetAt: "",
// };

// export default function customerReducer(state = initialCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createAt: action.payload.creadetAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalId) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalId, createAt: new Date() },
//   };
// }

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }
