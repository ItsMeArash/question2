import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    setUserData(data);
    setUpdatedData(data);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("data", JSON.stringify(updatedData));
    setUserData(updatedData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedData(userData);
  };

  const handleDelete = () => {
    localStorage.removeItem("data");
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupForm}>
        <h1>Dashboard</h1>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={updatedData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="birthDate">Birth Date</label>
              <input
                type="text"
                name="birthDate"
                value={updatedData.birthDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                value={updatedData.phone}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        ) : (
          <div>
            <div>Name: {userData.name}</div>
            <div>Birth Date: {userData.birthDate}</div>
            <div>Phone: {userData.phone}</div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <button onClick={handleEdit} style={{marginTop: "1rem"}}>Edit</button>
              <button onClick={handleDelete}>Delete Account</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
