import React, { useContext } from "react";
import "./userlist.css";
import { GlobalState } from "../../../../GlobalState";

import { DeleteForever, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";

import allUsersApi from "../../../../api/AllUsersApi";

export default function UserList() {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [inforAll] = allUsersApi(token).inforAll;

  // const [token] = state.token;

  // const [users, setUsers] = useState({
  //   name: "",
  //   address: "",
  //   phone: "",
  //   password: "",
  //   confirmpassword: "",
  //   role: "",
  // });
  // const { name, address, phone, password, confirmpassword, role } = users;

  // const onChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setUsers({ ...users, [name]: value });
  // };

  // const columns = [
  //   {
  //     field: "email",
  //     headerName: "Email",
  //     width: 300,
  //     height: 160,
  //     editable: true,
  //   },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     width: 150,
  //     height: 160,
  //     editable: true,
  //   },
  //   {
  //     field: "phone",
  //     headerName: "Phone",
  //     width: 150,
  //     height: 160,
  //     editable: true,
  //   },
  //   {
  //     field: "address",
  //     headerName: "Address",
  //     type: "number",
  //     width: 150,
  //     height: 160,
  //     editable: true,
  //   },
  //   {
  //     field: "cart",
  //     headerName: "Cart",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     height: 160,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     sortable: false,
  //     width: 160,
  //     height: 160,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to="/userdetail">
  //             <Settings className="userListEdit" />
  //           </Link>
  //           <DeleteForever className="userListDelete" />
  //         </>
  //       );
  //     },
  //   },
  // ];

  // const rows = [
  //   inforAll.map((user) => ({

  //     id: user._id,
  //     name: user.name,
  //     email: user.email,
  //     phone: user.phone,
  //     address: user.address,
  //     role: user.role,
  //     action: <DeleteOutline />,

  //   })),
  // ];

  const deleteSubmit = async (id, email) => {
    // e.preventDefault();

    try {
      console.log(id, email);
      if (window.confirm(`Are you sure delete user ${email}?`)) {
        const result = await axios.delete(`/user/delete/${id}`, {
          headers: { Authorization: token },
        });
        alert(result.data.msg);
      }
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <>
      <div className="userListTitle">
        <h4>List user in Database</h4>
        <Link to="/createUser">
          <button className="userAddButton">Create User</button>
        </Link>
      </div>
      <div className="usersList">
        <table className="userListUser">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inforAll.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
                <td>
                  <Link to={`/userdetail/${user._id}`}>
                    <Edit className="userListEdit" />
                  </Link>

                  <DeleteForever
                    className="userListDelete"
                    onClick={() => deleteSubmit(user._id, user.email)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div> */}
    </>
  );
}
