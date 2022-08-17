import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button ,ModalFooter, Modal, ModalBody, ModalHeader,Form ,FormGroup,Label,FormFeedback,FormText,Input} from 'reactstrap';
import React,{useState,useEffect} from 'react';
import { Component } from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';




function Dashboard(){
    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }
    const [data,setData]=useState();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setData(json))
        }, []);
        await timeout(1000);
        // console.log(data);
    return(
        <>
        
            <div className='dashboard'>
            <h1 style={{color:'blue'}}>Welcome to the Dashboard Page</h1>
            <Row>
            {
                data.map((item) => ( 
                    <Col sm="4">
                        <Card body style={{marginBottom:'20px'}}>
                        <CardTitle>User_Name: { item.username }</CardTitle>
                        <CardText>Full_Name: { item.name }User_Email: { item.email }</CardText>
                        <Button>Detail Page of user : {item.id}</Button>
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