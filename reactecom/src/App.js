import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Masterlayout from './layouts/admin/Masterlayout';
import Profile from './components/admin/Profile';
import Dashboard from './components/admin/Dashboard';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import Home from './components/frontend/Home';
import Category from './components/admin/category/Category';
import ViewCategory from './components/admin/category/ViewCategory';
import EditCategory from './components/admin/category/EditCategory';
import AddProduct from './components/admin/product/AddProduct';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes> 
          
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/admin/profile" element={<Profile/>} />
          <Route path="/home" element={<Home/>} />

          {/* Category Routes */}

          <Route path="/admin/add-category" element={<Category/>} />
          <Route path="/admin/view-category" element={<ViewCategory/>} />
          <Route path="/admin/edit-category/:id" element={<EditCategory/>} />

          {/* Products Routes */}

          <Route path="/admin/add-product" element={<AddProduct/>} />

        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
