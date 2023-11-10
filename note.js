/// Redux:
//// Redux is a global state management system that we can use to manage our UI state
/// we use Redux in 5 precises steps
// Stepe 1)
/// Create a initialState that content all our states variables
/// Exp: const initialState ={name: "", age: 0}

/// Step 2) create a reducer function that will content all our state logic
/// Exp:
/// function reducer(state = initialState, action){
//switch(action.tye){
// case "accout/name":
// return{...state, name: action.payload}
//}
//}

/// Step 3) npm i redux then import createStore from redux
/// we call createStore and pass in our reducer function  and stored the result to a variable that we call store
/// Exp: const store = createStore(reducer)

/// Step 4) we create action functions that return our dipatch objects
/// Exp: function createUser(name){
//return{type: "vanessa", payload: 56}
//}
//// How to create our store
///Step 1) npm i redux
///Step 2) import {createStore} from"./redux
/// Step 3) pass in our reducer into the createStore
/// we can store the result of the later into a variable call store
//
// HOW TO CONNECT OUR APPLICATION WITH REDUX

/////
////

/// STEP 1) We install react-redux

/// Step 5) we call dispatch on our store and pass in our action function with the values that we have specified in the parametter

//// we can pass in multiple states and multiple reducer to our store by using redux
/// combinedReducers() method

/// How to refacture our codes
/// We create a folder in src name features which will content all the features of our application
/// in the feature's folder we create subfolders that are name after each feature
// then we place each resources aka compnents in that specific folder

/// now we import our reducers in the store whihc in turn is import in to index.js component
/// then we npm i react-redux  then we import Provider from react-redux, we wrap our entire application with that provider that takes store as prop
/// now we can access to our store everywhere in our application by calling the the useSelctor(cbf=>{}) which takes our store as call back function
/// which will will return any data in our store

//// IMPORTANT HOOKS TO REMEMBER IN REDUX
//// [configueStore , useDispatch, useSelector(cbf)]
// const store = configureStore({
//   reducer: {
//     account: accountReducer,
//     customer: customerReducer,
//   },
// });
//////

///Exples
/// useSelector((store) => store.account.balance);
///const dispatch = useDispatch();

/// const store = configureStore({
//   reducer: {
//     account: accountReducer,
//     customer: customerReducer,
//   },
// });

///
///EXAMPLE OF SLICER
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// const accountSlice = createSlice({
//   name: "account",
//   initialState,
//   reducers: {
//     deposit(state, action) {
//       state.balance = state.balance + action.payload;
//     },
//     withdraw(state, action) {
//       state.balance = state.balance - action.payload;
//     },
//     requestLoan(state, action) {
//       if (state.loan > 0) return;
//       state.loan = action.payload.amount;
//       state.loanPurpose = action.payload.purpose;
//       state.balance = state.balance + action.payload.amount;
//     },
//     payLoan(state, action) {
//       state.balance = state.balance - state.loan;
//       state.loan = 0;
//       state.loanPurpose = "";
//     },
//   },
// });
// console.log(accountSlice);
// export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
// export default accountSlice.reducer;
