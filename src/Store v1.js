import { combineReducers, createStore } from "redux";

console.log("hello there");

const initialCustomer = {
  fullName: "",
  nationalId: "",
  creadetAt: "",
};
function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };

    default:
      return state;
  }
}

function customerReducer(state = initialCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createAt: action.payload.creadetAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

const routReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(routReducer);

// store.dispatch({ type: "account/deposit", payload: 5000 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 2000, purpose: "To buy a car" },
// });
// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: 10000, purpose: "To eat pussy" },
  };
}
function payLoan() {
  return { type: "account/payLoan" };
}

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createAt: new Date() },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
store.dispatch(deposit(8000));
store.dispatch(withdraw(3000));
store.dispatch(requestLoan());
store.dispatch(payLoan());
store.dispatch(createCustomer("Vanessa", "123Delta_46"));

console.log(store.getState());
