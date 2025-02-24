import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import classes from './SignUp.module.css'
import { auth } from '../../utility/firebase';
import {BeatLoader} from 'react-spinners'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/authSlice';
import {setPersistence, browserSessionPersistence, browserLocalPersistence} from 'firebase/auth'
// import { auth } from "../firebaseConfig"; 
// import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const [loadingSignIn, setLoadingSignIn] = useState(false); // Loading state for Sign In
  const [loadingSignUp, setLoadingSignUp] = useState(false); // Loading state for Sign Up
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  setPersistence(auth, browserLocalPersistence) // ✅ Use local persistence
    .then(() => console.log("Persistence enabled"))
    .catch((error) => console.error("Persistence error:", error));

  // Sign In Function
  const handleer = async (e) => {
    e.preventDefault();
    // setLoading(true);
    setError(""); // Clear any previous errors
    const action = e.target.name; // Get the button name

    if (action === "signIn") {
      setLoadingSignIn(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCerdential) => {
          const userEmail = userCerdential.user.email
          const username = userEmail.split("@")[0].trim()
           dispatch(loginUser(username));
          
          setError("Sign in successful! ✅"); // Show success message
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setLoadingSignIn(false)); // Stop loading
      // .finally(() => setLoading(false));
    } else if (action === "signUp") {
      setLoadingSignUp(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCerdential) => {
          const userEmail = userCerdential.user.email;
          const username = userEmail.split("@")[0].trim()
          dispatch(loginUser(username))

          setError("Sign up successful! 🎉 Now you can sign in.");
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setLoadingSignUp(false)); // Stop loading
      // .finally(() => setLoading(false));
    }
  };

  return (
    <div className={classes.container}>
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
          alt=""
          width={200}
        />
      </Link>
      <div className={classes.form}>
        <h2>Sign in to Amazon</h2>
        {/* Error Message */}
        {error && <p className={classes.errorMessage}>{error}</p>}
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.input}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes.input}
        />

        <button
          name="signIn"
          onClick={handleer}
          className={classes.signInBtn}
          disabled={loadingSignIn}
        >
          {loadingSignIn ? <BeatLoader /> : "Sign In"}
        </button>

        <p>New to Amazon?</p>
        <button
          onClick={handleer}
          name="signUp"
          className={classes.signUpBtn}
          disabled={loadingSignUp}
        >
          {loadingSignUp ? <BeatLoader /> : "Create Your Amazon Account"}
        </button>
      </div>
    </div>
  );
};
export default SignUp
