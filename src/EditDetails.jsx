import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button ,ModalFooter, Modal, ModalBody, ModalHeader,Form ,FormGroup,Label,FormFeedback,FormText,Input} from 'reactstrap';
import React,{useState,useEffect} from 'react';
import { Component } from 'react';

function EditDetails(props){
    // console.log(Users);
    const [modal,setModal] = useState(false);
    function toggledetails() {
        setModal(!modal);
      }
      return (
        <div>
          <Button color="danger" onClick={toggledetails}>Edit</Button>
          <Modal isOpen={modal} toggle={toggledetails}>
            <ModalHeader toggle={toggledetails}>{props.user.username}</ModalHeader>

            <ModalBody>
           <div>
                <p>{props.user.username}</p>



           </div>
            </ModalBody>
            <ModalFooter>
             
              <Button color="secondary" onClick={toggledetails}>CLose</Button>
            </ModalFooter>
          </Modal>
          
        </div>
      );

}

export default EditDetails; 