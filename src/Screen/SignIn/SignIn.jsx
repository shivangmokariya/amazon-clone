import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { name, mobile, password });
  };

  return (
    <>
      <div className="container">
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
            <h2 className="signin-title">Sign in</h2>
            <form className="signin-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Email or mobile phone number</label>
              <input
                type="text"
                id="name"
                placeholder=""
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <button type="submit" className="verify-button">
                Continue
              </button>
            </form>

            <div className="signin-footer">
              <div className="condition">
                By continuing, you agree to Amazon's
                <span>
                  {" "}
                  <a href="/">Conditions of Use</a> and{" "}
                  <a href="/"> Privacy Notice.</a>
                </span>
              </div>

              <p>
                {/* <Link to={"/"}> */}
                <a href="/">Need help?</a>
                {/* </Link> */}
              </p>
            </div>
            <hr />

            <div className="buying">Buying for work ?</div>
            <div className="shopAmazon">
              <a href="/business-account">Shop on Amazon Business</a>
            </div>
          </div>
        </div>

        <div className="create-account-wrapper">
          <hr className="styled-hr" />
          <span>New to Amazon?</span>
          <Link to={"/register"} className="account-container">Create your Amazon account</Link>
        </div>

        <div className="footerLine">
          <hr />
        </div>
        <div className="footerOption">
          <li>
            {" "}
            <a href="#">Condition of Use</a>
          </li>
          <li>
            {" "}
            <a href="#">Privacy Notice</a>
          </li>
          <li>
            {" "}
            <a href="#">Help</a>
          </li>
        </div>
        <div className="copyright">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </>
  );
};

export default SignIn;
