const initialState = {
  name: "",
  birthDate: "",
  password: "",
  rePassword: "",
  phone: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "SET_BIRTHDATE":
      return {
        ...state,
        birthDate: action.payload,
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };

    case "SET_REPASSWORD":
      return {
        ...state,
        rePassword: action.payload,
      };

    case "SET_PHONE":
      return {
        ...state,
        phone: action.payload,
      };

      default:
        return state;
  }
};

export default registerReducer;
