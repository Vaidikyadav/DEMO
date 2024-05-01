import React from 'react'
import { Routes, Route } from 'react-router';
import CategoryList from './Comp/admin/category/CategoryList';
import AddCategory from './Comp/admin/category/AddCategory';
import CategoryView from './Comp/admin/category/CategoryView';
import CategoryEdit from './Comp/admin/category/CategoryEdit';
import ProductList from './Comp/admin/product/ProductList'
import AddProduct from './Comp/admin/product/AddProduct';
import ProductView from './Comp/admin/product/ProductView';
import ProductEdit from './Comp/admin/product/ProductEdit';
import Navbar from './Comp/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentList from './Comp/admin/student/StudentList';
import AddStudent from './Comp/admin/student/AddStudent';
import StudentEdit from './Comp/admin/student/StudentEdit';
import StudentView from './Comp/admin/student/StudentView';
import CarList from './Comp/admin/car/CarList';
import AddCar from './Comp/admin/car/AddCar';
import CarEdit from './Comp/admin/car/CarEdit';
import CarView from './Comp/admin/car/CarView';
import Login from './Comp/admin/Login/Login';
import Users from './Comp/admin/Users/Users';
import Header from './Comp/admindashboard/Header';
import Home from './Comp/admindashboard/Home';
import AdminPrivateComponent from './Comp/common/AdminPrivateComponent';
import UserDashboard from './Comp/admin/Users/UserDashboard';
import UserPrivateComponent from './Comp/common/UserPrivateComponent';
import Table from './Comp/Table';

const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/category-list' element={<CategoryList />}></Route>
        <Route path='/table' element={<Table />}></Route>
        <Route path='/product-list' element={<ProductList />}></Route>
        <Route path='/student-list' element={<StudentList />}></Route>
        <Route path='/car-list' element={<CarList />}></Route>

        {/* user routes */}
        <Route path='/user/login' element={<Users />} />
        {/* user authenticated routes */}
        <Route element={<UserPrivateComponent/>}>
        <Route path='/user/dashboard' element={<UserDashboard />} />
        </Route>
       
       



        {/* admin routes  */}
        <Route path='/admin/login' element={<Login />} />
        {/* admin authenticated routes */}
        <Route element={<AdminPrivateComponent/>}> 
          <Route path='/admin/category-list' element={<CategoryList />} />
          <Route path='/admin/add-category' element={<AddCategory />} />
          <Route path='/admin/edit-category/:id' element={<CategoryEdit />} />
          <Route path='/admin/category-view/:id' element={<CategoryView />} />
          <Route path='/admin/product-list' element={<ProductList />} />
          <Route path='/admin/add-product' element={<AddProduct />} />
          <Route path='/admin/product-view/:id' element={<ProductView />} />
          <Route path='/admin/edit-product/:id' element={<ProductEdit />} />
          <Route path='/admin/student-list' element={<StudentList />} />
          <Route path='/admin/add-student' element={<AddStudent />} />
          <Route path='/admin/edit-student/:id' element={<StudentEdit />} />
          <Route path='/admin/student-view/:id' element={<StudentView />} />
          <Route path='/admin/car-list' element={<CarList />} />
          <Route path='/admin/add-car' element={<AddCar />} />
          <Route path='/admin/edit-car/:id' element={<CarEdit />} />
          <Route path='/admin/car-view/:id' element={<CarView />} />
          <Route path='/admin/dashboard' element={<Home />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App 