import { Provider } from "react-redux";
import store from "./redux/store";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </Provider>
  );
};

export default App;
