import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";

const PasswordResetSuccess = () => {
  const history = useHistory();

  return (
    <Card style={{ backgroundColor: "#f7faff" }}>
      <div className="w-60 mx-auto my-10">
        <div className="card card-outline-secondary">
          <div className="card-header">
            <h3 className="mb-0">Ohh no...</h3>
          </div>
          <p style={{ fontSize: "1rem", padding: "20px" }}>
            Something went wrong while trying to reset your password.
          </p>
          <div className="form-group" style={{ margin: "20px auto" }}>
            <button
              onClick={() => history.push("/home")}
              className=" btn btn-primary btn-pill btn-small transition-3d-hover"
            >
              Homepage
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PasswordResetSuccess;
