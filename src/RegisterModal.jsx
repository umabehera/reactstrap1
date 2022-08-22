import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button ,ModalFooter, Modal, ModalBody, ModalHeader,Form ,FormGroup,Label,FormFeedback,FormText,Input} from 'reactstrap';
import React,{useState,useEffect} from 'react';
import { Component } from 'react';
import Swal from "sweetalert2";




function RegisterModal() {
    const [email,setEmail] = useState('');
    const [password,setpassWord] = useState('');
    const [modal,setModal] = useState(false);
    const [uniqueEmail,setuniqueEmail] = useState(true);
    const [confirmPassword,setconfirmPassWord] = useState('');
    // const [phoneNumber,setphoneNumber] = useState();
    const [errors,setErrors]=useState('');

    const [passerrors,setpasserrors] = useState('');
    function toggle() {
        setModal(!modal);
      }
      function validateEmail(){
      
      }
      function validatePassword(e){
        // console.log(confirmPassword);
        
        
      }
      function register(e){
        e.preventDefault();
        // console.log('sss');
        if(password.length <1){
          setpasserrors('Enter a password');
          return;}
          else if(password !== confirmPassword){
          setpasserrors('Confirm Password does not match');
          return;
          }
          else
          setpasserrors(null);
          const emailRex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          var myList = JSON.parse(localStorage.getItem("users", "[]")) || [];
          // console.log(myList);
          const found = false;
          // console.log(found);
          // if (searchIndex == -1)
          //       setuniqueEmail(true);
    
          
        
        
            
            if (!emailRex.test(email)) {
            setErrors('Email is invalid');
            return;
            }
           
    
            else if(email.length<1){
            setErrors('Enter an email');
            return;
            }
             else {
            setErrors(null);
    
            }
        var myList = JSON.parse(localStorage.getItem("users", "[]")) || [];
        const searchIndex = myList.findIndex((user) => user.email==email);
        if(searchIndex != -1){
          setErrors('Email exists');
          return('emailexists');
          }
        if(errors == null && passerrors == null && searchIndex==-1){
            var newUser = {email:email,
                password:password};

            myList.push(newUser);
            localStorage.setItem("users", JSON.stringify(myList));
            console.log('register');
            setEmail('');
            setpassWord('');
            setconfirmPassWord('');
            Swal.fire({
              title: 'Success',
              text: "New User Created",
              icon: "success",
              confirmButtonText: "OK",
          });
            toggle();
          }
          else
          alert('There was some error.Try again');

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
            <Form className="form" onSubmit={(e)=>{register(e)}}>
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
            {/* <input type="submit" value="submit"/> */}
            <Button type='submit' color="primary">Submit</Button>


        </Form>
            </ModalBody>
            <ModalFooter>
             
              <Button color="secondary" onClick={toggle}>CLose</Button>
            </ModalFooter>
          </Modal>
          
        </div>
      );
    

}
export default RegisterModal;
