import { useState, useEffect } from "react";
import axios from "axios";
function ProductsApi(token) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [products, setProducts] = useState([]);
  const [callback, setCallback] = useState(false);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [result, setResult] = useState(0);
  const [totalResult, setTotalResult] = useState(0);
  const [countPage, setCountPage] = useState(1);

  const [loadSklt, setLoadSklt] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 587,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/user/infor", {
            headers: { Authorization: token },
          });
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      getUser();
    }
  }, [token]);
  useEffect(() => {
    if (token) {
      if (isAdmin) {
        const getProducts = async () => {
          setLoadSklt(true);

          const res = await axios.get(
            `/api/products?limit=${limit}&page=${page}&${category}&${sort}&title[regex]=${search}`
          );
          setLoadSklt(false);
          setProducts(res.data.products);
          setResult(res.data.result);
          setTotalResult(res.data.totalResult);
          setCountPage(Math.ceil(res.data.totalResult / limit));

          scrollToTop();
          console.log(res);
        };
        getProducts();
      }
    }
  }, [callback, limit, category, sort, page, search, token, isAdmin]);

  return {
    products: [products, setProducts],
    callback: [callback, setCallback],
    category: [category, setCategory],
    sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    limit: [limit, setLimit],
    result: [result, setResult],
    totalResult: [totalResult, setTotalResult],
    countPage: [countPage, setCountPage],
    //Skeleton
    loadSklt: [loadSklt, setLoadSklt],
  };
}

export default ProductsApi;
