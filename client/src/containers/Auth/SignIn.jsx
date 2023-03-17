import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

import "./Auth.scss";

const SignIn = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [validation, setValidation] = useState("");
  const { toggleUserAuthentication } = useContext(AuthContext);
  const navigate = useNavigate();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const email = sessionStorage.getItem("email");
    const pwd = sessionStorage.getItem("password");

    console.log(userDetails.email, userDetails.password);

    if (userDetails.email === email && userDetails.password === pwd) {
      toggleUserAuthentication();
      sessionStorage.setItem("status", "logged-in");
      navigate("/");
    } else {
      setValidation("Invalid credentials");
    }
  };

  return (
    <div className="sign-in">
      <aside>
        <h1>Sign In</h1>
        <p>Get access to your Orders, Wishlist and Recommandations</p>
      </aside>

      <section className="register-form">
        <form onSubmit={onFormSubmit}>
          <input
            placeholder="Email"
            value={userDetails.email}
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />

          <input
            placeholder="password"
            type="password"
            value={userDetails.password}
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />

          <p className="validation-text">{validation}</p>
          <button>SignIn</button>
        </form>
      </section>
    </div>
  );
};

export default SignIn;
