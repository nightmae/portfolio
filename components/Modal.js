import { useState } from "react";
import styles from '../styles/Animation.module.css'

const Modal = ({ isOpen, onClose }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    
    <div className={`fixed inset-0 ${isOpen ? "visible" : "hidden"}`}>
      <div className="modal-overlay" onClick={handleBackdropClick}>
        <div className="modal-content">
          <div
            className={`fixed inset-0 flex items-center justify-center ${
              isOpen ? "visible" : "hidden"
            }`}
          >
            <div className="mainBG w-alt h-52 p-6 rounded-lg shadow-xl w-full ring-1 ring-white" id={styles.modal}>
              <button className="absolute top-0 right-0 p-2" onClick={onClose}>
                <svg
                  className="h-6 w-6 text-gray-600 hover:text-gray-800 transition"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <h2 className="text-xl font-semibold mb-2">Service Not Available!</h2>
              <p className="text-gray-600">This service is currently not available!</p>
              <p className="text-gray-600 -mt-2">Either that, or it's currently not available in your country, or you are on a mobile device (not supported yet).</p>
              <div>
            <button className="p-4 bg-red-600 w-48 text-white rounded-xl shadow-md mt-4 hover:bg-red-800 transition-colors duration-200"
            onClick={onClose}
            >Close</button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
