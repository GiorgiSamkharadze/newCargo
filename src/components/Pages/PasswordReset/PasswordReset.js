import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import PasswordResetSuccess from "./PasswordResetSuccess";
import PasswordResetFail from "./PasswordResetFail";
import { useValidation } from "hooks";
import passwordValidation from "./passwordValidation";

const PasswordReset = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setconfirmPasswordValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { errors, validate } = useValidation(passwordValidation);

  const { passwordResetToken } = useParams();

  const onChange = ({ target: { value } }) => {
    setconfirmPasswordValue(value);
    validate({ password: value }, "password");
  };

  const onSetClicked = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios(
        "http://192.168.60.76/auth/customer/password/reset",
        {
          method: "POST",
          data: {
            password: `${passwordValue}`,
            confirm_password: `${confirmPasswordValue}`,
            token: `${passwordResetToken}`,
          },
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.data.error === false) {
        setIsSuccess(true);
      } else {
        setIsFailure(true);
      }
      setLoading(false);
    } catch (err) {
      setIsFailure(true);
    }
  };

  if (isSuccess) return <PasswordResetSuccess />;
  if (isFailure) return <PasswordResetFail />;

  return (
    <Card style={{ backgroundColor: "#f7faff" }}>
      <div className="w-60 mx-auto my-10">
        <div className="card card-outline-secondary">
          <div className="card-header">
            <h3 className="mb-0">Reset Password</h3>
          </div>
          <div className="card-body">
            <form className="form" autoComplete="off">
              <div className="form-group">
                <label htmlFor="inputPassword">New Password</label>
                <input
                  type="password"
                  className="form-control w-80"
                  id="inputPassword"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputConfirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control w-80"
                  id="inputConfirmPassword"
                  value={confirmPasswordValue}
                  onChange={onChange}
                  required
                />
                {confirmPasswordValue !== "" &&
                  confirmPasswordValue !== passwordValue && (
                    <label className="text-danger ml-2 font-weight-light text-xs">
                      Passwords do not match.
                    </label>
                  )}
                {errors.password && (
                  <label className="text-danger ml-2 font-weight-light text-xs">
                    {errors.password}
                  </label>
                )}
                <span className="form-text small text-muted">
                  The password must be at least 8 characters, and must not
                  contain spaces.
                </span>
              </div>
              <div className="form-group">
                <button
                  disabled={
                    loading ||
                    errors.password ||
                    !passwordValue ||
                    !confirmPasswordValue ||
                    passwordValue !== confirmPasswordValue
                  }
                  onClick={onSetClicked}
                  className="btn btn-primary btn-pill btn-wide transition-3d-hover"
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Set Password"
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

export default PasswordReset;
