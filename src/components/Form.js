import React, { useState, useEffect } from "react";

const Form = ({ onSubmit }) => {
  const initialValues = {
    firstName: " ",
    lastName: " ",
    phoneNumber: " ",
    address: " ",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //here we use the spread operator to generate a new form value by adding the names and values of each of the input element.
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  //This code ensures that the user data will persist after the page is refreshed or the user navigates away from the page. This is done by using the useEffect hook. The useEffect hook is used to run a piece of code on a specific event. In this case, the useEffect hook is used to run the code on the componentDidMount event. The code in the useEffect hook will run when the component is mounted. The code in the useEffect hook will run every time the component is rendered.
  useEffect(() => {
    const data = localStorage.getItem("savedUser");
    if (data) {
      setFormValues(JSON.parse(data));
    }
  }, []);

  // This code saves the user data into the local storage. By using useEffect, it will save the data every time the user changes the data.
  useEffect(() => {
    localStorage.setItem("savedUser", JSON.stringify(formValues));
  }, [formValues]);

  return (
    <div>
      <div className="block p-6 rounded-lg shadow-lg bg-white  flex items-center justify-center h-screen bg-indigo-400">
        <form onSubmit={onSubmitHandler}>
          <h1 className="text-4xl">Registration Form</h1>
          <div className="form-group ">
            <label
              htmlFor="firstName"
              className="form-label inline-block mb-2 text-gray-700"
            >
              First Name
            </label>
            <span className="text-red-500">*</span>
            <input
              onChange={handleInputChange}
              value={formValues.firstName}
              name="firstName"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="firstName"
              required
              aria-required="true"
              placeholder="First name"
            />
          </div>
          <div className="form-group ">
            <label
              htmlFor="lastName"
              className="form-label inline-block mb-2 text-gray-700"
            >
              LastName
            </label>
            <span className="text-red-500">*</span>
            <input
              onChange={handleInputChange}
              value={formValues.lastName}
              name="lastName"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="lastName"
              required
              aria-required="true"
              placeholder="Last name"
            />
          </div>
          <div className="form-group ">
            <label
              htmlFor="phoneNumber"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Phone Number
            </label>
            <span className="text-red-500">*</span>
            <input
              onChange={handleInputChange}
              value={formValues.phoneNumber}
              name="phoneNumber"
              type="tel"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="phoneNumber"
              required
              aria-required="true"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="email"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Address
            </label>
            <span className="text-red-500">*</span>
            <input
              onChange={handleInputChange}
              value={formValues.address}
              name="address"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              required
              aria-required="true"
              placeholder="Address"
            />
          </div>
          <div>
            <p>Select your favorite pokemon before submiting</p>
          </div>
          <button
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
