import React, { useState } from "react";


export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        App Info Ver 1.0
      </button>

      {showModal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello World</h2>
            <p>
            This is my Full Stack Restaurant Application Project built with Next.js and React Captsone Project.  For more information
            please see the details in the footer.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}