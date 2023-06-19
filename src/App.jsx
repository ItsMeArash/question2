import { Provider } from "react-redux";
import store from "./redux/store";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Provider store={store}>
        <SignUp />
    </Provider>
  );
};

export default App;
