import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./styles/Button.styled";
import "./Modal.css";

export default function Modal({ open, onClose, children }) {
  return open
    ? ReactDOM.createPortal(
        <>
          <div className="background" onClick={onClose}></div>
          <div className="modal">
            <Button onClick={onClose}>&times;</Button>
            {children}
          </div>
        </>,
        document.getElementById("portal")
      )
    : null;
}
