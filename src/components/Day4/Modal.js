import React, { useState } from "react";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="button-funny" onClick={openModal}>
        Open Modal
      </button>

      {isModalOpen && (
        <div className="Modal">
          <p>Yo this is a modal tur tur tur</p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default Modal;
