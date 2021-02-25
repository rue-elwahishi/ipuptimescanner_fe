import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SideBarComponent from "../../components/navbar/siderbar.component";
import { HomeView } from "../home_view/home.view";
export default function DashView(props) {
  return <div>
    

        
    <Container fluid>
          <Row>
            <Col xs={2} id="sidebar-wrapper">
              <SideBarComponent />
            </Col>
            <Col xs={10} id="page-content-wrapper">
                {props.children}
            </Col>
          </Row>
        </Container> 
  </div>;
}
