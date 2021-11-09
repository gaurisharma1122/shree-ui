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
       para="Shree exposes your local server to the public internet over secured tunnels"
       additional="?"
       visit="/contact"
       btname="Contact Now" />
      </>
    );
  }
  
  export default About;