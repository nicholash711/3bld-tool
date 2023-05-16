import React, { useEffect, useState } from "react";
import "./Solves.css";
import Modal from "../../basic/modal/Modal";
import config from "../../../config/config";

export default function Solves() {
  const [isOpen, setIsOpen] = useState(false);
  const [solves, setSolves] = useState(null);

  const api = config.api_url;

  useEffect(() => {
    if (isOpen) {
      fetch(`${api}/solves`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setSolves(data.solves);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isOpen, api]);

  const copyScramble = (scramble) => {
    navigator.clipboard.writeText(scramble);
  };

  const deleteSolve = (id) => {
    console.log(`deleting solve with id ${id}`);
    fetch(`${api}/solves/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSolves(data.solves);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="view-solves">
      <div className="solves-button" onClick={() => setIsOpen(true)}>
        Solves
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Solves</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>#</th>
              <th>Time</th>
              <th>Date</th>
              <th>Scramble</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {solves != null
              ? solves.map((solve, idx) => (
                  <tr key={idx}>
                    <td className="id">{idx}</td>
                    <td className="time">{solve.time}</td>
                    <td className="date">{solve.dateSolved}</td>
                    <td>
                      <p
                        onClick={() => copyScramble(solve.scramble)}
                        className="view-scramble"
                      >
                        Click to Copy
                        <span className="tooltip">{solve.scramble}</span>
                      </p>
                    </td>

                    <td>
                      <p
                        onClick={() => deleteSolve(solve._id)}
                        className="delete"
                      >
                        Delete
                      </p>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </Modal>
    </div>
  );
}
