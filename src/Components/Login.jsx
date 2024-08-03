import React, { useState } from 'react';
import styles from './Login.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
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

    // Check if user is registered
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.email !== email || user.password !== password) {
      setErrors({ form: "Invalid email or password. Please sign up if you don't have an account." });
      return;
    }
    
    navigate("/Dashbord");
  };

  return (
    <div>
      <div className="flex justify-center items-center h-dvh">
        <div className="w-[30%] flex flex-col justify-center border p-5 rounded-2xl shadow-xl">
          <h2 className="text-center font-semibold text-2xl">Login</h2>
          <form onSubmit={handleSubmit} className={styles.adduserform}>
            <div className={styles.inputgroup}>
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

              {errors.form && <p className="text-red-500 mt-2">{errors.form}</p>}

              <button
                type="submit"
                className="border border-green-950 mt-4 rounded-xl text-xl py-3 hover:bg-green-950 hover:text-white duration-700"
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex flex-row justify-center">
            <p className="my-5 text-lg">
              I have not created an account?{" "}
              <NavLink className="text-blue-800" to="/">
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
