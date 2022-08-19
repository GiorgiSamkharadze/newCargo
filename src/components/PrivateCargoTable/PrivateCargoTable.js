import React, { useState, useEffect } from "react";
import axios from "axios";
import copy from "copy-to-clipboard";
import Spinner from "react-bootstrap/Spinner";
import { IoMdPin } from "react-icons/io";
import { GiShipBow } from "react-icons/gi";
import { GrCopy } from "react-icons/gr";
import { FcShipped } from "react-icons/fc";
import { FaShippingFast } from "react-icons/fa";

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

  const copyToClipboard = (i) => {
    copy(`${data.cargos[i].TrackingNumber}`);
  };

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
                <th scope="col">Tracking Number</th>
                <th scope="col">
                  Receiver{" "}
                  <IoMdPin
                    className="my-auto"
                    style={{ transform: "scale(1.4)" }}
                  />
                </th>
                <th scope="col">
                  Sender{" "}
                  <IoMdPin
                    className="my-auto"
                    style={{ transform: "scale(1.4)" }}
                  />
                </th>
                <th scope="col">
                  Route{" "}
                  <GiShipBow
                    className="my-auto"
                    style={{ transform: "scale(1.4)" }}
                  />
                </th>
                <th scope="col">Cargo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-20" onClick={() => copyToClipboard(i)}>
                  <p style={{ cursor: "pointer" }}>
                    {cargo.TrackingNumber} <GrCopy className="my-auto" />
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
                <td>
                  <p> From: {cargo.ShippingSpecs.route.sourceCountryCode}</p>
                  <p> To: {cargo.ShippingSpecs.route.destinationCountryCode}</p>
                </td>
                <td className="w-20">
                  <p>Weight: {cargo.Item.weight}</p>
                  <p>
                    Price: {cargo.Item.itemPrice} {cargo.Item.itemCurrencyCode}
                  </p>
                  <p>
                    Status:
                    {cargo.Status === "PICKED_UP" ? (
                      <p>
                        Picked up{" "}
                        <FcShipped
                          className="my-auto"
                          style={{ transform: "scale(1.4)" }}
                        />
                      </p>
                    ) : (
                      <p>
                        {cargo.Status}{" "}
                        <FaShippingFast
                          className="my-auto"
                          style={{ transform: "scale(1.4)" }}
                        />
                      </p>
                    )}
                    {cargo.CreatedAt}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PrivateCargoTable;
