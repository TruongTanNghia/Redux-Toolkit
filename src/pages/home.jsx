import { useDispatch, useSelector } from "react-redux";
import {
  GetContacts,
  deleteContact,
  getDetailContact,
  updateContact,
} from "../redux/Todoslice";
import { Link } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  const { contacts, contactDetail } = useSelector(GetContacts);
  console.log(contacts);
  const dispatch = useDispatch();
  const handleGetContact = (id) => {
    console.log(id);
    dispatch(getDetailContact(id));
  };
  const handleDeleteContact = (id) => {
    console.log(id);
    dispatch(deleteContact(id));
  };
  // const handleUpdateContact = (id) => {
  //   console.log(id);
  //   dispatch(updateContact(id));
  // };

  return (
    <>
      <div className="Container">
        <h1>Bia 50 lon- Rượu 50 lít</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>No.</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Phone</th>
              <th style={{ textAlign: "center" }}>Status</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.status}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDeleteContact(item.id);
                      }}
                      className="btn btn-delete"
                    >
                      Delete
                    </button>
                    <Link to={`/view/${item.id}`}>
                      <button
                        onClick={() => {
                          handleGetContact(item.id);
                        }}
                        className="btn btn-view"
                      >
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to={`/add`}>
          <button className="btn btn-add">Add Contact</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
