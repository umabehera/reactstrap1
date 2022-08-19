import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ModalFooter, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, FormFeedback, FormText, Input } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { Component } from 'react';
function DeleteUser(props) {
    const deleteCurrentUser = () => {
        "return confirm('Are you sure you want to delete this item?');"
        var myList = JSON.parse(localStorage.getItem("apidata", "[]"));
        console.log(myList);
        const searchIndex = myList.findIndex((user) => props.id == user.id);
        console.log(searchIndex);
        myList.splice(searchIndex, 1);
        console.log(myList);
        localStorage.setItem("apidata", JSON.stringify(myList));
        props.setData(myList);


    };
    return (
        <div>
            <Button color="danger" onClick={deleteCurrentUser}>Delete</Button>
        </div>

    )
}
export default DeleteUser;