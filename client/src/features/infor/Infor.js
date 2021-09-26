import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import "./infor.css";
import dateFormat from "dateformat";
import { AccountCircle, PermIdentity, Settings } from "@material-ui/icons";
function Infor() {
  const state = useContext(GlobalState);
  const [infor] = state.userApi.infor;
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">
          <Settings className="userTitleIcon" />
          Your Profile
        </h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <AccountCircle className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{infor.email}</span>
              <span className="userShowUserTitle">{infor.name}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Detail</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Name: {infor.name}</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Phone: {infor.phone}</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">
                Address: {infor.address}
              </span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">
                Role: {infor.role === 0 ? "User Account" : "Admin Account"}
              </span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">
                Date join: {dateFormat(infor.createdAt)}
              </span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">
                Last update: {dateFormat(infor.updatedAt)}
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit Information</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  placeholder={infor.name}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={infor.phone}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={infor.address}
                  className="userUpdateInput"
                />
              </div>

              <button className="userUpdateButton">Update</button>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateItem">
                <label>Country</label>
                <input
                  type="text"
                  placeholder={infor.address}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Avatar</label>
                <input
                  type="text"
                  placeholder={infor.address}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Avatar</label>
                <input
                  type="text"
                  placeholder={infor.address}
                  className="userUpdateInput"
                />
              </div>
              <button className="userUpdateButton">Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Infor;
