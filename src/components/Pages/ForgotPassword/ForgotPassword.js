import React, { useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { useValidation } from "hooks";
import emailValidation from "./emailValidation";

const ForgotPassword = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { errors, validate } = useValidation(emailValidation);

  const onChange = ({ target: { value } }) => {
    setEmailValue(value);
    validate({ email: value }, "email");
  };

  const onSubmitClicked = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await axios(
        "http://192.168.60.76/auth/customer/password/request/reset",
        {
          method: "POST",
          data: {
            email: `${emailValue}`,
          },
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.data.error === false) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }

      setLoading(false);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return success ? (
    <Card style={{ backgroundColor: "#f7faff" }}>
      <div className="w-60 mx-auto my-10">
        <div className="card card-outline-secondary">
          <div className="card-header">
            <h3 className="mb-0">Okay!</h3>
          </div>
          <p style={{ fontSize: "1rem", padding: "20px" }}>
            Confirmation email has been sent. It will have a link to reset your
            password.
          </p>
        </div>
      </div>
    </Card>
  ) : (
    <Card style={{ backgroundColor: "#f7faff" }}>
      <div className="w-60 mx-auto my-10">
        <div className="card card-outline-secondary">
          <div className="card-header">
            <h3 className="mb-0">Password Reset</h3>
          </div>
          <div className="card-body">
            <form className="form" autoComplete="off">
              <div className="form-group">
                <label htmlFor="inputResetPasswordEmail">Email</label>
                <input
                  type="email"
                  className="form-control w-80"
                  id="inputResetPasswordEmail"
                  value={emailValue}
                  onChange={onChange}
                  required
                />
                <span className="form-text small text-muted">
                  Enter your email and we'll send you a reset link.
                </span>
                {errors.email && (
                  <label className="text-danger ml-2 font-weight-light text-xs">
                    {errors.email}
                  </label>
                )}
                {errorMessage && (
                  <label className="text-danger ml-2 font-weight-light text-xs">
                    {errorMessage}
                  </label>
                )}
              </div>
              <div className="form-group">
                <button
                  disabled={loading || errors.email || emailValue === ""}
                  onClick={onSubmitClicked}
                  className="btn btn-primary btn-pill btn-wide transition-3d-hover"
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ForgotPassword;
