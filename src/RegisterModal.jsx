import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button ,ModalFooter, Modal, ModalBody, ModalHeader,Form ,FormGroup,Label,FormFeedback,FormText,Input} from 'reactstrap';
import React,{useState} from 'react';
import { Component } from 'react';

function RegisterModal() {
    const [email,setEmail] = useState();
    const [password,setpassWord] = useState('');
    const [modal,setModal] = useState(false);
    const [uniqueEmail,setuniqueEmail] = useState(false);

    const [confirmPassword,setconfirmPassWord] = useState('');
    // const [phoneNumber,setphoneNumber] = useState();
    const [errors,setErrors]=useState('');
    const [passerrors,setpasserrors] = useState('');
    function toggle() {
        setModal(!modal);
      }
      function validateEmail(){
      const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let myList = JSON.parse(localStorage.getItem("users", "[]")) || [];
      myList.forEach(element => {
          if(email==element.email){
            // alert('already exists');
            setErrors('Email exists');

        //   return false;
          }


      });
      
      
    
    
        
        if (!emailRex.test(email)) {
        setErrors('Email is invalid');
        }
        else if(email.length<1){
        setErrors('Enter an email');
        }
         else {
        setErrors(null);

        }
      }
      function validatePassword(e){
        // console.log(confirmPassword);
        if(password.length <1)
        setpasserrors('Enter a password');
        else if(password !== confirmPassword)
        setpasserrors('Confirm Password does not match');
        else
        setpasserrors(null);
        
      }
      function register(){
        validatePassword();
                validateEmail();
        if(errors == null && passerrors == null){
            var newUser = {email:email,
                password:password};
            let myList = JSON.parse(localStorage.getItem("users", "[]")) || [];
            myList.push(newUser);
            localStorage.setItem("users", JSON.stringify(myList));
            console.log('register');
          }

        }
        // console.log(errors,passerrors);
        
    return (
        <div>
          <Button color="danger" onClick={toggle}>Register</Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Register</ModalHeader>
        <span style={{color:'red'}}>{errors}<br/>
        {passerrors}</span>

            <ModalBody>
            <Form className="form">
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="example@example.com"
                invalid={errors != null}
                value={email}
                onChange={(e) => 
                    setEmail(e.target.value)
                  }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={password}
                onChange={(e)=>
                    setpassWord(e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Confirm Password</Label>
              <Input
                type="password"
                name="passwordconfirmation"
                id="examplePasswordConfirmation"
                placeholder="********"
                value={confirmPassword}
                invalid={passerrors != null}
                onChange={(e) => {                    
                 setconfirmPassWord(e.target.value);
                }}
              />
            </FormGroup>
        </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={()=>{
                
                register();
              }}>Register</Button>{' '}
              <Button color="secondary" onClick={toggle}>Login</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    

}
export default RegisterModal;
