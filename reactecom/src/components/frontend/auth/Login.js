import axios from "axios";
import React, { useState } from "react";
import  Navbar1  from "../../../layouts/frontend/Navbar1";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();

    const [loginInput , setLogin] = useState({
        email: '',
        password: '', 
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput , [e.target.name]: e.target.value});
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`api/login` , data).then(res => {
            if(res.data.status === 200){
                localStorage.setItem('auth_token' , res.data.token);
                localStorage.setItem('auth_name' , res.data.username);
                swal("Success" , res.data.message , "success")
            }
            else if(res.data.status === 401){
                swal("warning" , res.data.message , "warning")
            }
            else{
               setLogin({...loginInput , error_list: res.data.validation_errors});
            }
            navigate('/home');
        });
    });
}

    return(
        <>
        <Navbar1/>
        <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={loginSubmit}>
                                
                                    <div className="form-group mb-3">
                                        <label>Email ID</label>
                                        <input type="email" name="email" className="form-control" value={loginInput.email} onChange={handleInput}></input>

                                        <span>{loginInput.error_list.email}</span>

                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" value={loginInput.password} onChange={handleInput} className="form-control"></input>

                                        <span>{loginInput.error_list.password}</span>

                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}   

export default Login;