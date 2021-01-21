import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.component.css";
import { Link } from "react-router-dom";

import {
  faLightbulb,
  faHome,
  faMap,
  faNetworkWired,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBarComponent() {
  var links_list = [
    { icon: faHome, link: "/", title: "Home" },
    { icon: faNetworkWired, link: "/clients", title: "Clients" },
    { icon: faMap, link: "/clients/map", title: "Client Map" },
    { icon: faPlus, link: "/clients/add", title: "Add Client" },
  ];
  return (
    <div>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        {links_list.map((link) => (
          <Link className="nav-link" key={link.link} to={link.link}>
            {link.icon ? (
              <FontAwesomeIcon className="mx-1" icon={link.icon} />
            ) : (
              false
            )}
            {link.title}
          </Link>
        ))}
      </Nav>

      {/* <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <FontAwesomeIcon className="mx-3" icon={props.titleIcon} />
          {props.title}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {props.links.map((link) => (
              <Link className="nav-link" key={link.link} to={link.link}>
                {link.icon ? (
                  <FontAwesomeIcon className="mx-1" icon={link.icon} />
                ) : (
                  false
                )}
                {link.title}
              </Link>
            ))}
          </Nav>
   
        
         
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
}
