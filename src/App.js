import React from "react";
import "./App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { HomeView } from "./views/home_view/home.view";
import { MapView } from "./views/map_view/map.view";
import { AddItemView } from "./views/add_item_view/add_item.view";
import WebsitesView from "./views/websites_view/websites.view";
import { ErrorHandler } from "./error_handler/error_handler";
import SideBarComponent from "./components/navbar/siderbar.component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { EditClientView } from "./views/edit_client_view/edit_client_view";

import Page404 from "./pages/fourohfour";

import LoginForm from "./components/loginForm/login_form.component";

function App(props) {
  return (
    <>
      <Router>
        {/* <Route exact path="/login">
          {(match) => <LoginForm match={match} />}
        </Route> */}
        <Container fluid>
          <Row>
            <Col xs={2} id="sidebar-wrapper">
              <SideBarComponent />
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <ErrorHandler>
                <Switch>
                  <Route exact path="/clients/map">
                    <MapView />
                  </Route>

                  <Route exact path="/clients/add">
                    {(match) => <AddItemView match={match} />}
                  </Route>

                  <Route exact path="/clients/:id/history">
                    {(match) => <AddItemView match={match} />}
                  </Route>

                  <Route exact path="/clients/:id/edit">
                    {(match) => <EditClientView match={match} />}
                  </Route>

                  <Route exact path="/clients/:id">
                    {(match) => <WebsitesView match={match} />}
                  </Route>

                  <Route exact path="/clients">
                    {(props) => <WebsitesView {...props} />}
                  </Route>
                  <Route exact path="/">
                    <HomeView />
                  </Route>

                  <Route exact path="*">
                    <Page404 />
                  </Route>
                </Switch>
              </ErrorHandler>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
