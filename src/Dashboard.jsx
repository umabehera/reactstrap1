import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ModalFooter, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, FormFeedback, FormText, Input } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import DetailsPage from './DetailsPage';
import EditDetails from './EditDetails';




function Dashboard() {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [editdata, setEditData] = useState({
        index: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        name: '',
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

    });
    // function timeout(delay: number) {
    //     return new Promise( res => setTimeout(res, delay) );
    // }
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setData(json);
                console.log(json);
            })

    };
    function toggledetails() {
        setModal(!modal);
    }
    function savechanges(e) {
        e.preventDefault();
        data[0].username = 'uma';
        console.log(data);
        setData(data);
        console.log('hi');
    }
    useEffect(() => {
        fetchData();

    }, []);
    // timeout(1000);
    // console.log(data);
    return (
        <>

            <div className='dashboard'>
                <h1 style={{ color: 'blue' }}>Welcome to the Dashboard Page</h1>
                <Row>
                    {
                        data.length > 0 && data.map((item) => (
                            <Col sm="4">
                                <Card body style={{ marginBottom: '20px' }}>
                                    <CardTitle>User_Name: {item.username}</CardTitle>
                                    <CardText>Full_Name: {item.name}User_Email: {item.email}</CardText>
                                    <DetailsPage username={item.username} email={item.email}
                                        address={item.address}
                                        company={item.company}
                                        website={item.website}
                                        phone={item.phone}
                                    />
                                    <EditDetails user={item}/>

                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )
}
export default Dashboard;