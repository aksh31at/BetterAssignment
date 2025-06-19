import React, { useState } from "react";
import { useNavigate } from "react-router";
const Card = ({ socket }) => {
  const [username, setusername] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    //sends the username and socket ID to the Node.js server
    socket.emit("newUser", { username, socketID: socket.id });
    navigate("/chat");
  };

  return (
    <div className=" bg-white w-72 h-80  rounded-lg">
      <div className=" text-center mt-4 font-bold text-xl">
        Chat With Randoms
      </div>
      <div className="flex flex-col  pt-8  items-center space-y-6 h-full ">
        <div className=" flex flex-col space-y-2">
          <div className=" text-slate-500">Enter Your Name</div>
          <input
            className=" border-2 p-1"
            type="text"
            placeholder="John"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-40 "
          >
            Join Chat Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
