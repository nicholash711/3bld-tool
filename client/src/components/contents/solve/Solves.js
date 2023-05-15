import React from "react";
import Popup from "reactjs-popup";

export default function Solves() {
  return (
    <div>
      <Popup trigger={<button>trigger</button>} modal nested>
        <span> Hello </span>
      </Popup>
    </div>
  );
}
