import React from "react";
import "./App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { HomeView } from "./views/home_view/home.view";
import { MapView } from "./views/map_view/map.view";
import { AddItemView } from "./views/add_item_view/add_item.view";
import WebsitesView from "./views/websites_view/websites.view";
import { ErrorHandler } from "./error_handler/error_handler";
import SideBarComponent from "./components/navbar/siderbar.component";
import PublicRoute from './components/publicRoutes/public_routes.component'
import PrivateRoute from './components/privateRoutes/private_Routes.component'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { EditClientView } from "./views/edit_client_view/edit_client_view";

import Page404 from "./pages/fourohfour";


import LoginView from "./views/login_view/login_view";
import {useToken }from './customHooks/useToken';
function App() {
  const { token, setToken } = useToken();

  const routes = [
    {
      path: "/",
      exact: true,
      component: HomeView
    },
    {
      path: "/clients",
      components: WebsitesView
    },
    {
      path: "/clients/map",
      component: MapView
      
    }
  ];
  
  // React.useEffect(() => {
  //   console.log("APP check token: ", token);
  // }, token)
  
  return (
    <>
      <Router>
      <ErrorHandler>
      <PublicRoute token={token} restricted={false} exact path="/login">
        <LoginView setToken={setToken} />
      </PublicRoute> 

      
   <Switch>
     {routes.map((route, index) => {
      return <PrivateRoute 
       token={token}
       key={index}
       path={route.path}
       exact={route.exact}
       restricted={true}
       children= {SideBarComponent}
       />
     })}
     </Switch>
    
  
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <PrivateRoute
              restricted={true}
              token={token}
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
            ))}
          </Switch>
      
                  {/* <PrivateRoute token={token} restricted={true} exact path="/clients/map">
                    <MapView />
                  </PrivateRoute>

                  <PrivateRoute token={token} restricted={true} exact path="/clients/add">
                    {(match) => <AddItemView match={match} />}
                  </PrivateRoute>

                  <PrivateRoute token={token} restricted={true} exact path="/clients/:id/history">
                    {(match) => <AddItemView match={match} />}
                  </PrivateRoute>

                  <PrivateRoute token={token} restricted={true} exact path="/clients/:id/edit">
                    {(match) => <EditClientView match={match} />}
                  </PrivateRoute>

                  <PrivateRoute token={token} restricted={true} exact path="/clients/:id">
                    {(match) => <WebsitesView match={match} />}
                  </PrivateRoute>

                  <PrivateRoute token={token} restricted={true} exact path="/clients">
                    {(props) => <WebsitesView {...props} />}
                  </PrivateRoute>
                  <PrivateRoute token={token} restricted={true} exact path="/">
                    <HomeView />
                  </PrivateRoute>

                  <Route exact path="*">
                    <Page404 />
                  </Route> */}
          
      
    
        </ErrorHandler>
      </Router>
    </>
  );
}

export default App;
