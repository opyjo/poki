import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Review = ({ reviewObject, pokemon }) => {
  const navigate = useNavigate();

  // This code creates the toast notification when the user submits the form.
  const notify = () => toast("Submission Saved Successfully!");

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-indigo-200 ">
      <h1 className="text-4xl">Kindly reconfirm your details</h1>
      <div className="flex flex-col justify-center items-center ">
        <div className="p-6">
          <h5 className="text-gray-900 text-lg font-small mb-2">
            Your First Name:{reviewObject.firstName}
          </h5>
          <h5 className="text-gray-900 text-lg font-small mb-2">
            Your Last Name:{reviewObject.lastName}
          </h5>
          <h5 className="text-gray-900 text-lg font-small mb-2">
            Your Phone Number:{reviewObject.PhoneNumber}
          </h5>
          <h5 className="text-gray-900 text-lg font-small mb-2">
            Your Email Address:{reviewObject.email}
          </h5>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <div>
          <h1 className="text-gray-900 text-lg font-small mb-2">
            Your Pokemon: {pokemon.species.name}
          </h1>
        </div>
        <div>
          <img
            className="rounded-t-lg"
            src={pokemon.sprites.front_default}
            alt={pokemon.species.name}
          />
        </div>
      </div>
      <button
        onClick={notify}
        type="submit"
        className="px-6 py-2.5 bg-blue-600 text-white font-small text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
               active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Submit
      </button>
      <ToastContainer />
      <button
        onClick={() => navigate(-1)}
        type="submit"
        className=" mt-12 px-6 py-2.5 bg-blue-600 text-white font-small text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
               active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Register as a new user
      </button>
    </div>
  );
};

export default Review;
