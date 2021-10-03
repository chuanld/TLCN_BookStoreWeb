import React, { useContext } from "react";
import "./adminpage.css";
import SideBar from "./sidebar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import { GlobalState } from "../../GlobalState";
import UserList from "./features/userlist/UserList";
import ProductListAdmin from "./features/productlist/ProductListAdmin";
import UserDetail from "./features/userdetail/UserDetail";
import CreateUser from "./features/createUser/CreateUser";

function AdminPage() {
  const state = useContext(GlobalState);
  //const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [isAdmin] = state.userApi.isAdmin;

  return (
    <>
      {isAdmin ? (
        <Router>
          <div className="container-ad">
            <SideBar />
            <div className="others">
              <Switch>
                <Route path="/userlist" exact component={UserList} />
                <Route path="/userdetail/:id" exact component={UserDetail} />
                <Route path="/createUser" exact component={CreateUser} />
                <Route path="/productlist" exact component={ProductListAdmin} />
              </Switch>
            </div>
          </div>
        </Router>
      ) : (
        <div className="container-ad">
          <h1>This is Admin system. Please go back, thanks you!</h1>
        </div>
      )}
    </>
  );
}

export default AdminPage;
