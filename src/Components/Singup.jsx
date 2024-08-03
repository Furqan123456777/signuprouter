import React, { useState } from "react";
import styles from "./Singup.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Singup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    const userData = {
      name,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/Dashbord");
  };

  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="w-[30%] flex flex-col justify-center border p-5 rounded-2xl shadow-xl">
        <h2 className="text-center font-semibold text-2xl">Sign Up</h2>
        <form onSubmit={handleSubmit} className={styles.adduserform}>
          <div className={styles.inputgroup}>
            <label htmlFor="name">
              <strong>Name:</strong>
            </label>
            <input
              className={`border border-black rounded-xl py-6 text-2xl ${errors.name ? 'border-red-500' : ''}`}
              type="text"
              id="name"
              placeholder=" Enter Your Name"
              autoComplete="off"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors(prevErrors => ({ ...prevErrors, name: '' }));
              }}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              id="email"
              className={`border border-black rounded-xl py-6 text-2xl ${errors.email ? 'border-red-500' : ''}`}
              placeholder=" Enter Your Email"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors(prevErrors => ({ ...prevErrors, email: '' }));
              }}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              id="password"
              className={`border border-black rounded-xl py-6 text-2xl ${errors.password ? 'border-red-500' : ''}`}
              placeholder=" Enter Your Password"
              autoComplete="off"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors(prevErrors => ({ ...prevErrors, password: '' }));
              }}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}

           <NavLink to={'/login'}    className="border border-green-950 mt-4 rounded-xl text-xl py-3 hover:bg-green-950 hover:text-white duration-700">
        <center>
        <button
              type="submit"
           
            >
              Sign Up
            </button>
        </center>
           </NavLink>
          </div>
        </form>

        <div className="flex flex-row justify-center">
          <p className="my-5 text-lg">
            Already have an account?{" "}
            <NavLink className="text-blue-800" to="/login">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;
