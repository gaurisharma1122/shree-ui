import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/img1.svg";
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
        name="Get your connection secured with "
        imgsrc={web}
        para="we are here for tunneling"
        visit="/about"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
