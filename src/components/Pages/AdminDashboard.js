import { Button, Container, Nav, Navbar } from "react-bootstrap";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import ItemsTable from "../ItemsTable/ItemsTable";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import ManagePage from "../ManageSection/ManagePage";
import { Redirect, Route, Switch } from "react-router-dom";
import { Util } from "../../utils";
import { AuthContext } from "../../context";

function AdminDashboard() {
  const location = useLocation();
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/manage/logout");
  };
  const { auth } = useContext(AuthContext);
  const isAdmin = auth.accountType === "ADMIN" && auth.accountId === "1";

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid={true} className="px-3">
          <Navbar.Brand className="mr-md-3">
            <img
              src="/logo.png"
              className="d-inline-block align-top"
              alt="Georgian Cargo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {isAdmin && (
                <Nav.Item>
                  <Nav.Link
                    className="justify-content-end"
                    active={Util.checkIsActive(location, "/manage/routes")}
                    onClick={() => history.push("/manage/routes")}
                  >
                    Manage
                  </Nav.Link>
                </Nav.Item>
              )}
              <Nav.Item>
                <Nav.Link
                  className="justify-content-end"
                  active={Util.checkIsActive(location, "/manage/items")}
                  onClick={() => history.push("/manage/items")}
                >
                  Items
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="justify-content-end"
                  active={Util.checkIsActive(location, "/manage/transactions")}
                  onClick={() => history.push("/manage/transactions")}
                >
                  Transactions
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item className="text-right">
                <Button variant="danger" onClick={() => handleLogout()}>
                  Logout
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid={true}>
        <Switch>
          <Redirect exact={true} from="/manage" to="/manage/items" />
          <Route path="/manage/items" component={ItemsTable} />
          <Route path="/manage/transactions" component={TransactionsTable} />
          {isAdmin && <Route path="/manage/routes/" component={ManagePage} />}
        </Switch>
      </Container>
    </>
  );
}

export default AdminDashboard;
