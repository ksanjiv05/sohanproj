import React, { useState } from "react";

const Register = () => {
  const [course, setCourse] = useState({
    name: "",
    father: "",
    class: "",
    contactyour: "",
    contactfather: "",
  });
  // const handelChange = (event) => {
  //   console.log(event.target.value);
  //   let obj = {
  //     [event.target.value]: event.target.value,
  //   };
  //   console.log(obj);
  // };

  const handelChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setCourse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handelSubmit = () => {
    console.log(course);
    fetch("/mail", {
      method: "POST",
      body: JSON.stringify(course), // The data
      headers: {
        "Content-type": "application/json", // The type of data you're sending
      },
    }).then((res) => {
      console.log(res);
    });
    alert("submit");
  };
  return (
    <div>
      <form onSubmit={handelSubmit} className="reg-form">
        <div className="form-group">
          <label>Name of Student :</label>
          <input
            name="name"
            type="text"
            className="form-control custom-input"
            onChange={(event) => handelChange(event)}
            required
          />
        </div>
        <div className="form-group">
          <label>Name of Father :</label>
          <input
            name="father"
            type="text"
            className="form-control custom-input"
            onChange={(event) => handelChange(event)}
          />
        </div>
        <div className="form-group">
          <label>Contact Number :</label>
          <input
            name="contactyour"
            type="text"
            className="form-control custom-input"
            onChange={(event) => handelChange(event)}
            required
          />
        </div>
        <div className="form-group">
          <label>Father Contact :</label>
          <input
            name="contactfather"
            type="text"
            className="form-control custom-input"
            onChange={(event) => handelChange(event)}
          />
        </div>
        <div className="form-group">
          <label>Select list :</label>
          <select
            className="form-control custom-input"
            name="class"
            onChange={(event) => handelChange(event)}>
            <option selected disabled>
              select class ....
            </option>
            <option value="five">class five (5th)</option>
            <option value="six">class six (6th)</option>
            <option value="seven">class seven (7th)</option>
            <option value="eight">class eight (8th)</option>
            <option value="nine">class nine (9th)</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-success form-control custom-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
