import axios from "axios";
import React, { useState } from "react";
import Navbar1 from "../../../layouts/frontend/Navbar1";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();
  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/register`, data).then((res) => {
        if(res.data.status === 200){
            localStorage.setItem('auth_token' , res.data.token);
            localStorage.setItem('auth_name' , res.data.username);
            swal("Success" , res.data.message , "success");
        }
        else{
            setRegister({ ...registerInput , error_list: res.data.validation_errors })
        }
        navigate('/home');
      });
    });
  };

  return (
    <div>
      <Navbar1 />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <form onSubmit={registerSubmit}>
                  <div className="form-group mb-3">
                    <label>Full Name</label>
                    <input
                      type=""
                      name="name"
                      className="form-control"
                      value={registerInput.name}
                      onChange={handleInput}
                    ></input>
                    <span>{registerInput.error_list.name}</span>
                  </div>

                  <div className="form-group mb-3">
                    <label>Email ID</label>
                    <input
                      type=""
                      name="email"
                      value={registerInput.email}
                      onChange={handleInput}
                      className="form-control"
                    ></input>
                    <span>{registerInput.error_list.email}</span>
                  </div>

                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type=""
                      name="password"
                      value={registerInput.password}
                      onChange={handleInput}
                      className="form-control"
                    ></input>
                    <span>{registerInput.error_list.password}</span>
                  </div>

                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
