import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const admin = localStorage.getItem('admin')

  const handleadminout = () => {
    localStorage.removeItem('admin')
    navigate('/admin/login')

  }
  const user = localStorage.getItem('user')

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/user/login')
  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src='/images/Admin.png' alt='logo' style={{ width: "90px", height: "70px" }} />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/category-list" >Category</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/product-list">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/student-list">Student</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/car-list">Car</a>
            </li>
          </ul>
        </div>
        {
          (admin)
            ?
            <button type="button" class="btn btn-primary" onClick={handleadminout} >ADMINOUT</button>
            :
            <button type="button" class="btn btn-primary" onClick={() => { navigate(`/admin/login`) }}>ADMIN</button>


        }
        {/* <button type="button" class="btn btn-primary" onClick={ ()=>{ navigate(`/admin/login`) } }>ADMIN</button> */}
        {
          (user)
            ?
            <button type="button" style={{ margin: "20px" }} class="btn btn-secondary" onClick={handleLogout}>Logout</button>
            :
            <button type="button" style={{ margin: "20px" }} class="btn btn-secondary" onClick={() => { navigate(`/user/login`) }}>LOGIN</button>
        }
        {/* <button type="button"  style={{margin:"20px"}}class="btn btn-secondary" onClick={ ()=>{ navigate(`/user/login`) } }>LOGIN</button> */}

      </div>
    </nav>
  )
}

export default Navbar  
