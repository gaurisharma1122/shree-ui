import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function RemoteTunnel({ showModal, changeShowState }) {

  return(

    <>
      <div className="my-5">
        <h1 className="text-center">Create Remote Tunnels</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              
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
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Create Remote Tunnels
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Source Port"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                Create Tunnels
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );*/
}

export default RemoteTunnel;
