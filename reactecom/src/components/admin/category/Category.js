import React, { useState } from "react";
import Navbar from "../../../layouts/admin/Navbar";
import Sidebar from "../../../layouts/admin/Sidebar";
import Footer from "../../../layouts/admin/Footer";

import "../../../assets/admin/css/styles.css";
import swal from 'sweetalert';
import "../../../assets/admin/js/scripts";
import axios from "axios";

function Category() {

  const [categoryInput , setCategory] = useState({
      slug: '',
      name:'',
      description:'',
      status:'',
      meta_title:'',
      meta_keyword:'',
      meta_description:'',
      error_list:[],
  });

  const handleInput = (e) => {
    e.persist();
    setCategory({...categoryInput , [e.target.name]:e.target.value})
  }

  const submitCategory = (e) => {
    e.preventDefault();

     
    const data = {
      slug:categoryInput.slug,
      name:categoryInput.name,
      description:categoryInput.description,
      status:categoryInput.status,
      meta_title:categoryInput.meta_title,
      meta_keyword:categoryInput.meta_keyword,
      meta_description:categoryInput.meta_description,
    }
    

    axios.post(`api/store-category` , data).then(res => {
      if(res.data.status === 200){
        swal("Success" , res.data.message , "success");
        document.getElementById('CATEGORY_FORM').reset();
      }
      else if(res.data.status === 400){
        setCategory({...categoryInput , error_list:res.data.errors});
      }
    });

  }

  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>

        <div id="layoutSidenav_content">
            <div className="container-fluid px-4">
              <h1 className="mt-4">Add Category</h1>

              <form onSubmit={submitCategory} method="POST" id="CATEGORY_FORM">

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
                    data-bs-target="#seo-tags"
                    type="button"
                    role="tab"
                    aria-controls="seo-tags-pane"
                    aria-selected="false"
                  >
                    SEO Tags
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
                    <label>Slug</label>
                    <input type="text" name="slug" onChange={handleInput} value={categoryInput.slug}  className="form-control" />
                  </div>

                  <div className="form-group mb-3">
                    <label>Name</label>
                    <input type="text" name="name"  onChange={handleInput} value={categoryInput.name} className="form-control" />
                  </div>

                  <div className="form-group mb-3">
                    <label>Description</label>
                    <textarea
                      name="description"
                      className="form-control"  onChange={handleInput} value={categoryInput.description}
                    ></textarea>
                  </div>

                  <div className="form-group mb-3">
                    <label>Status</label>
                    <input type="checkbox" name="status"  onChange={handleInput} value={categoryInput.status} /> Status
                    0=shown/1=hidden
                  </div>
                </div>
                <div
                  className="tab-pane  card-body border fade"
                  id="seo-tags"
                  role="tabpanel"
                  aria-labelledby="seo-tags"
                >
                  <div className="form-group mb-3">
                    <label>Meta Title</label>
                    <input
                      type="text"
                      name="meta_title"
                      className="form-control"  onChange={handleInput} value={categoryInput.meta_title}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Meta Keywords</label>
                    <textarea
                      name="meta_keyword"
                      className="form-control"  onChange={handleInput} value={categoryInput.meta_keyword}
                    ></textarea>
                  </div>

                  <div className="form-group mb-3">
                    <label>Meta Description</label>
                    <textarea
                      name="meta_description"
                      className="form-control"  onChange={handleInput} value={categoryInput.meta_description}
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
              </div>
              </form>
            </div>
        </div>
      </div>
      </div>

  );
}

export default Category;
