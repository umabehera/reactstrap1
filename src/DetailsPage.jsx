import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ModalFooter, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, FormFeedback, FormText, Input } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { Component } from 'react';

function DetailsPage(props) {
  const [modal, setModal] = useState(false);
  function toggledetails() {
    setModal(!modal);
  }
  return (
    <div>
      <div className='col mb-4'>

        <Button color="primary" onClick={toggledetails}>Show</Button>
      </div>
      <Modal isOpen={modal} toggle={toggledetails}>
        <ModalHeader toggle={toggledetails}>{props.username}</ModalHeader>

        <ModalBody>
          <div>
            <p>E-Mail : {props.email}</p>
            <p>Phone Number : {props.phone}</p>
            <p>Address : {props.address.city}</p>
            <p>Company : {props.company.name}</p>
            <p>Wesbite : {props.website}</p>




          </div>
        </ModalBody>
        <ModalFooter>

          <Button color="secondary" onClick={toggledetails}>CLose</Button>
        </ModalFooter>
      </Modal>

    </div>
  );

}

export default DetailsPage; 