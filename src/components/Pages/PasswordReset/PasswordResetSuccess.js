import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";

const PasswordResetSuccess = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/home/?emailVerified=true");
    }, 5000);
  });

  return (
    <Card style={{ backgroundColor: "#f7faff" }}>
      <div className="w-60 mx-auto my-10">
        <div className="card card-outline-secondary">
          <div className="card-header">
            <h3 className="mb-0">Success!</h3>
          </div>
          <p style={{ fontSize: "1rem", padding: "20px" }}>
            Your password has been changed, now please login with your new
            password.
          </p>
          <div className="form-group" style={{ margin: "20px auto" }}>
            <button
              onClick={() => history.push("/home/login")}
              className="btn btn-primary btn-pill btn-wide transition-3d-hover"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PasswordResetSuccess;
