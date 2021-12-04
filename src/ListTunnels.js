import React from "react";
function ListTunnels() {
  
  return(
    <>
      <div className="my-5">
        <h1 className="text-center">List Tunnels</h1>
      </div>
      <div className="mx-5 my-5">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Source Port</th>
              <th scope="col">Destination Port</th>
              <th scope="col">Actions</th>
      
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Local</th>
              <td>Mark</td>
              <td>Otto</td>
             <td><button type="button" className="my-1 btn btn-primary">Disconnect</button></td>
            </tr>
            <tr>
              <th scope="row">Remote</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><button type="button" className="my-1 btn btn-primary">Disconnect</button></td>
            </tr>
            <tr>
              <th scope="row">Local</th>
              <td colspan="2">Larry the Bird</td>
              <td><button type="button" className="my-1 btn btn-primary">Disconnect</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
    
  );

}

export default ListTunnels;
