import React, { useContext, useState } from "react";
import { GlobalState } from "../../../../GlobalState";
import { Link } from "react-router-dom";
import Loading from "../../../../utils/loading/Loading";
import { Edit, DeleteForever } from "@material-ui/icons";
import "./productlistadmin.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export default function ProductListAdmin() {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [products, setProducts] = state.productsApiAdmin.products;
  const [callback, setCallback] = state.productsApiAdmin.callback;
  const [loading, setLoading] = useState(false);
  const [onCheck, setOnCheck] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [enableDel, setEnableDel] = useState(false);
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await axios.get("/api/products");
  //     setProducts(res.data.products);
  //   };
  //   getProducts();
  // }, [setProducts]);

  const handleDelete = async (id, tagId, public_id) => {
    try {
      if (window.confirm(`Are you sure delete product ${tagId} ?`)) {
        setLoading(true);
        const destroyImg = await axios.post(
          "/api/destroy",
          { public_id: public_id },
          {
            headers: { Authorization: token },
          }
        );
        const deleteProduct = await axios.delete(`/api/products/${id}`, {
          headers: { Authorization: token },
        });
        setLoading(false);
        setCallback(!callback);
        setOnCheck(false);
        setEnableDel(false);
        toast.success(destroyImg.data.msg);
        toast.success(deleteProduct.data.msg);
      }
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  const handleClickMulti = () => {
    if (!onCheck) {
      setOnCheck(true);
      setIsCheck(false);
      products.forEach((product) => {
        product.checked = false;
      });
      setProducts([...products]);
    } else {
      setOnCheck(false);
      setEnableDel(false);
    }
  };
  const handleClickBox = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
    setEnableDel(true);
  };
  const handleCheckAll = () => {
    products.forEach((product) => {
      product.checked = !isCheck;
    });
    setProducts([...products]);
    setIsCheck(!isCheck);
    if (!enableDel) {
      setEnableDel(true);
    }
  };

  const handleDeleteAll = async () => {
    await products.forEach((product) => {
      if (product.checked) {
        handleDelete(product._id, product.product_id, product.images.public_id);
      }
    });
  };

  if (loading) return <Loading />;
  return (
    <>
      <div className="productListAdmin">
        {products.length === 0 && <Loading />}
        <div className="productListTitle">
          <h4>List products in Database</h4>
          <div>
            {onCheck && enableDel ? (
              <button className="productDelAllButton" onClick={handleDeleteAll}>
                Delete
              </button>
            ) : null}
            <button className="productAddButton" onClick={handleClickMulti}>
              {onCheck ? "Cancel check" : "Select multiple"}
            </button>
          </div>
        </div>
        <div className="productListTitle">
          <Link to="/createproduct">
            <button className="productAddButton">Create Product</button>
          </Link>
          {onCheck ? (
            <div className="multiselect">
              <span>Select all</span>
              <input
                type="checkbox"
                checked={isCheck}
                onChange={handleCheckAll}
              />
            </div>
          ) : null}
        </div>
        <div className="productsList">
          <table className="productListProduct">
            <thead>
              <tr>
                <th className="col_id_productlist">Tag ID</th>
                <th className="col_title_productlist">Title</th>
                <th className="col_price_productlist">Price</th>
                <th className="col_sold_productlist">Sold</th>
                <th className="col_author_productlist">Author</th>
                <th className="col_publisher_productlist">Publisher</th>
                <th>Image</th>
                <th className="col_action_productlist">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item._id}>
                  <td className="col_id_productlist">{item.product_id}</td>
                  <td className="col_title_productlist">{item.title}</td>
                  <td className="col_price_productlist">{item.price}</td>
                  <td className="col_sold_productlist">{item.sold}</td>
                  <td className="col_author_productlist">{item.author}</td>
                  <td className="col_publisher_productlist">
                    {item.publisher}
                  </td>
                  <td>
                    <img src={item.images.url} alt="" height="120px" />
                  </td>
                  <td className="col_action_productlist">
                    <Link to={`/productdetail/${item._id}`}>
                      <Edit className="productListEdit" />
                    </Link>

                    {onCheck ? (
                      <input
                        type="checkbox"
                        checked={item.checked}
                        className="productListDelete"
                        onChange={() => handleClickBox(item._id)}
                      />
                    ) : (
                      <DeleteForever
                        className="productListDelete"
                        onClick={() =>
                          handleDelete(
                            item._id,
                            item.product_id,
                            item.images.public_id
                          )
                        }
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
