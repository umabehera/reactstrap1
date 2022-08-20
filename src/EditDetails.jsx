import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ModalFooter, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, FormFeedback, FormText, Input } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { Component } from 'react';

function EditDetails(props) {
  


  // props.setEditData(myList[searchIndex]);
  // props.setEditData(myList[searchIndex]);

  // console.log(props.editdata);
  // console.log(props.user);
 
  

  return (
    <div>
      {/* <Button color="danger" onClick={toggledetails}>Edit</Button> */}
      <Modal isOpen={props.modal} toggle={()=>{
        props.setModal(!props.modal)
      }}>
        <ModalHeader toggle={()=>{
        props.setModal(!props.modal)
      }}>{props.user.id?'Edit':'Create'} Details</ModalHeader>

        <ModalBody>
        <div className='inputErrors'>{props.inputErrors}</div>
          <Form className="form uma" onSubmit={(e) => props.savedata(e,props.user.id)} >
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.name}
                onChange={(e) =>
                  props.setEditData({ ...props.user, name: e.target.value })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.username}
                onChange={(e) =>
                  props.setEditData({ ...props.user, username: e.target.value })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.email}
                onChange={(e) =>
                  props.setEditData({ ...props.user, email: e.target.value })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Phone</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.phone}
                onChange={(e) =>
                  props.setEditData({ ...props.user, phone: e.target.value })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Website</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.website}
                onChange={(e) =>
                  props.setEditData({ ...props.user, website: e.target.value })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Company Name</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.company.name}
                onChange={(e) =>
                  props.setEditData({ ...props.user, company: { ...props.user.company, name: e.target.value } })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Company BS</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.company.bs}
                onChange={(e) =>
                  props.setEditData({ ...props.user, company: { ...props.user.company, bs: e.target.value } })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Company CatchPhrase</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.company.catchPhrase}
                onChange={(e) =>
                  props.setEditData({ ...props.user, company: { ...props.user.company, catchPhrase: e.target.value } })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">City</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.address.city}
                onChange={(e) =>
                  props.setEditData({ ...props.user, address: { ...props.user.address, city: e.target.value } })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Zipcode</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.address.zipcode}
                onChange={(e) =>
                  props.setEditData({ ...props.user, address: { ...props.user.address, zipcode: e.target.value } })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Street</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.address.street}
                onChange={(e) =>
                  props.setEditData({ ...props.user, address: { ...props.user.address, street: e.target.value } })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Suite</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.address.suite}
                onChange={(e) =>
                  props.setEditData({ ...props.user, address: { ...props.user.address, suite: e.target.value } })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Latitude</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.address.geo.lat}
                onChange={(e) =>
                  props.setEditData({ ...props.user, address: { ...props.user.address, geo: {...props.user.address.geo , lat :e.target.value }} })

                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Longitude</Label>
              <Input
                type="text"
                name="username"
                defaultValue={props.user.address.geo.lng}
                onChange={(e) =>
                  props.setEditData({ ...props.user, address: { ...props.user.address, geo: {...props.user.address.geo , lng :e.target.value }} })
                }
              />
            </FormGroup>
            <Button type='submit' color="primary">Submit</Button>


          </Form>
        </ModalBody>
        <ModalFooter>

          <Button color="secondary" onClick={()=>{
            props.setModal(false);
          }}>Close</Button>
        </ModalFooter>
      </Modal>

    </div>
  );

}

export default EditDetails; 