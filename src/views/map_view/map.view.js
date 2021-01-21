import React, { Component, useEffect, useState } from "react";
import Map from "pigeon-maps";

// import Marker from 'pigeon-marker'
// import Overlay from 'pigeon-overlay'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../components/searchbar/search_bar";
import { Row, Col } from "react-bootstrap";

import { ClientsService } from "../../services/clients.service";

const LitMarker = ({ left, top, style, children }) => (
  <FontAwesomeIcon
    icon={faLightbulb}
    style={{
      position: "absolute",
      left: left - 15,
      top: top - 30,
      width: 30,
      height: 30,
      color: "#386af9",
      ...(style || {}),
    }}
  >
    {children}
  </FontAwesomeIcon>
);

const DeadMarker = ({ left, top, style, children }) => (
  <FontAwesomeIcon
    icon={faLightbulb}
    style={{
      position: "absolute",
      left: left - 15,
      top: top - 30,
      width: 30,
      height: 30,
      ...(style || {}),
    }}
  >
    {children}
  </FontAwesomeIcon>
);

export function MapView() {
  const clientsService = new ClientsService();
  const [clientData, setClientData] = useState(undefined);

  useEffect(() => {
    console.log("Getting clients... ");
    clientsService
      .getClients()
      .then((response) => {
        console.log("Get clients response: ", response);
        response["data"] = response["data"].filter(
          (client) => client.type === "cpe"
        );
        response["data"] = response["data"].map((client) => {
          client.attributes = JSON.parse(client.attributes);
          return client;
        });
        console.log("Get clients response filtered: ", response["data"]);
        setClientData(response["data"]);
      })
      .catch((error) => {
        console.log("Something went wrong: ", error);
      });
  });

  return (
    <div>
      <Row className="h-100 ">
        <Col md={12}>
          <Map center={[32.1, 20.07]} zoom={12} height={600}>
            <Row className="mt-2 mb-5 justify-center">
              <Col md={4} className="mx-auto">
                <div className="display-5  ">Client Map</div>
              </Col>
              <Col md={4}></Col>

              <Col md={4}>
                <SearchBar />
              </Col>
            </Row>
            {clientData
              ? clientData.map((client) =>
                  client.status === "up" ? (
                    <LitMarker
                      key={client.id}
                      anchor={[
                        1 * client.attributes.x,
                        1 * client.attributes.y,
                      ]}
                    />
                  ) : (
                    <DeadMarker
                      key={client.id}
                      anchor={[
                        1 * client.attributes.x,
                        1 * client.attributes.y,
                      ]}
                    />
                  )
                )
              : false}
          </Map>
        </Col>
      </Row>
    </div>
  );
}
