import React from "react";

function SnackbarMessage({message, isOpen}) {
  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-green-500 text-white p-3 rounded-lg shadow-lg">
        {message}
      </div>
    </div>
  );
}

export default SnackbarMessage;
