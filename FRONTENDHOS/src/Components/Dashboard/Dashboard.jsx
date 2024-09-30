import React, { useEffect, useState } from 'react';
import hot from "../../../src/assets/hot.jpg";

const Dashboard = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch hotels from the backend
    fetch('http://localhost:3000/api/hotels')
      .then(response => response.json())
      .then((data)=>{
        setHotels(data)
        console.log(data);
        
      })
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  return (
    <>
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-4 fw-bold text-body-emphasis">WELCOME TO BOOKIT!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Discover the ultimate hotel booking experience with our user-friendly platform. Explore a wide range of luxurious accommodations.
          </p>
        </div>
        <div>
          <div className="hotel">
            <img src={hot} className="img-fluid rounded-3 mb-4" alt="Example image"  style={{ width: '100%', height: '725px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <h1 className="text-center display-2 mb-4">Elevate Your Gatewayyd</h1>
          <p className='text-center'>Indulge in the comfort and elegance of our meticulously designed</p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {hotels.map((room) => (
            <div key={room.id} className="col">
              <div className="card shadow-sm">
                <img 
                  src={room.imageUrl} 
                  className="bd-placeholder-img card-img-top" 
                  alt={room.name} 
                  style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{room.name}</p>
                  <p className="card-text">{room.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button class="btn rounded-0 d-none fw-bold d-lg-block" style={{backgroundColor:"#445297", color:"white"}}>View</button>
                    <button class="btn rounded-0 d-none fw-bold d-lg-block" style={{backgroundColor:"#445297", color:"white"}}>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className='container'>
          <div className='row mt-5'>
            <div className='col-10 col-sm-8   col-lg-5'>
          <article className='mt-2'>
            <p className='fs-4'>ACCOMODATION</p>
          <input type="text" placeholder='Packages' className='form-control'/>
          </article>
          <article className='mt-2'>
          <input type="text" placeholder='Offers' className='form-control' />
          </article>
          <article className='mt-2'>
          <input type="text" placeholder='Contact' className='form-control' />
          </article>
          <div>
          <article className='mt-2'>
            <p className='fs-4'>AMENTIES</p>
          <input type="text" placeholder='Dining' className='form-control' />
          </article>
          <article>
          <input type="text" placeholder='Explore' className='mt-2 form-control' />
          </article>
          <button class="btn rounded-1 mt-3 d-none fw-bold me-3 d-lg-block" style={{backgroundColor:"#445297", color:"white"}}>
            Book Now
          </button>
          </div>
            </div>
            <div className='col-lg-6'>
                <img src={hot} className="img-fluid rounded-3 mb-4" alt="Example image" />
            </div>
          </div>
          
        </div>


    </>
  );
};

export default Dashboard;
