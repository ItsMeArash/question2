import { createStore, applyMiddleware } from "redux";
import registerReducer from "./registrationData/registrationReducer";
import logger from "redux-logger";

const store = createStore(registerReducer, applyMiddleware(logger));

export default store;