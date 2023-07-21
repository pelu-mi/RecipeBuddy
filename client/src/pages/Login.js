import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { saveMealIds } from "../utils/localStorage";

import './Login.css';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);

      const idMeals = data.login.user.savedRecipes.map((recipe) => {
        return recipe.idMeal;
      });

      saveMealIds(idMeals);

    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main
      className="login-container"
      style={{ backgroundColor: "#e8c38c", height: "80vh" }}
    >
      <div className="login-form">
        <div className="card" style={{ border: "none" }}>
          <h4 className="card-header" style={{ backgroundColor: "#dea754" }}>
            Login
          </h4>
          <div
            className="card-body"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "0 auto",
              padding: "9px 25px 25px 25px",
              backgroundColor: "#dea754",
            }}
          >
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                style={{
                  textAlign: "center",
                  backgroundColor: "white",
                  padding: "4%",
                  borderRadius: "15px",
                }}
              >
                <input
                  className="form-input login-input"
                  placeholder="Email address"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input login-input"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="login-btn"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#469f43",
                    alignItems: "center",
                    marginTop: "2%",
                    width: "150px",
                    height: "30px",
                    borderRadius: "20px",
                    border: "none",
                    color: "white",
                  }}
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
