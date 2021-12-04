import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LocalTunnel from "./LocalTunnel";
import ListTunnels from "./ListTunnels";
import RemoteTunnel from "./RemoteTunnel";

function Card({imgsrc, title, text, buttonText, goto, action}) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt={imgsrc} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {text}
            </p>
            <div className="mt-3">
              <NavLink to={goto} className="btn btn-outline-primary btn-get-started">{buttonText}</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
