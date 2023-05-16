import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ open, onClose, children }) {
  return open
    ? ReactDOM.createPortal(
        <>
          <div className="background" onClick={onClose}></div>
          <div className="modal">
            <button onClick={onClose}>Close</button>
            {children}
          </div>
        </>,
        document.getElementById("portal")
      )
    : null;
}
