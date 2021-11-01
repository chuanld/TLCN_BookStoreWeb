import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { GlobalState } from "../../../../GlobalState";
import Loading from "../../../../utils/loading/Loading";
import "./productdetail.css";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  _id: "",
  product_id: "Type tag id",
  title: "Type title",
  price: 0,
  description: "Type description",
  content: "Type content the book",
  category: "Select category book",
  author: "",
  publisher: "",
};
function ProductDetail() {
  const state = useContext(GlobalState);
  const [product, setProduct] = useState(initialState);
  const [categories] = state.categoriesApi.categories;
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [callback, setCallback] = state.productsApiAdmin.callback;
  const param = useParams();
  const [products] = state.productsApiAdmin.products;

  const [isAdmin] = state.userApi.isAdmin;
  const history = useHistory();
  const [token] = state.token;

  useEffect(() => {
    if (param.id) {
      products.forEach((product) => {
        if (product._id === param.id) {
          setProduct(product);
          setImages(product.images);
        }
      });
    } else {
      setProduct(initialState);
      setImages(false);
    }
  }, [param.id, products]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const styleUpload = {
    display: images ? "block" : "none",
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return toast.warn("You are not an admin");
      const file = e.target.files[0];

      if (!file) return toast.warn("File not exist!");

      if (file.size > 1024 * 1024) return toast.warn("Size too big. Try again");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return toast.warn("File format is incorrect");

      let formData = new FormData();
      formData.append("file", file);

      setLoading(true);
      const result = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      setCallback(!callback);
      setLoading(false);
      setImages(result.data);
      toast.success("Update product information successfully");
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };
  const handleDestroy = async () => {
    try {
      if (!isAdmin) return toast.warn("You're not an Admin");
      setLoading(true);
      await axios.post(
        "/api/destroy",
        { public_id: images.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setCallback(!callback);
      setLoading(false);
      setImages(false);
      toast.success("Remove image successfully");
      toast.warn("Product must has Image for sale. Let select new image");
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return alert("You're not an Admin");
      if (!images) return alert("No select image upload");

      await axios.put(
        `/api/products/${product._id}`,
        { ...product, images },
        {
          headers: { Authorization: token },
        }
      );
      history.push("/admin/productlist");
      setCallback(!callback);
      setImages(false);
      setProduct(initialState);
      toast.success("Update product information successfully");
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };
  return (
    <div className="create_product">
      <div className="uploadimg">
        <input type="file" name="file" id="file_up" onChange={handleUpload} />
        {loading ? (
          <div id="file_img">
            <Loading />
          </div>
        ) : (
          <div id="file_img" style={styleUpload}>
            <img src={images ? images.url : ""} alt="" />
            <span onClick={handleDestroy}>X</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="product_id">Product ID</label>
          <input
            type="text"
            name="product_id"
            id="product_id"
            required
            value={product.product_id}
            onChange={handleChangeInput}
            disabled
          />
        </div>

        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={product.title}
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            required
            value={product.price}
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            required
            value={product.description}
            rows="5"
            onChange={handleChangeInput}
          />
        </div>
        <div className="row">
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            name="content"
            id="content"
            required
            value={product.content}
            rows="7"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="title">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            required
            value={product.author}
            onChange={handleChangeInput}
          />
        </div>
        <div className="row">
          <label htmlFor="title">Publisher</label>
          <input
            type="text"
            name="publisher"
            id="publisher"
            required
            value={product.publisher}
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="categories">Categories: </label>
          <select
            name="category"
            value={product.category}
            onChange={handleChangeInput}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}
export default ProductDetail;
