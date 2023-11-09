import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/Todoslice";
import { Link, useNavigate } from "react-router-dom";
import "../styles/addEdit.css";
const AddEdit = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
  });
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { name, email, phone, status } = state;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !status) {
      alert("Please Enter Input !!!");
    } else {
      dispacth(addContact(state));
      navigate(`/`);
    }
  };
  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        {/* NAME */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name ..."
          value={name || ""}
          onChange={handleInputChange}
        />
        {/* EMAIL */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email ..."
          value={email || ""}
          onChange={handleInputChange}
        />
        {/* PHONE */}
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Your Contact No ..."
          value={phone || ""}
          onChange={handleInputChange}
        />
        {/* STATUS */}
        <label htmlFor="status">Status</label>
        <select
          className="dropdown"
          name="status"
          onChange={handleDropdownChange}
        >
          <option>Please Select Status</option>
          <option value="Active" selected={status === "Active" ? status : ""}>
            Active
          </option>
          <option
            value="Inactive"
            selected={status === "Inactive" ? status : ""}
          >
            Inactive
          </option>
        </select>
        <input type="submit" value="Add User" />
        <Link to="/">
          <input type="button" value="Go Home" />
        </Link>
      </form>
    </>
  );
};

export default AddEdit;
