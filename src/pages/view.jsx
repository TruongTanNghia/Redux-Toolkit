import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetContacts, getDetailContact } from "../redux/Todoslice";
import "../styles/view.css";
const View = () => {
  const { contactDetail } = useSelector(GetContacts);
  const dispatch = useDispatch();
  //* lấy giá trị của id
  const { id } = useParams();
  console.log(id, "view");
  useEffect(() => {
    dispatch(getDetailContact(id));
  }, [id]);
  console.log(contactDetail);

  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <div className="card">
          <div className="card-header">
            <p>User Contact Detail</p>
          </div>
          <div className="container">
            <strong>ID: </strong>
            <span>{id}</span>
            <br />
            <br />
            <strong>Name: </strong>
            <span>{contactDetail.name}</span>
            <br />
            <br />
            <strong>Email: </strong>
            <span>{contactDetail.email}</span>
            <br />
            <br />
            <strong>Status: </strong>
            <span>{contactDetail.status}</span>
            <br />
            <br />
            <strong>Phone: </strong>
            <span>{contactDetail.phone}</span>
            <br />
            <br />
            <Link to="/">
              <button className="btn btn-edit">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
