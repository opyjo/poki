import React, { useState, useEffect } from "react";

const Form = ({ onSubmit }) => {
  const userInfo = {
    firstName: " ",
    lastName: " ",
    PhoneNumber: " ",
    email: " ",
  };

  const [user, setUser] = useState(userInfo);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //This code ensures that the user data will persist after the page is refreshed or the user navigates away from the page. This is done by using the useEffect hook. The useEffect hook is used to run a piece of code on a specific event. In this case, the useEffect hook is used to run the code on the componentDidMount event. The code in the useEffect hook will run when the component is mounted. The code in the useEffect hook will run every time the component is rendered.
  useEffect(() => {
    const data = localStorage.getItem("savedUser");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  // This code saves the user data into the local storage. By using useEffect, it will save the data every time the user changes the data.
  useEffect(() => {
    localStorage.setItem("savedUser", JSON.stringify(user));
  }, [user]);

  const onSubmitHandler = (e) => {
    e.preventDefault(); // preventDefault() prevents the page from refreshing when the form is submitted
    onSubmit(user);
  };

  return (
    <div>
      <div className="block p-6 rounded-lg shadow-lg bg-white  flex items-center justify-center h-screen bg-indigo-400">
        <form>
          <div className="form-group ">
            <label className="form-label inline-block mb-2 text-gray-700">
              First Name
            </label>
            <span style={{ color: "red" }}>*</span>
            <input
              value={user.firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="form-group ">
            <label className="form-label inline-block mb-2 text-gray-700">
              LastName
            </label>
            <span style={{ color: "red" }}>*</span>
            <input
              value={user.lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="form-group ">
            <label className="form-label inline-block mb-2 text-gray-700">
              Phone Number
            </label>
            <span style={{ color: "red" }}>*</span>
            <input
              value={user.PhoneNumber}
              name="PhoneNumber"
              onChange={handleInputChange}
              type="tel"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Address
            </label>
            <span style={{ color: "red" }}>*</span>
            <input
              value={user.email}
              name="email"
              onChange={handleInputChange}
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword1"
              required
            />
          </div>
          <h5>Select your favorite pokemon before submiting</h5>
          <div></div>
          <button
            onClick={onSubmitHandler}
            type="submit"
            className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
               active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Review your details
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
