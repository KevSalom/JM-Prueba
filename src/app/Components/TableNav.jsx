"use client";
import { useState } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const TableNav = ({ handleChange }) => {
  const [selectedButton, setselectedButton] = useState("down");

  const handleButtonClick = (direction) => {
    setselectedButton(direction);
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <div className="flex gap-1 mb-2 mt-4">
        <button
          className={` text-xl p-1 rounded-md ${
            selectedButton === "down"
              ? "bg-gray-800 text-gray-50"
              : "bg-gray-400 text-gray-50"
          }`}
          onClick={() => {
            handleButtonClick("down");
            handleChange("desc");
          }}
        >
          <BsArrowDownShort />
        </button>

        <button
          className={` text-xl p-1 rounded-md ${
            selectedButton === "up"
              ? "bg-gray-800 text-gray-50"
              : "bg-gray-400 text-gray-50"
          }`}
          onClick={() => {
            handleButtonClick("up");
            handleChange("asc");
          }}
        >
          <BsArrowUpShort />
        </button>
      </div>
    </div>
  );
};

export default TableNav;
