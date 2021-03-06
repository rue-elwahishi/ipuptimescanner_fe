import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import SearchBar from "../../components/searchbar/search_bar";
import { Link, useHistory } from "react-router-dom";



import { faTrash, faCog, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "../../customHooks/custom_hooks";
import {
  GetClientEndpoint,
  DeleteClientEndpoint,
} from "../../customHooks/postClientEndpoint";

export default function WebsitesView() {
  const [clients, getClients] = GetClientEndpoint();
  const [deleted, deleteClient] = DeleteClientEndpoint();
  const [filteredData, setFilteredData] = useState(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("name");

  useEffect(() => {
    getClients();
  }, []);

  const handleCallback = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  const handleSecondCallback = (def) => {
    setFilter(def);
  };
  console.log(clients, "clients");

  useEffect(() => {
    if (filter === "name") {
      setFilteredData(
        clients.data?.filter((client) =>
          client.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    if (filter === "address") {
      setFilteredData(
        clients.data?.filter((client) => client.address.includes(searchTerm))
      );
    }
  }, [searchTerm]);

  async function deleteWebsite(id) {
    await deleteClient(id);
    console.log("...deleting");
    await getClients();
    console.log("....fetching");
  }
  console.log(filteredData, "filtered");

  return (
    <div>
      <Container>
        <Row style={{ position: "relative" }}>
          <Col
            className="text-center my-5"
            style={{ position: "absolute", zIndex: "1", width: "100%" }}
          >
            <Card className="p-3">
              <Row className="mt-2 mb-5 justify-center">
                <Col md={4} className="mx-auto">
                  <div className="display-5  ">Websites</div>
                </Col>
                <Col md={4}></Col>

                <Col md={4}>
                  <SearchBar
                    handleCallback={handleCallback}
                    handleSecondCallback={handleSecondCallback}
                  />
                </Col>
              </Row>

              {clients.data ? (
                <Table className="py-5" striped hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Status</th>
                      <th>Description</th>
                      <th>Creation</th>
                      <th>Last Change</th>
                      <th>Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(filteredData ? filteredData : clients.data)?.map(
                      (row) => (
                        <tr key={row.id}>
                          <td>{row.id}</td>
                          <td>{row.name}</td>
                          <td>{row.address}</td>
                          <td>
                            <span className="badge badge-info">
                              {row.status}
                            </span>
                          </td>
                          <td>{row.description}</td>
                          <td>
                            {new Date(row.created_at).toLocaleDateString()}
                          </td>
                          <td>
                            {new Date(row.updated_at).toLocaleDateString()}
                          </td>
                          <td>
                            <div className="row mx-1">
                              <div className="col-4">
                                <Link to={"/clients/" + row.id + "/history"}>
                                  <Button
                                    className="btn-sm px-3"
                                    // onClick={() => goToHistory(row.id)}
                                    variant="primary"
                                  >
                                    <FontAwesomeIcon icon={faClock} />
                                  </Button>
                                </Link>
                              </div>
                              <div className="col-4">
                                <Link to={"/clients/" + row.id + "/edit"}>
                                  <Button
                                    className="btn-sm px-3"
                                    variant="info"
                                  >
                                    <FontAwesomeIcon icon={faCog} />
                                  </Button>
                                </Link>
                              </div>
                              <div className="col-4">
                                <Button
                                  className="btn-sm px-3"
                                  onClick={() => deleteWebsite(row.id)}
                                  variant="danger"
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </Button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
              ) : (
                <div className="mx-auto text-center">
                  <Spinner animation="border" />
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// export class WebsitesView extends Component {
//   constructor(props) {
//     super(props);
//     this.clientsService = new ClientsService();
//     this.state = { clientData: undefined };
//   }

//   componentDidMount() {
//     console.log("Props: ", this.props);
//     this.getClients();
//   }

//   getClients() {
//     this.setState({ clientData: undefined });
//     this.clientsService
//       .getClients()
//       .then((response) => {
//         console.log("Get clients response: ", response);
//         // response['data'] = response['data'].filter( client => client.type === 'website' );
//         this.setState({ clientData: response["data"] });
//       })
//       .catch((error) => {
//         console.log("Something went wrong: ", error);
//       });
//   }

//   deleteWebsite(id) {
//     this.clientsService
//       .deleteClient(id)
//       .then((response) => {
//         console.log("Get clients response: ", response);
//         this.getClients();
//       })
//       .catch((error) => {
//         console.log("Something went wrong: ", error);
//         this.getClients();
//       });
//   }

//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col className="text-center my-5">
//             <Card className="p-3">
//               <div className="display-5 py-3">Websites

//               <SearchBar/>
//               </div>
//               {this.state.clientData ? (
//                 <Table className="py-5" striped hover>
//                   <thead>
//                     <tr>
//                       <th>ID</th>
//                       <th>Name</th>
//                       <th>Address</th>
//                       <th>Status</th>
//                       <th>Description</th>
//                       <th>Creation</th>
//                       <th>Last Change</th>
//                       <th>Tools</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {this.state.clientData.map((row) => (
//                       <tr key={row.id}>
//                         <td>{row.id}</td>
//                         <td>{row.name}</td>
//                         <td>{row.address}</td>
//                         <td>
//                           <span className="badge badge-info">{row.status}</span>
//                         </td>
//                         <td>{row.description}</td>
//                         <td>{new Date(row.created_at).toLocaleDateString()}</td>
//                         <td>{new Date(row.updated_at).toLocaleDateString()}</td>
//                         <td>
//                           <div className="row mx-1">
//                             <div className="col-4">
//                               <Link to={"/clients/" + row.id + "/history"}>
//                                 <Button
//                                   className="btn-sm px-3"
//                                   onClick={() => this.goToHistory(row.id)}
//                                   variant="primary"
//                                 >
//                                   <FontAwesomeIcon icon={faClock} />
//                                 </Button>
//                               </Link>
//                             </div>
//                             <div className="col-4">
//                               <Link to={"/clients/" + row.id + "/edit"}>
//                                 <Button className="btn-sm px-3" variant="info">
//                                   <FontAwesomeIcon icon={faCog} />
//                                 </Button>
//                               </Link>
//                             </div>
//                             <div className="col-4">
//                               <Button
//                                 className="btn-sm px-3"
//                                 onClick={() => this.deleteWebsite(row.id)}
//                                 variant="danger"
//                               >
//                                 <FontAwesomeIcon icon={faTrash} />
//                               </Button>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               ) : (
//                 <div className="mx-auto text-center">
//                   <Spinner animation="border" />
//                 </div>
//               )}
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }
