import React from 'react'
import log from "../../assets/log.jpg";
const Navbardash = () => {
  return (
    <>

    <nav class="navbar navbar-expand-lg bg-body-white shadow">
  <div class="container-fluid">
  <img src={log} alt="Book It" style={{width:"150px"}}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active fw-bold" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link fw-bold " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
          </a>
         
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search For" aria-label="Search"/>
        <button class="btn btn-outline-success border-0" type="submit" style={{backgroundColor:"#445297", color:"white"}}>Search</button>
      </form>
      <div style={{border:"1px solid black", borderRadius:"30px", padding:"5px", margin:"5px" }}>
      <i class="fa-duotone fa fa-solid fa-user fa-2x d-sm-none" ></i>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbardash