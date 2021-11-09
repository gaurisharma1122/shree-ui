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
                <label for="exampleFormControlInput1" class="form-label">Enter Your Name</label>
                <input 
                type="text" 
                class="form-control" 
                id="exampleFormControlInput1" 
                /*name="fullname"
                value={data.fullname}
                onChange={InputEvent}*/
                placeholder="Write your name here..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input 
                type="email" 
                class="form-control" 
                id="exampleFormControlInput1"
                /*name="email"
                value={data.email}
                onChange={InputEvent}*/
                placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                /*name="msg"
                value={data.msg}
                onChange={InputEvent}*/
                ></textarea>
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