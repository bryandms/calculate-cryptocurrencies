import React from "react";

const Error = ({ message }) => {
  return (
    <p className="p-4 text-3xl uppercase font-bold text-center bg-red-500 text-white">
      {message}
    </p>
  );
};

export default Error;
