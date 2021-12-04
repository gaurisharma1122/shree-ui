import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LocalTunnel from "./LocalTunnel";
import ListTunnels from "./ListTunnels";
import RemoteTunnel from "./RemoteTunnel";

function Card({imgsrc, title, text, buttonText, goto, action}) {
  /*
 const [openModal, setopenModal] = useState(false);
  let ModalBox;
  switch(action){
    case 'local_tunnel': ModalBox=<LocalTunnel />; break;
    case 'remote_tunnel': ModalBox= RemoteTunnel; break;
    case 'list_tunnel': ModalBox= ListTunnels; break;
  }*/
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt={imgsrc} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {text}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="mt-3">
              <NavLink to="/localTunnel" className="btn btn-outline-primary btn-get-started">{buttonText}</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
