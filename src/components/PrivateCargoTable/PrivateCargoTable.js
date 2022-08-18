import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { IoMdPin } from "react-icons/io";

const PrivateCargoTable = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "http://localhost:5000/api/auth/cargo";

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await axios(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getData();
  }, [url]);

  return loading ? (
    <div className="d-flex justify-content-center align-items-center m-10">
      <Spinner animation="border" size="sm" />
    </div>
  ) : (
    <div>
      {data.cargos?.map((cargo, i) => (
        <div
          className="w-85 mx-auto my-10"
          style={{ backgroundColor: "#f7faff" }}
          key={i}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="w-20">
                  Tracking Number
                </th>
                <th scope="col">
                  Receiver{" "}
                  <IoMdPin
                    style={{ marginBottom: "2", transform: "scale(1.4)" }}
                  />
                </th>
                <th scope="col">
                  Sender{" "}
                  <IoMdPin
                    style={{ marginBottom: "2", transform: "scale(1.4)" }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-20">{cargo.TrackingNumber}</td>
                <td className="w-20">
                  {" "}
                  <p>{cargo.ShippingSpecs.receiverInformation.name}</p>
                  <p>{cargo.ShippingSpecs.receiverInformation.email}</p>
                  <p>{cargo.ShippingSpecs.receiverInformation.phone}</p>
                  <p>
                    {
                      cargo.ShippingSpecs.receiverInformation.address
                        .countryCode
                    }{" "}
                    {
                      cargo.ShippingSpecs.receiverInformation.address
                        .addressLine1
                    }{" "}
                    {
                      cargo.ShippingSpecs.receiverInformation.address
                        .addressLine2
                    }{" "}
                    {cargo.ShippingSpecs.receiverInformation.address.postalCode}
                  </p>
                </td>
                <td className="w-20">
                  {" "}
                  <p>{cargo.ShippingSpecs.receiverInformation.name}</p>
                  <p>{cargo.ShippingSpecs.receiverInformation.email}</p>
                  <p>{cargo.ShippingSpecs.receiverInformation.phone}</p>
                  <p>
                    {
                      cargo.ShippingSpecs.receiverInformation.address
                        .countryCode
                    }{" "}
                    {
                      cargo.ShippingSpecs.receiverInformation.address
                        .addressLine1
                    }{" "}
                    {
                      cargo.ShippingSpecs.receiverInformation.address
                        .addressLine2
                    }{" "}
                    {cargo.ShippingSpecs.receiverInformation.address.postalCode}
                  </p>
                </td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PrivateCargoTable;
