import axios from "axios";
import { useState, useEffect } from "react";

function AllUsersApi(token) {
  //const [isLogged, setIsLogged] = useState(false);
  //const [isAdmin, setIsAdmin] = useState(false);
  const [inforAll, setInforAll] = useState([]);

  useEffect(() => {
    if (token) {
      const getAllUsers = async () => {
        try {
          const res = await axios.get("/user/all_infor", {
            headers: { Authorization: token },
          });
          //setIsLogged(true);
          //res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
          setInforAll(res.data);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };

      getAllUsers();
    }
  }, [token]);
  return {
    //isLogged: [isLogged, setIsLogged],
    //isAdmin: [isAdmin, setIsAdmin],
    inforAll: [inforAll, setInforAll],
  };
}

export default AllUsersApi;
