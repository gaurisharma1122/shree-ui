import React, { useState } from "react";
function Contact() {

  /*const [data, setData] = useState({
    fullname:"",
    email:"",
    msg:""
  });

  const InputEvenet = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name] : value,
      };

    });
    
  };

  const formSubmit = () => {

  };*/
    return (
      <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlEmail" class="form-label">Email</label>
                <input 
                type="text" 
                class="form-control" 
                id="exampleFormControlEmail" 
                /*name="fullname"
                value={data.fullname}
                onChange={InputEvent}*/
                placeholder="Enter your email" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlUsername" class="form-label">Username</label>
                <input 
                type="email" 
                class="form-control" 
                id="exampleFormControlUsername"
                /*name="email"
                value={data.email}
                onChange={InputEvent}*/
                placeholder="Enter your username" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlPassword" class="form-label">Password</label>
                <input 
                type="password"
                class="form-control" 
                id="exampleFormControlPassword" 
                
                /*name="msg"
                value={data.msg}
                onChange={InputEvent}*/
                ></input>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit"> Submit Form</button>

              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Contact;