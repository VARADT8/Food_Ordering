import "./Modal.css";
import Reactdom from "react-dom";
import React from "react";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>;
    </div>
  );
};
const overlayfragment = document.getElementById("overlay-root");

const Modal = (props) => {
  return (
    <React.Fragment>
      {Reactdom.createPortal(
        <BackDrop onClose={props.onClose} />,
        overlayfragment
      )}
      {Reactdom.createPortal(
        <Overlay>{props.children}</Overlay>,
        overlayfragment
      )}
    </React.Fragment>
  );
};
export default Modal;
