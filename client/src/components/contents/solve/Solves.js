import React, { useState } from "react";
import Modal from "../../basic/Modal";

export default function Solves() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Solves</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Some Text
      </Modal>
    </div>
  );
}
