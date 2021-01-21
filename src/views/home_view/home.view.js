import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import mapImage from "../../assets/Map.png";
import addUser from "../../assets/Add-User.png";
import website from "../../assets/website.png";

import React from "react";

const data = [
  {
    title: "See a map of all the currently active and inactive Clienss.",
    image: mapImage,
    buttonText: "Go to Map",
    link: "/clients/map",
  },
  {
    title: "See a map of all the currently active and inactive Clients.",
    image: website,
    buttonText: "Go to Clients",
    link: "/clients",
  },
  {
    title: "See a map of all the currently active and inactive Clients.",
    image: addUser,
    buttonText: "Add Client",
    link: "/clients/add",
  },
];

export function HomeView() {
  return (
    <Container className="vertical-center d-flex flex-column  justify-content-center">
      {data.map((item, index) => {
        return (
          <Row i={index} className="my-2 Card">
            <Col className="mt-2" xs={2} md={6}>
              {item.title}
              <br></br> <br></br>
              <Link to={item.link}>
                <Button variant="Dark"> {item.buttonText}</Button>{" "}
              </Link>
            </Col>
            <Col md={2}></Col>
            <Col xs={3} md={3}>
              <img className="img-fluid my-2" src={item.image} />
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}
