import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdPin } from "react-icons/io";
import Card from "react-bootstrap/Card";

const PrivateCargoTable = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = "localhost:5000/api/auth/cargo";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  console.log(data.cargos.TrackingNumber);
  return (
    <Card style={{ backgroundColor: "#f7faff" }}>
      <div className="w-85 mx-auto my-10">
        <div className="card card-outline-secondary">
          <div className="card-body d-flex justify-content-start ">
            <h3 className="mb-0 pr-2">Receiver</h3>
            <IoMdPin style={{ marginBottom: "2", transform: "scale(1.4)" }} />
          </div>
          <div className=" d-flex flex-column justify-content-start mb-0">
            <p style={{ fontSize: "1rem" }}>{/* {name} */}ვასილ ასეიშვილი</p>
            <p style={{ fontSize: "1rem" }}>{/* {phone}*/} 551607077</p>
            <p style={{ fontSize: "1rem" }}>{/* {address} */} თბილისი GE</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PrivateCargoTable;
