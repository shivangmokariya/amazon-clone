import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { name, mobile, password });
  };

  return (
    <>
    <div className="signin-wrapper">
      {/* Amazon Logo positioned outside the form box */}

      <Link to={"/"} className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="amazon-logo"
        />
        <span className="in">.in</span>
      </Link>

      {/* Form Container */}
      <div className="signin-container">
        <h2 className="signin-title">Create Account</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            autoFocus
            placeholder="First and last name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="mobile">Mobile number</label>
          <div className="mobile-input">
            <select id="country-code-signup" defaultValue="+91">
              <option value="+91">IN +91</option>
              <option value="+91">USA +1</option>
              <option value="+91">CAD +1</option>
              <option value="+91">PAK +92</option>
            </select>
            <input
              type="tel"
              id="mobile"
              placeholder="Mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="At least 6 characters"
            minLength="6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="text">
            To verify your number, we will send you a text message with a
            temporary code. Message and data rates may apply.
          </div>
          <button type="submit" className="verify-button">
            Verify mobile number
          </button>
        </form>

        <hr />

        <div className="signin-footer">
          <div className="buying">Buying for work ?</div>
          <a href="/business-account">Create a free business account</a>
          <hr />
          <p>
            Already have an account? <a href="/signin">Sign in</a>
          </p>
        </div>

        <p className="terms">
          By creating an account or logging in, you agree to Amazon's
          <a href="/conditions-of-use"> Conditions of Use </a> and
          <a href="/privacy-policy"> Privacy Policy</a>.
        </p>
      </div>
    </div>

    <div className="footerLine">
        <hr />
    </div>
        <div className="footerOption">
            <li> <a href="#">Condition of Use</a></li>
            <li> <a href="#">Privacy Notice</a></li>
            <li> <a href="#">Help</a></li>
        </div>
        <div className="copyright">© 1996-2024, Amazon.com, Inc. or its affiliates</div>
   
    </>
  );
};

export default SignUp;
