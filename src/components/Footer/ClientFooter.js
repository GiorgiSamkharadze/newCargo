import React from "react";
import ClientFeedbackForm from "./ClientFeedbackForm";
import { Link } from "react-router-dom";
import { FaFacebookMessenger } from "react-icons/fa";

const ClientFooter = ({ feedback }) => {
  return (
    <footer className="bg-primary position-relative p-4">
      <div className="container position-relative z-index-2">
        <div className="row justify-content-lg-between">
          <div
            className={`${
              feedback ? "col-lg-5" : ""
            } space-top-1 text-white mb-lg-0`}
          >
            <div className="mb-1">
              <h2 className="h1 text-white">We're here to help</h2>
              <p className="text-white">
                Find the right solution and get tailored pricing options. Or,
                find fast answers in our{" "}
                <a
                  className="text-navy font-weight-bold"
                  href="mailto:support@akido.me"
                >
                  Help Center.
                </a>
              </p>
            </div>

            <div className="row">
              <div className="col-sm-6 mb-5">
                <span className="icon icon-soft-light icon-circle mb-3">
                  <i className="fas fa-envelope" />
                </span>
                <h4 className="text-white mb-0">General enquiries</h4>
                <a
                  className="text-white-70 font-size-1"
                  href="mailto:support@georgiancargo.co.uk"
                >
                  support@georgiancargo.co.uk
                </a>
              </div>

              <div className="col-sm-6 mb-5">
                <span className="icon icon-soft-light icon-circle mb-3">
                  <i className="fas fa-comment" />
                </span>
                <h4 className="text-white mb-0">Say hi on messanger</h4>
                <a
                  className={"btn btn-info mt-2 m-1"}
                  href={"https://m.me/georgiancargoworld"}
                  rel={"noreferrer"}
                  target={"_blank"}
                >
                  <FaFacebookMessenger />
                  &nbsp;Message us on facebook
                </a>
              </div>

              <div className="col-sm-6 mb-5">
                <span className="icon icon-soft-light icon-circle mb-3">
                  <i className="fas fa-phone" />
                </span>
                <h4 className="text-white mb-0">Phone Number</h4>
                <a
                  className="text-white-70 font-size-1"
                  href="tel:+995322050884"
                >
                  +995322050884
                </a>
              </div>

              <div className="col-sm-6">
                <span className="icon icon-soft-light icon-circle mb-3">
                  <i className="fas fa-map-marker-alt" />
                </span>
                <h4 className="text-white mb-0">Address</h4>
                <p className="text-white-70 font-size-1">
                  6 Davit Baqradze Street
                  <br />
                  Didube, Tbilisi
                  <br />
                  0119, Georgia
                </p>
              </div>
            </div>
          </div>

          {feedback && (
            <div className="col-lg-6 mt-lg-n11">
              <ClientFeedbackForm />
            </div>
          )}
        </div>
        <hr className="opacity-xs my-3" />

        <div className="row align-items-md-center">
          <div className="col-md-4 text-md-right" />
          <div className="col-md-4">
            <div className="text-center">
              <Link
                className="d-inline-flex align-items-center mb-2"
                to="/home"
                aria-label="Front"
              >
                <img className="brand" src="/logo.png" alt="Logo" />
              </Link>

              <p className="small text-white-70">
                © Georgian cargo. 2021. All rights reserved.
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center text-md-right">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-xs btn-icon btn-soft-light" href="/home">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-xs btn-icon btn-soft-light" href="/home">
                  <i className="fab fa-google"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-xs btn-icon btn-soft-light" href="/home">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-xs btn-icon btn-soft-light" href="/home">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ClientFooter;
