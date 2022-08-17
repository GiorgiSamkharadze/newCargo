import React, {useEffect, useState} from "react";
import {Button, Col, Row, Table} from "react-bootstrap";
import useRequest from "../../hooks/useRequest";
import {GetItemsRequest} from "../../routes/GetRoutesRequest";
import {Route, Switch, useHistory} from "react-router";
import {countryCodes} from "utils";
import {PoliciesEditDialog} from "./PoliciesEditModal";
import {RouteCreateDialog} from "./RouteCreateModal";

function ManagePage() {
  const [routes, setRoutes] = useState([]);
  const [getItems,] = useRequest(GetItemsRequest);
  const history = useHistory();

  const loadItems = () => {
    setRoutes([]);
    getItems().then(({data}) => {
      setRoutes(data.routes);
    }).catch((e) => {});
  }
  const editRoute = (route) => {
    history.push(`/manage/routes/edit/${route}`);
  }
  const editRoutePolicies = (route) => {
    history.push(`/manage/routes/editPolicies/${route}`);
  }

  useEffect(() => {
    loadItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Row>
        <Col><h1>Manage routes</h1></Col>
        <Col className="text-right"><Button type="button" variant="success" onClick={()=>history.push(`/manage/routes/create`)}>Add route</Button></Col>
      </Row>
      <Table responsive="sm" striped bordered hover>
        <thead>
        <tr>
          <th>Source Country Code</th>
          <th>Destination Country Code</th>
          <th>Currency</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {routes.map((route) => {
          return (
            <tr key={`${route.source_country_code}${route.destination_country_code}`}>
              <td className="align-middle">{countryCodes[route.source_country_code]} ({route.source_country_code})</td>
              <td className="align-middle">{countryCodes[route.destination_country_code]} ({route.destination_country_code})</td>
              <td className="align-middle">{route.currency_code}</td>
              <td>
                <button type="button" className="btn btn-outline-warning btn-sm mr-2" onClick={()=>editRoute(`${route.source_country_code}-${route.destination_country_code}`)}><i className="fa fa-edit"/></button>
                <button type="button" className="btn btn-outline-warning btn-sm" onClick={()=>editRoutePolicies(`${route.source_country_code}-${route.destination_country_code}`)}><i className="fa fa-table"/></button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </Table>
      <Switch>
        <Route path="/manage/routes/editPolicies/:route">
          {({ history, match }) => (
            <PoliciesEditDialog
              show={match != null}
              route={match && match.params.route}
              onHide={() => {
                history.push("/manage/routes");
                loadItems();
              }}
            />)
          }
        </Route>
        <Route path={["/manage/routes/edit/:route", "/manage/routes/create"]}>
          {({ history, match }) => (
            <RouteCreateDialog
              show={match != null}
              route={match && match.params.route}
              onHide={() => {
                history.push("/manage/routes");
                loadItems();
              }}
            />)
          }
        </Route>
      </Switch>
    </>
  );
}

export default ManagePage;
