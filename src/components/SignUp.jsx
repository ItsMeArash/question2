import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setBirthDate,
  setPassword,
  setRePassword,
  setPhone,
} from "../redux/registrationData/registrationAction";
import validate from "../validator";

const SignUp = () => {
  const [errors, setErrors] = useState({});
//   const [isSignedUp, setIsSignedUp] = useState(false);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(validate(data));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
        localStorage.setItem("data", JSON.stringify(data));
        // setIsSignedUp(true);
    }
  }, [errors, data]);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(event) => dispatch(setName(event.target.value))}
            value={data.name}
            name="name"
            placeholder="John Doe"
          ></input>
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="birthDate">Birth Date</label>
          <input
            onChange={(event) => dispatch(setBirthDate(event.target.value))}
            value={data.birthDate}
            name="birthDate"
            placeholder="YYYY/MM/DD"
          ></input>
          {errors.birthDate && <span>{errors.birthDate}</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={(event) => dispatch(setPassword(event.target.value))}
            value={data.password}
            name="password"
            placeholder="********"
          ></input>
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div>
          <label htmlFor="rePassword">Password Repeat</label>
          <input
            onChange={(event) => dispatch(setRePassword(event.target.value))}
            value={data.rePassword}
            name="rePassword"
            placeholder="********"
          ></input>
          {errors.rePassword && <span>{errors.rePassword}</span>}
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            onChange={(event) => dispatch(setPhone(event.target.value))}
            value={data.phone}
            name="phone"
            placeholder="09123456789"
          ></input>
          {errors.phone && <span>{errors.phone}</span>}
        </div>

        <button type="submit" onClick={(event) => submitHandler(event)}>
          Sign Up
        </button>

      </form>
    </div>
  );
};

export default SignUp;
