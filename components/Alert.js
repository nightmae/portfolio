import React, { useState } from 'react';
import styles from '../styles/Animation.module.css'

const Alert = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return isVisible ? (
    <div
      className={`bg-yellow-500 p-4 shadow-xl rounded-xl text-black relative top-12 flex flex-row h-16 text-center justify-center items-center`}
      id={styles.alert}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-10 w-10 relative -left-4"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>
        I will be inactive starting around ~September due to school, contact will be limited.
      </span>
      <button
        onClick={handleClose}
        className="absolute right-4 bg-yellow-700 text-black p-3 shadow-md rounded-xl hover:bg-yellow-800 transition-colors duration-200"
      >
        Close
      </button>
    </div>
  ) : null; // Return null when not visible
};

export default Alert;
