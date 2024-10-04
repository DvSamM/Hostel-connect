import React from 'react'
import log from "../../assets/log.jpg";
import profile from "../../assets/profile.png";
import { Outlet } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-white shadow">
  <div class="container-fluid">
  <img draggable='false' src={log} alt="Book It" style={{width:"150px"}}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
      <form class="d-flex mx-auto pt-2  me-auto" role="search">
        <input class="form-control me-2" type="search" placeholder="Search For" aria-label="Search"/>
        <button class="btn btn-outline-success border-0" type="submit" style={{backgroundColor:"#445297", color:"white"}}>Search</button>
      </form>
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active fw-bold" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#">Hotels</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#">About Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link fw-bold " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
          </a>
        </li>
      </ul>
      <div style={{marginLeft:"10px"}}>
        <img src={profile} alt="" />
      </div>

    </div>
  </div>
</nav>
<Outlet/>
    </>
  )
}

export default TopNavbar