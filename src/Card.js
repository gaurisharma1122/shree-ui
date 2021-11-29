import React from "react";
import { useState } from "react";
import LocalTunnel from "./LocalTunnel";
import ListTunnels from "./ListTunnels";
import RemoteTunnel from "./RemoteTunnel";


function Card({imgsrc, title, text, buttonText, action}) {
  const [openModal, setopenModal] = useState(false);
  let ModalBox;
  switch(action){
    case 'local_tunnel': ModalBox=<LocalTunnel />; break;
    case 'remote_tunnel': ModalBox= RemoteTunnel; break;
    case 'list_tunnel': ModalBox= ListTunnels; break;
    
  }
  return (
    <>
    {ModalBox}
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt={imgsrc} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setopenModal(true);
                console.log('HELLO');
              }}
              data-bs-toggle="modal" data-bs-target="#exampleModal"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
