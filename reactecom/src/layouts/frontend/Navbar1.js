import axios from "axios";
import React from "react";

import swal from "sweetalert";

function Navbar1() {

  const logoutSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/logout`).then(res => {
      if(res.data.status === 200){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        swal("Success" , res.data.message , "success")
      }
    })
  }

  var AuthButtons = '';

  if(!localStorage.getItem('auth_token')){
    AuthButtons = (
     <ul className="navbar-nav">
       <li className="nav-item">
      <a className="nav-link" href="/login">
        Login
      </a>
    </li>

    <li className="nav-item">
      <a className="nav-link" href="/register">
        Register
      </a>
    </li>
     </ul>
    )
  }
  else{
    AuthButtons = (
      <li className="nav-item">
      <button
        type="button"
        className="nav-link btn btn-danger btn-sm text-white"
       onClick={logoutSubmit}>
        Logout
      </button>
    </li>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Collection
              </a>
            </li>
            {AuthButtons}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
