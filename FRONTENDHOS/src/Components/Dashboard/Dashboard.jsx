import React from 'react'
import hot from "../../../src/assets/hot.jpg"

const Dashboard = () => {
  return (
    <>
    
    <div class="px-4 pt-5 my-5 text-center">
    <h1 class="display-4 fw-bold text-body-emphasis">WELCOME TO BOOKIT!</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Discover the ultimate hotel booking experience with our user-friendly platform. Explore a wide range of luxurious accommodations</p>
    </div>
    <div class="" >  
      <div class=" hotel">
        <img src={hot} class="img-fluid rounded-3 mb-4" alt="Example image" />
      </div>
    </div>
  </div>
    </>
  )
}

export default Dashboard