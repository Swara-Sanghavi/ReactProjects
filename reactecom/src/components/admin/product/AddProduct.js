import Navbar from "../../../layouts/admin/Navbar";
import Sidebar from "../../../layouts/admin/Sidebar";
import Footer from "../../../layouts/admin/Footer";

import "../../../assets/admin/css/styles.css";
import "../../../assets/admin/js/scripts";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function AddProduct() {
  const [categorylist, setCategorylist] = useState([]);
  const [productInput, setProduct] = useState({
    category_id: "",
    slug: "",
    name: "",
    description: "",

    meta_title: "",
    meta_keyword: "",
    meta_description: "",

    selling_price: "",
    original_price: "",
    qty: "",
    brand: "",
    featured: "",
    popular: "",
    status: "",
    errorlist: "",
  });

  const [picture, setPicture] = useState([]);
  const [errorlist, setError] = useState([]);

  const handleInput = (e) => {
    e.persist();
    setProduct({ ...productInput, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setPicture({ image: e.target.files[0] });
  };

  useEffect(() => {
    axios.get(`/api/all-category`).then((res) => {
      if (res.data.status === 200) {
        setCategorylist(res.data.category);
      }
    });
  }, []);

  const submitProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", picture.image);
    formData.append("category_id", productInput.category_id);
    formData.append("slug", productInput.slug);
    formData.append("name", productInput.name);
    formData.append("description", productInput.description);

    formData.append("meta_title", productInput.meta_title);
    formData.append("meta_keyword", productInput.meta_keyword);
    formData.append("meta_description", productInput.meta_description);

    formData.append("selling_price", productInput.selling_price);
    formData.append("original_price", productInput.original_price);
    formData.append("qty", productInput.qty);
    formData.append("brand", productInput.brand);
    formData.append("featured", productInput.featured);
    formData.append("popular", productInput.popular);
    formData.append("status", productInput.status);

    axios
      .post(`/api/store-product`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          setError([]);
        } else if (res.data.status === 422) {
          swal("All fields are mandontary", "", "error");
          setError(res.data.errors);
        }
      });
  };

  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>

        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <div className="card mt-4">
                <div className="card-header">
                  <h4>
                    Add Products
                    <a
                      href="/admin/view-product"
                      className="btn btn-primary btn-sm float-end"
                    >
                      View Product
                    </a>
                  </h4>
                </div>
                <div className="card-body">
                  <form
                    method="POST"
                    onSubmit={submitProduct}
                    encType="multipart/form-data"
                  >
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#home-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="home-tab-pane"
                          aria-selected="true"
                        >
                          Home
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="seotags-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#seotags-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="seotags-tab-pane"
                          aria-selected="false"
                        >
                          SEO TAGS
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="othersdetails-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#othersdetails-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="othersdetails-tab-pane"
                          aria-selected="false"
                        >
                          Other Details
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane card-body border fade show active"
                        id="home-tab-pane"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="form-group mb-3">
                          <label>Select Category</label>
                          <select
                            name="category_id"
                            onChange={handleInput}
                            value={productInput.category_id}
                            className="form-control"
                          >
                            <option>Select Category</option>
                            {categorylist.map((item) => {
                              return (
                                <option value={item.id} key={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <div className="form-group mb-3">
                          <label>Slug</label>
                          <input
                            type="text"
                            name="slug"
                            className="form-control"
                            onChange={handleInput}
                            value={productInput.slug}
                          ></input>
                          <small className="text-danger">
                            {errorlist.slug}
                          </small>
                        </div>

                        <div className="form-group mb-3">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={handleInput}
                            value={productInput.name}
                          ></input>
                          <small className="text-danger">
                            {errorlist.name}
                          </small>
                        </div>

                        <div className="form-group mb-3">
                          <label>Description</label>
                          <input
                            type="text"
                            name="description"
                            className="form-control"
                            onChange={handleInput}
                            value={productInput.description}
                          ></input>
                          <small className="text-danger">
                            {errorlist.description}
                          </small>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body border fade"
                        id="seotags-tab-pane"
                        role="tabpanel"
                        aria-labelledby="seotags-tab"
                        tabindex="0"
                      >
                        <div className="form-group mb-3">
                          <label>Meta Title</label>
                          <input
                            type="text"
                            name="meta_title"
                            className="form-control"
                            onChange={handleInput}
                            value={productInput.meta_title}
                          ></input>
                          <small className="text-danger">
                            {errorlist.meta_title}
                          </small>
                        </div>

                        <div className="form-group mb-3">
                          <label>Meta Keyword</label>
                          <input
                            type="text"
                            name="meta_keyword"
                            className="form-control"
                            onChange={handleInput}
                            value={productInput.meta_keyword}
                          ></input>
                          <small className="text-danger">
                            {errorlist.meta_keyword}
                          </small>
                        </div>

                        <div className="form-group mb-3">
                          <label>Meta Description</label>
                          <input
                            type="text"
                            name="meta_description"
                            className="form-control"
                            onChange={handleInput}
                            value={productInput.meta_description}
                          ></input>
                          <small className="text-danger">
                            {errorlist.meta_description}
                          </small>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body border fade"
                        id="othersdetails-tab-pane"
                        role="tabpanel"
                        aria-labelledby="othersdetails-tab"
                      >
                        <div className="row">
                          <div className="form-group  col-md-4 mb-3">
                            <label>Selling Price</label>
                            <input
                              type="text"
                              name="selling_price"
                              className="form-control"
                              onChange={handleInput}
                              value={productInput.selling_price}
                            ></input>
                            <small className="text-danger">
                              {errorlist.selling_price}
                            </small>
                          </div>

                          <div className="form-group  col-md-4 mb-3">
                            <label>Original Price</label>
                            <input
                              type="text"
                              name="original_price"
                              className="form-control"
                              onChange={handleInput}
                              value={productInput.original_price}
                            ></input>
                            <small className="text-danger">
                              {errorlist.original_price}
                            </small>
                          </div>

                          <div className="form-group  col-md-4 mb-3">
                            <label>Quantity</label>
                            <input
                              type="text"
                              name="qty"
                              className="form-control"
                              onChange={handleInput}
                              value={productInput.qty}
                            ></input>
                            <small className="text-danger">
                              {errorlist.qty}
                            </small>
                          </div>

                          <div className="form-group  col-md-4 mb-3">
                            <label>Brand</label>
                            <input
                              type="text"
                              name="brand"
                              className="form-control"
                              onChange={handleInput}
                              value={productInput.brand}
                            ></input>
                            <small className="text-danger">
                              {errorlist.brand}
                            </small>
                          </div>

                          <div className="form-group col-md-8 mb-3">
                            <label>Image</label>
                            <input
                              type="file"
                              name="image"
                              className="form-control"
                              onChange={handleImage}
                            ></input>
                          </div>

                          <div className="form-group  col-md-4 mb-3">
                            <label>Featured (checked-shown)</label>
                            <input
                              type="checkbox"
                              name="featured"
                              className="w-50 h-50"
                              onChange={handleInput}
                              value={productInput.featured}
                            ></input>
                          </div>

                          <div className="form-group  col-md-4 mb-3">
                            <label>Popular (checked-shown)</label>
                            <input
                              type="checkbox"
                              name="popular"
                              className="w-50 h-50"
                              onChange={handleInput}
                              value={productInput.popular}
                            ></input>
                          </div>

                          <div className="form-group  col-md-4 mb-3">
                            <label>Status (checked-Hidden)</label>
                            <input
                              type="checkbox"
                              name="status"
                              className="w-50 h-50"
                              onChange={handleInput}
                              value={productInput.status}
                            ></input>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary px-4 mt-2"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
