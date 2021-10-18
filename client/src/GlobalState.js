import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import UserApi from "./api/UserApi";
import ProductsApi from "./api/ProductsApi";
import CategoriesApi from "./api/CategoriesApi";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  //Authenticate
  const refreshToken = async () => {
    const res = await axios.get("/user/refresh_token");
    setToken(res.data.accesstoken);
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) refreshToken();
  }, []);

  //API
  const state = {
    token: [token, setToken],
    userApi: UserApi(token),
    productsApi: ProductsApi(),
    categoriesApi: CategoriesApi(),

    //allUsersApi: AllUsersApi(token),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
