import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import web from "../src/images/img4.jpg";
import Common from "./Common";
function About() {
    return (
      <>
      <Common 
       name="What is "
       imgsrc={web} 
       para="Shree exposes your local server to the public internet over secured tunnels by creating an encrypted SSH connection between a client and a server machine through which services ports can be relayed. It is an easy interface to expose HTTP/HTTP(s) endpoints over Internet/Intranet."
       additional="?"
       visit="/service"
       btname="Get me in" />
      </>
    );
  }
  
  export default About;