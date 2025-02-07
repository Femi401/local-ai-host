/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import googleLogo from "../assets/google-logo.png";
import appleLogo from "../assets/apple-logo.png";
import githubLogo from "../assets/github-logo.png";
import microsoftLogo from "../assets/microsoft-logo.png";
import emailLogo from "../assets/email-logo.png";
import { useNavigate } from "react-router-dom";
const modalStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 20px;
  margin: 100px auto; /* Adjust margin to avoid overlap with header */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const buttonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  font-size: 16px;

  &:hover {
    background-color: #f0f0f0;
  }

  img {
    margin-right: 10px; /* Space between logo and text */
    width: 20px; /* Adjust logo size */
    height: 20px; /* Adjust logo size */
  }
`;

const linkStyles = css`
  text-decoration: none;
  color: black;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

const loginPageStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const guestLinkStyles = css`
  text-decoration: none;
  color: black;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const handleGuestClick = () => {
    navigate("/chatbot");
  };
  return (
    <div css={loginPageStyles}>
      <div css={modalStyles}>
        <h2>Log In</h2>
        <p>Log in through:</p>
        <button css={buttonStyles}>
          <img src={googleLogo} alt="Google" />
          Log in with Google
        </button>
        <button css={buttonStyles}>
          <img src={appleLogo} alt="Apple" />
          Log in with Apple
        </button>
        <button css={buttonStyles}>
          <img src={githubLogo} alt="GitHub" />
          Log in with GitHub
        </button>
        <button css={buttonStyles}>
          <img src={microsoftLogo} alt="Microsoft" />
          Log in with Microsoft
        </button>
        <button css={buttonStyles}>
          <img src={emailLogo} alt="Email" />
          Log in with Email
        </button>
      </div>
      <button css={guestLinkStyles} onClick={handleGuestClick}>
        Continue as Guest
      </button>
    </div>
  );
};

export default Login;
