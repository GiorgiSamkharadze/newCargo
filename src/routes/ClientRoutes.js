import {
  HomePage,
  LoginModal,
  NotFoundPage,
  RegisterModal,
  ForgotPassword,
  PasswordReset,
} from "components/Pages";
import PrivateCargoTable from "components/PrivateCargoTable/PrivateCargoTable";
import { ClientNavbar } from "components/Navbar";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ClientFooter } from "../components/Footer";

const ClientRoutes = () => {
  return (
    <>
      <Route path="(.+)/login" component={LoginModal} />
      <Route path="(.+)/register" component={RegisterModal} />
      <ClientNavbar />
      <Switch>
        <Route path="/home/:tracking" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route
          path="/payment-success"
          render={() => {
            return (
              <>
                <h1 style={{ textAlign: "center", margin: "20px" }}>
                  Payment successful!
                </h1>
                <h4 style={{ textAlign: "center" }}>
                  Please check your email for confirmation
                </h4>
                <ClientFooter />
              </>
            );
          }}
        />
        <Route
          path="/forgot-password"
          render={() => {
            return (
              <>
                <ForgotPassword />
                <ClientFooter />
              </>
            );
          }}
        />
        <Route
          path="/reset-password/:passwordResetToken"
          render={() => {
            return (
              <>
                <PasswordReset />
                <ClientFooter />
              </>
            );
          }}
        />
        <Route
          path="/cargos"
          render={() => {
            return (
              <>
                <PrivateCargoTable />
                <ClientFooter />
              </>
            );
          }}
        />
        <Route
          path="/payment-error"
          render={() => {
            return (
              <>
                <h1 style={{ textAlign: "center", margin: "20px" }}>
                  Payment cancelled!
                </h1>
                <h2 style={{ textAlign: "center" }}>
                  If you think this is an error, please contact system
                  administrator
                </h2>
                <ClientFooter />
              </>
            );
          }}
        />
        <Route path="/not-found" status={404} component={NotFoundPage} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route>
          <Redirect replace to="/not-found" />
        </Route>
      </Switch>
    </>
  );
};

export default ClientRoutes;
