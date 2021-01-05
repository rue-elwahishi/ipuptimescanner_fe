import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ClientFormComponent } from '../../components/clientForm/client_form.component';
import { useQuery } from '../../customHooks/custom_hooks';
import{ PostClientEndpoint} from '../../customHooks/postClientEndpoint'




export function AddItemView(props) {
    const [message, setMessage] = useState('');
    const [newClient, postNewClient] = PostClientEndpoint();

       
    
     const  handleSubmit = (event, data) => {
        console.log(data, 'data')
        event.preventDefault();
    
       

         postNewClient(data)
        
          document.getElementById("add-client-form").reset();
            // .then(response => {
                
       

            //     setMessage("Success");
            // })
            // .catch(error => {
            //     console.log("Submit error: ", error);

            //     setMessage("Something went wrong...");
            // })
    }
    console.log(newClient)
    
    const clearMessage = () => {
        setMessage(undefined);
    }
    

  return (
    <div>
         <Container>
                <Row>
                    <Col className="text-center my-5">
                        <ClientFormComponent    handleSubmit = { handleSubmit }
                                                message = { message }
                                                match = {props.match}
                                                clearMessage = { clearMessage } />
                    </Col>
                </Row>
            </Container>
    </div>
  )
}


   

  

