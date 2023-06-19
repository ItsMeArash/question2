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
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [isSignedUp, setIsSignedUp] = useState(false);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const editHandler = () => {
    if (isSignedUp) {
      navigate("/dashboard");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(validate(data));
  };

useEffect(() => { setIsSignedUp(false) }, [])

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("data", JSON.stringify(data));
      setIsSignedUp(true);
    } else {
      setIsSignedUp(false);
    }
  }, [errors, data]);

  return (
    <div className={styles.container}>
      <form className={styles.signupForm}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={(event) => dispatch(setName(event.target.value))}
            value={data.name}
            name="name"
            placeholder="John Doe"
          ></input>
          {errors.name && <span className={styles.message}>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="birthDate">Birth Date</label>
          <input
            type="text"
            onChange={(event) => dispatch(setBirthDate(event.target.value))}
            value={data.birthDate}
            name="birthDate"
            placeholder="YYYY/MM/DD"
          ></input>
          {errors.birthDate && <span className={styles.message}>{errors.birthDate}</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(event) => dispatch(setPassword(event.target.value))}
            value={data.password}
            name="password"
            placeholder="********"
          ></input>
          {errors.password && <span className={styles.message}>{errors.password}</span>}
        </div>

        <div>
          <label htmlFor="rePassword">Password Repeat</label>
          <input
            type="password"
            onChange={(event) => dispatch(setRePassword(event.target.value))}
            value={data.rePassword}
            name="rePassword"
            placeholder="********"
          ></input>
          {errors.rePassword && <span className={styles.message}>{errors.rePassword}</span>}
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            onChange={(event) => dispatch(setPhone(event.target.value))}
            value={data.phone}
            name="phone"
            placeholder="09123456789"
          ></input>
          {errors.phone && <span className={styles.message}>{errors.phone}</span>}
        </div>
        <button type="submit" onClick={(event) => submitHandler(event)}>
          Sign Up
        </button>
        {isSignedUp && (
          <button onClick={(event) => editHandler(event)}>Edit Profile</button>
        )}
      </form>
    </div>
  );
};

export default SignUp;
