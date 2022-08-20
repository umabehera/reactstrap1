import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ModalFooter, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, FormFeedback, FormText, Input } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import Swal from "sweetalert2";
function DeleteUser(props) {
    const deleteCurrentUser = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                var myList = JSON.parse(localStorage.getItem("apidata", "[]"));
                console.log(myList);
                const searchIndex = myList.findIndex((user) => props.id == user.id);
                console.log(searchIndex);
                myList.splice(searchIndex, 1);
                console.log(myList);
                localStorage.setItem("apidata", JSON.stringify(myList));
                props.setData(myList);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })




    };
    return (
        <div>
            <Button color="danger" onClick={deleteCurrentUser}>Delete</Button>
        </div>

    )
}
export default DeleteUser;
