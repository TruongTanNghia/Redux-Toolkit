//* LIB
import { v4 as uuidv4 } from "uuid";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetContacts,
  addContact,
  getDetailContact,
  updateContact,
} from "../redux/Todoslice";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/addEdit.css";
const AddEdit = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
  });
  const { contactDetail } = useSelector(GetContacts);
  console.log(contactDetail, "---------------Data------------");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id, "--------ID-----------");
  const { name, email, phone, status } = state;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !status) {
      alert("Please Enter Input !!!");
    } else {
      if (!id) {
        const newContact = { id: uuidv4(), ...state };
        dispatch(addContact(newContact));
        alert("Add to user sucess");
        navigate(`/`);
      } else {
        dispatch(updateContact(state));
        alert("Update user sucess");
        navigate(`/`);
      }
    }
  };
  useEffect(() => {
    dispatch(getDetailContact(id));
    setState({ ...contactDetail });
  }, [id, contactDetail]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleOnSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name ..."
            defaultValue={name || ""}
            onChange={(e) => {
              const newName = e.target.value;
              setState({ ...state, name: newName });
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email ..."
            value={email || ""}
            onChange={handleInputChange}
          />
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
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Contact No ..."
            value={phone || ""}
            onChange={handleInputChange}
          />
          {id ? (
            <input type="submit" value="Edit User" />
          ) : (
            <input type="submit" value="Add User" />
          )}
          <Link to="/">
            <input type="button" value="Go Back 🤏" />
          </Link>
        </form>
      </div>
    </>
  );
};

export default AddEdit;
