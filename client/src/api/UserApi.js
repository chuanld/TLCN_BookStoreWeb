import axios from "axios";
import { useState, useEffect } from "react";

function UserApi(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [infor, setInfor] = useState([]);
  const [givenName, setGivenName] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);
  const [callback, setCallback] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/user/infor", {
            headers: { Authorization: token },
          });
          setIsLogged(true);
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
          setInfor(res.data);
          setGivenName(res.data.name.split(" ").pop());
          setCart(res.data.cart);
          //console.log(res);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      getUser();
    }
  }, [token]);

  const addCart = async (product) => {
    if (!isLogged) return alert("Login join with us and shopping");

    const check = cart.every((item) => {
      return item._id !== product._id;
    });

    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);
      const result = await axios.patch(
        "/user/addtocart",
        { cart: [...cart, { ...product, quantity: 1 }] },
        {
          headers: { Authorization: token },
        }
      );
      alert(result.data.msg);
    } else {
      alert("This product has beed added to cart");
    }
  };

  useEffect(() => {
    if (token) {
      const getOrderInfo = async () => {
        const result = await axios.get("/user/order_infor", {
          headers: { Authorization: token },
        });
        setOrderInfo(result.data);
      };
      getOrderInfo();
    }
  }, [token, callback]);
  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    infor: [infor, setInfor],
    givenName: [givenName, setGivenName],
    cart: [cart, setCart],
    addCart: addCart,
    orderInfo: [orderInfo, setOrderInfo],
    callback: [callback, setCallback],
  };
}

export default UserApi;
