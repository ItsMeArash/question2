export const setName = (name) => {
  return {
    type: "SET_NAME",
    payload: name,
  };
};

export const setBirthDate = (birthDate) => {
  return {
    type: "SET_BIRTHDATE",
    payload: birthDate,
  };
};

export const setPassword = (password) => {
  return {
    type: "SET_PASSWORD",
    payload: password,
  };
};

export const setRePassword = (rePassword) => {
  return {
    type: "SET_REPASSWORD",
    payload: rePassword,
  };
};

export const setPhone = (phone) => {
  return {
    type: "SET_PHONE",
    payload: phone,
  };
};
