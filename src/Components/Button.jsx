/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="flex justify-center items-center">
      <Link to="/scanning">
        <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
      </Link>
    </div>
  );
}

export default Button;
