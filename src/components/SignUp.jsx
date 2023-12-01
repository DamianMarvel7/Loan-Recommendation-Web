import { Form, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useSignup } from "../hooks/useSignup";
import { useAuthContext } from "../hooks/useAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { authen, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await authen(email, password);

    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  return (
    <div className="login container">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <form className="login-form grid flow container" onSubmit={handleSubmit}>
        <p className="headingL">Sign Up</p>
        <input
          type="text"
          placeholder="Username"
          className="naked"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="naked"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="naked btn">
          Sign up to your account
        </button>
        <p className="form-text">
          <span>Already have an account? </span>
          <span className="clr-primary pointer">
            <Link to="/login">Log in</Link>
          </span>
        </p>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
