import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function LocalTunnel({ showModal, changeShowState }) {
  return(
    <>
      <div className="my-5">
        <h1 className="text-center">Create Local Tunnels</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="mb-3">
                <label for="exampleFormControlEmail" className="form-label">Source Port</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlEmail" 
                /*name="fullname"
                value={data.fullname}
                onChange={InputEvent}*/
                placeholder="Enter Source Port" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlUsername" className="form-label">Destination Port</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlUsername"
                /*name="email"
                value={data.email}
                onChange={InputEvent}*/
                placeholder="Enter Destination Port" />
              </div>
              <div className="my-4 col-12">
                <button type="button" className="btn btn-outline-primary">Create Tunnels</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
/*
  return(
    <Modal show={showModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create Local Tunnels</Modal.Title>
      </Modal.Header>

    <Modal.Body>
    <p>Modal body text goes here.</p>
    <div>
      <Row>
        <Form.Label column lg={2}>Source Port</Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Enter Source Port" />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={2}>Destination Port</Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Enter Destination Port" />
        </Col>
      </Row>
    </div>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onclick={()=>{changeShowState(false)}}>Close</Button>
    <Button variant="primary">Create</Button>
  </Modal.Footer>
</Modal>

  )*/
  
}

export default LocalTunnel;
