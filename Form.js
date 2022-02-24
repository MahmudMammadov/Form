import React, { useState } from "react";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./form.css";
const Form = () => {
  const [name, setName] = useState("");
  const nameItem = name.trim();
  const [errorName, setErrorName] = useState(false);
  const [surname, setSurname] = useState("");
  const surnameItem = surname.trim();
  const [errorSurname, setErrorSurname] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [showpassword, setShowpassword] = useState(false);

  const justCedilla = (e) => {
    if (!/["a-z"]/.test(e.key)) {
      e.preventDefault();
    }
  };
  const showhidden = (e) => {
    e.preventDefault();
    setShowpassword(!showpassword);
  };
  let formValues = false;
  if (email && nameItem && password && surnameItem) {
    formValues = true;
  }
  const handler = (e) => {
    e.preventDefault();
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
  };
  const passwordBlur = () => {
    if (!password) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };
  const emailBlur = () => {
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const surnameBlur = () => {
    if (!surnameItem) {
      setErrorSurname(true);
    } else {
      setErrorSurname(false);
    }
  };
  const nameBlur = () => {
    if (!nameItem) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
  };
  return (
    <main>
      <div className="main-container">
        <div className="form-control">
          <form onSubmit={handler}>
            <div
              className={
                errorName && !nameItem ? "form-control void" : "form-control"
              }
            >
              <label htmlFor="text">Name</label>
              <input
                type="text"
                name="name"
                className="text-capitalize"
                onKeyPress={justCedilla}
                maxLength="25"
                minLength="3"
                onBlur={nameBlur}
                value={nameItem}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {errorName && !nameItem ? (
              <p className="error-message">Please provide a name</p>
            ) : null}
            <div
              className={
                errorSurname && !surnameItem
                  ? "form-control void"
                  : "form-control"
              }
            >
              <label htmlFor="text">Surname</label>
              <input
                type="text"
                name="surname"
                className="text-capitalize"
                onKeyPress={justCedilla}
                maxLength="25"
                minLength="3"
                value={surnameItem}
                onBlur={surnameBlur}
                onChange={(e) => setSurname(e.target.value)}
              />
              {errorSurname && !surnameItem ? (
                <p className="error-message">Please provide a surname</p>
              ) : null}
            </div>
            <div
              className={
                emailError && !email ? "form-control void" : "form-control"
              }
            >
              <label htmlFor="text">Email</label>
              <input
                type="email"
                name="email"
                maxLength="40"
                minLength="6"
                value={email}
                onBlur={emailBlur}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && !email ? (
                <p className="error-message">Please provide a email</p>
              ) : null}
            </div>
            <div
              className={
                errorPassword && !password
                  ? "form-control void"
                  : "form-control"
              }
            >
              <label htmlFor="text">Password</label>
              <input
                type={!showpassword ? "text" : "password"}
                name="password"
                maxLength="15"
                minLength="6"
                value={password}
                onBlur={passwordBlur}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={showhidden} className="show-hidden">
                {!showpassword ? <AiFillEye /> : <AiOutlineEyeInvisible />}
              </button>
              {errorPassword && !password ? (
                <p className="error-message">Please provide a surname</p>
              ) : null}
            </div>
            <div className="submit-form-item">
              <button disabled={!formValues} className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Form;
