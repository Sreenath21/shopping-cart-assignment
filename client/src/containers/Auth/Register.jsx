import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Auth.scss";

const Register = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [userDetails, setUserDetails] = useState(initialState);
  const [validation, setValidation] = useState({
    statusErrorMessage: "",
    statusSuccessMessage: "",
  });
  // const navigate = useNavigate();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const emailReg = /\S+@\S+\.\S+/;
    const pwdReg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (userDetails.firstName && userDetails.email && userDetails.password) {
      if (userDetails.password === userDetails.confirmPassword) {
        if (pwdReg.test(userDetails.password)) {
          if (emailReg.test(userDetails.email)) {
            sessionStorage.setItem(
              "name",
              userDetails.firstName + " " + userDetails.lastName
            );
            sessionStorage.setItem("email", userDetails.email);
            sessionStorage.setItem("password", userDetails.password);
            sessionStorage.setItem("status", "");

            setValidation({
              ...validation,
              statusSuccessMessage: "User registered successfully",
              statusErrorMessage: "",
            });
            setUserDetails(initialState);

            setTimeout(() => {
              // navigate("/login");
            }, 2000);
          } else {
            showError("Invalid email id");
          }
        } else {
          showError(
            "Password must contain minimum eight characters, atleast one letter, one number and one special character"
          );
        }
      } else {
        showError("Passwords do not match");
      }
    } else {
      showError("Please provide First name, Email and Password");
    }
  };

  const showError = (msg) => {
    setValidation({ ...validation, statusErrorMessage: msg });
  };

  return (
    <div className="register">
      <aside>
        <h1>Sign Up</h1>
        <p>We do not share personal details with anyone</p>
      </aside>

      <section className="register-form">
        <form onSubmit={onFormSubmit}>
          <input
            placeholder="First Name"
            required
            value={userDetails.firstName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, firstName: e.target.value })
            }
          />

          <input
            placeholder="Last Name"
            required
            value={userDetails.lastName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastName: e.target.value })
            }
          />

          <input
            placeholder="Email"
            required
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />

          <input
            placeholder="Password"
            required
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />

          <input
            placeholder="Confirm Password"
            required
            value={userDetails.confirmPassword}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                confirmPassword: e.target.value,
              })
            }
          />

          <p className="validation-text">
            {validation.statusErrorMessage || validation.statusSuccessMessage}
          </p>
          <button>Sign up</button>
        </form>
      </section>
    </div>
  );
};

export default Register;
