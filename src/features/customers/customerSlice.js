const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialCustomer = {
  fullName: "",
  nationalId: "",
  creadetAt: "",
};

export default function customerReducer(state = initialCustomer, action) {
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

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createAt: new Date() },
  };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
