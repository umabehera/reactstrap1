import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Modal, ModalBody, ModalHeader,Form ,FormGroup,Label,FormFeedback,FormText,Input} from 'reactstrap';
import React,{useState} from 'react';
import { Component } from 'react';
import RegisterModal from './RegisterModal';
import { useNavigate } from 'react-router-dom';







function App() {
  var[email,setEmail] = useState();
  var[password,setpassWord] = useState();
  var[errors,setErrors]=useState('');
  var[passerrors,setpasserrors] = useState();
  let navigate=useNavigate();

  function login(){
    if(!errors){
      let myList = JSON.parse(localStorage.getItem("users", "[]")) || [];
    // let uniqueEmail = true;
    myList.forEach(element => {
        if(email==element.email && password==element.password){
        console.log('user exist and password matches');
        navigate('/dashboard');
        }
        
    });
    }
   
    // console.log('logged in');
  }
  function validateEmail() {
      const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let myList = JSON.parse(localStorage.getItem("users", "[]")) || [];
      let uniqueEmail = true;
      let wrongpass = false;
      myList.forEach(element => {
          if(email==element.email){
          uniqueEmail=false;
          if(element.password != password){
            wrongpass =true;


          }
        }

      });

      
    
    
    
    if (!emailRex.test(email)) {
      setErrors('Email is invalid');
    }
    else if(uniqueEmail==true)
    setErrors('User does not exist');
    else if(wrongpass==true)
    setErrors('Password is incorrect');

     else {
      setErrors();

    }
    
    // console.log(email);
    
    }
    function validatePass(){
      console.log('ss');
    }

  return (
    
    <div className="App">
    
        <h2>Welcome to my Website</h2>
        <img src={require("./pic.png")} alt='logo'style={{maxWidth : '100px'}}/>
        <h5>Sign in to continue</h5>
        <span style={{color:'red'}}>{errors}</span>
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
              value={email}
              invalid={errors != null}
              onChange={(e)=>setEmail(e.target.value)}
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
              invalid={passerrors != null}
              onChange={(e) => setpassWord(e.target.value)}
            />
          </FormGroup>
        <Button onClick={(e)=>{validateEmail();
        login();}}>Login</Button>
      </Form>
      <RegisterModal/>
    </div>
  );
}

export default App;
