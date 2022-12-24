import React from "react";
import { Navigate, Route } from "react-router-dom";
import Masterlayout from "./layouts/admin/Masterlayout";

function AdminPrivateRoute({...rest}){

    const Navigate = Navigate();

    return(
        <Route {...rest}
        
        render={ ({props , location}) =>

            localStorage.getItem('auth_token') ? ( <Masterlayout {...props} /> ) : ( <Navigate to={{pathname: "/login" , state: {from: location}}}/> )

    }

    />   
    )
}   

export default AdminPrivateRoute;