import React, { useEffect, useState } from "react";
import Navbar from "../../../layouts/admin/Navbar";
import Sidebar from "../../../layouts/admin/Sidebar";
import Footer from "../../../layouts/admin/Footer";

import "../../../assets/admin/css/styles.css";
import swal from "sweetalert";
import "../../../assets/admin/js/scripts";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditCategory(props) {
 const [loading , setLoading] = useState(true);
  const [categoryInput, setCategory] = useState([]);
  const [error, setError] = useState([]);
  const {id} = useParams() 

  useEffect(() => {
    const category_id=id;
    axios.get(`/api/edit-category/${category_id}`).then(res=>{
        if(res.data.status === 200){
           console.log(res.data.category)
            
           setCategory(res.data.category);

        }
        else if(res.data.status ===  404){
            swal("Error" , res.data.message , "error"); 
        }
        setLoading(false);
    });
  },[]);

  const handleInput = (e) => {
    e.persist();

    setCategory ({...categoryInput , [e.target.name] : e.target.value});
  }

  const category_id = useParams();
  const updateCategory = (e) => {
    e.preventDefault();
    const data = categoryInput;
      
    axios.put(`/api/update-category/${category_id.id}` , data).then(res=>{
        if(res.data.status === 200){
            swal("Success" , res.data.message , "success");
        }
        else if(res.data.status === 422){
            setError(res.data.errors);
        }
    });
  }

  if(loading){
    return <h4>loading Category...</h4>
}


  return (
    <div className="container px-4">
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>

          <div id="layoutSidenav_content">
            <div className="container px-4">
              <div className="card mt-4">
                <div className="card-header">
                  Edit Category
                  <a
                    href="/admin/view-category"
                    className="btn btn-primary btn-sm float-end"
                  >
                    BACK
                  </a>
                </div>

                <div className="card-body">
                  <form onSubmit={updateCategory}>
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
                          <input
                            type="text"
                            name="slug"
                            onChange={handleInput}
                            value={categoryInput.slug}
                            className="form-control"
                          />
                        </div>

                        <div className="form-group mb-3">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleInput}
                            value={categoryInput.name}
                            className="form-control"
                          />
                        </div>

                        <div className="form-group mb-3">
                          <label>Description</label>
                          <textarea
                            name="description"
                            className="form-control"
                            onChange={handleInput}
                            value={categoryInput.description}
                          ></textarea>
                        </div>

                        <div className="form-group mb-3">
                          <label>Status</label>
                          <input
                            type="checkbox"
                            name="status"
                            onChange={handleInput}
                            value={categoryInput.status}
                          />{" "}
                          Status 0=shown/1=hidden
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
                            className="form-control"
                            onChange={handleInput}
                            value={categoryInput.meta_title}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <label>Meta Keywords</label>
                          <textarea
                            name="meta_keyword"
                            className="form-control"
                            onChange={handleInput}
                            value={categoryInput.meta_keyword}
                          ></textarea>
                        </div>

                        <div className="form-group mb-3">
                          <label>Meta Description</label>
                          <textarea
                            name="meta_description"
                            className="form-control"
                            onChange={handleInput}
                            value={categoryInput.meta_description}
                          ></textarea>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary px-4 float-end"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCategory;
