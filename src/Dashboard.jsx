import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ModalFooter, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, FormFeedback, FormText, Input } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import DetailsPage from './DetailsPage';
import EditDetails from './EditDetails';
import DeleteUser from './Delete';
import Swal from "sweetalert2";
import { NavLink } from 'react-router-dom';



function Dashboard() {
    let blankUser = {
        id:'',
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        },
        address: {
            street: '',
            zipcode: '',
            suite: '',
            geo: {
                lat: '',
                lng: ''
            }
        },

    }

    const [inputErrors, setInputErrors] = useState('');
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [editdata, setEditData] = useState(blankUser);
    // function timeout(delay: number) {
    //     return new Promise( res => setTimeout(res, delay) );
    // }
    const validateInput = () => {
        // e.preventDefault();
        var iper = 0;

        // console.log(document.querySelectorAll('input'));
        document.querySelectorAll('.uma input').forEach(function () {
            console.log(document.querySelector('.uma input').value);
            if (document.querySelector('.uma input').value === '')
                iper = 1;
            else
                iper = 0;

        });
        if (iper == 1) {
            setInputErrors('Please Enter All the fields');
            alert('error please fill all fields!');
        }
        else
            setInputErrors('')


    };
    const fetchData = () => {
        var myList = JSON.parse(localStorage.getItem("apidata", "[]")) || [];
        if (myList.length <= 0) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    setData(json);
                    // console.log(json);
                    localStorage.setItem("apidata", JSON.stringify(json));

                })
        }
        else {
            setData(myList);
        }

    };
    // console.log(editdata);
    function toggledetails() {
        setModal(!modal);
    }
    function savechanges(e) {
        e.preventDefault();
        data[0].username = 'uma';
        // console.log(data);
        setData(data);
        // console.log('hi');
    }
    useEffect(() => {
        fetchData();

    }, []);
    function toggledetails(index) {
        let singleData = data[index];
        setEditData(singleData);
        setModal(!modal);

        // var myList = JSON.parse(localStorage.getItem("apidata", "[]"));
        // const searchIndex = myList.findIndex((user) => props.user.id == user.id);
        // props.setEditData(myList[searchIndex]);
        // props.setData(myList);

    }
    function createUser() {
        setEditData(blankUser);
        setModal(!modal);


    }
    function saveData(e, index) {
        e.preventDefault();
        validateInput();
        var searchIndex=0;
        var message = '';
        if (inputErrors == '') {
            var myList = JSON.parse(localStorage.getItem("apidata", "[]"));
            if (index) {
                searchIndex = myList.findIndex((user) => index == user.id);
            }
            else{
                searchIndex = myList.length;
            }
            var id = index ? index : myList.length;
            if (id == myList.length){
                message = 'User Created Successfully';
                id++;
            }

            else
                message = 'User Edited';
            console.log(id);
            console.log(editdata);

            console.log(searchIndex);
            myList[searchIndex] = editdata;
            myList[searchIndex].id = id;
            console.log(myList);
            setData(myList);
            // const searchIndex = myList.findIndex((user) => props.user.id==user.id);
            // console.log(editdata.id);
            // console.log(myList);
            localStorage.setItem("apidata", JSON.stringify(myList));
            // setEditData(singleData);
            setModal(!modal);

            Swal.fire({
                title: 'Success',
                text: message,
                icon: "success",
                confirmButtonText: "OK",
            });

        }

    }
    // timeout(1000);
    // console.log(data);
    return (
        <>
            <div className='dashboard'>
                <h1 style={{ color: 'white' }}>Welcome to the Dashboard Page</h1>
                <NavLink to='/'>Logout</NavLink>
                <Button onClick={createUser} color='secondary' style={{ margin: '20px' }} >Create User</Button>
                <Row>
                    {
                        data.length > 0 && data.map((item, index) => (
                            <Col sm="4" key={index}>
                                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', marginBottom: '20px' }}>
                                    <CardTitle>User_Name: {item.username}</CardTitle>
                                    <CardText>Full_Name: {item.name}<br /> User_Email: {item.email}</CardText>
                                    <DetailsPage username={item.username} email={item.email}
                                        address={item.address}
                                        company={item.company}
                                        website={item.website}
                                        phone={item.phone}
                                    />

                                    <div className='col mb-4'>
                                        <Button onClick={() => {
                                            toggledetails(index);
                                        }} color="warning" >Edit</Button>
                                    </div>
                                    <div className='col mb-4'>

                                        <DeleteUser id={item.id} setData={setData} />
                                    </div>


                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <EditDetails validateInput={validateInput} savedata={saveData} modal={modal} user={editdata} setEditData={setEditData} setData={setData} setModal={setModal} inputErrors={inputErrors} />
            </div>
        </>
    )
}
export default Dashboard;